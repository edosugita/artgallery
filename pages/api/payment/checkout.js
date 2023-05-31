import { connect } from "@/lib/db";
import snap from "@/components/payment/midtrans";

export default async function handler(req, res) {
  const { totalPrice, selectedItems, paymentMethod } = req.body;

  try {
    const transaction = await snap.createTransactionToken({
      transaction_details: {
        gross_amount: totalPrice,
        expiry: {
          start_time: new Date(),
          unit: snap.ExpiryUnit.MINUTE,
          duration: 10,
        },
      },
      item_details: selectedItems.map((item) => ({
        id: item.id_cart,
        price: item.price,
        quantity: 1,
        name: item.artname,
      })),
    });

    // Simpan data pembayaran ke tabel "Payments"
    const paymentData = {
      payment_status: "pending",
      payment_method: paymentMethod,
      transaction_id: transaction.transactionId,
      transaction_time: new Date(),
      gross_amount: totalPrice,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const connection = await connect();

    // Lakukan penyimpanan data ke tabel "Payments"
    const insertPaymentQuery = `INSERT INTO payments SET ?`;
    const [insertPaymentResult] = await connection.query(insertPaymentQuery, paymentData);

    if (insertPaymentResult.affectedRows > 0) {
      const paymentId = insertPaymentResult.insertId;

      // Simpan data pembelian ke tabel "Items"
      const insertItemsQuery = `
        INSERT INTO items (uuid_user, uuid_arts, payment_id, time, status)
        SELECT ?, uuid_art, ?, 'pending', NOW() FROM cart WHERE id_cart IN (${selectedItems.join(",")})
      `;
      const [insertItemsResult] = await connection.query(insertItemsQuery, [req.session.user.uuid_user, paymentId]);

      if (insertItemsResult.affectedRows > 0) {
        // Jadwalkan penghapusan item setelah 10 menit jika pembayaran belum selesai
        setTimeout(async () => {
          const deleteItemsQuery = `DELETE FROM items WHERE payment_id = ? AND status = 'pending'`;
          const [deleteItemsResult] = await connection.query(deleteItemsQuery, paymentId);

          if (deleteItemsResult.affectedRows > 0) {
            console.log("Item deleted successfully");
          } else {
            console.log("Failed to delete items");
          }
        }, 10 * 60 * 1000); // 10 menit dalam milidetik

        res.status(200).json({ token: transaction.token });
      } else {
        res.status(500).json({ error: "Failed to insert items" });
      }
    } else {
      res.status(500).json({ error: "Failed to insert payment" });
    }

    connection.release();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create transaction token" });
  }
}
