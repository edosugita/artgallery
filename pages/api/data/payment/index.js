import { connect } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { uuidUser, uuidArt, order_id, payment_status, payment_method, gross_amount } = req.body;
      console.log([
        uuidUser, uuidArt, order_id, payment_status, payment_method, gross_amount
      ])

      const connection = await connect();

      const paymentQuery = `
        INSERT INTO payment (
          order_id,
          payment_status,
          payment_method,
          transaction_id,
          transaction_time,
          gross_amount,
          created_at,
          updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const paymentValues = [
        order_id,
        payment_status,
        payment_method,
        order_id,
        transaction_time = new Date(),
        gross_amount,
      ];

      const [paymentResult] = await connection.execute(paymentQuery, paymentValues);

      const paymentId = paymentResult.insertId;

      const uuidArtsSeparated = paymentData.uuid_arts.split(",");

      const itemsQuery = `
        INSERT INTO items (
          uuid_user,
          uuid_art,
          payment_id,
          status,
          times,
          created_at,
          updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

      for (const uuidArt of uuidArtsSeparated) {
        const itemsValues = [
          uuidUser,
          uuidArt,
          paymentId,
          payment_status,
          transaction_time = new Date(),
        ];

        await connection.execute(itemsQuery, itemsValues);
      }

      connection.end();

      res.status(200).json({ message: "Payment data saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
