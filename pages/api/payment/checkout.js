import snap from "@/components/payment/midtrans";

export default async function handler(req, res) {

  const { totalPrice, selectedItems } = req.body;

  try {

    const transaction = await snap.createTransactionToken({
      transaction_details: {
        order_id: "ORDER_ID",
        gross_amount: totalPrice,
      },
      item_details: selectedItems.map((itemId) => ({
        id: itemId,
        price: 10000,
        quantity: 1,
        name: "Item Name",
      })),
    });

    res.status(200).json({ token: transaction.token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create transaction token" });
  }
}
