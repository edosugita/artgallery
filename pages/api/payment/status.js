import snap from "@/components/payment/midtrans"

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { paymentId } = req.body;

      // Menggunakan objek snap untuk mendapatkan status pembayaran
      const snapClient = snap();
      const response = await snapClient.transaction.status(paymentId);

      // Memeriksa status pembayaran
      if (response.status_code === "200") {
        const { transaction_status } = response;

        if (transaction_status === "settlement") {
          // Pembayaran berhasil
          res.status(200).json({ status: "paid" });
        } else {
          // Pembayaran belum berhasil
          res.status(200).json({ status: "unpaid" });
        }
      } else {
        // Error saat memeriksa status pembayaran
        res.status(500).json({ error: "Failed to check payment status" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
