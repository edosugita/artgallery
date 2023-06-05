import { connect } from "@/lib/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { uuidUser, uuidArt, order_id, payment_status, payment_method, gross_amount } = req.body
        const transaction_time = new Date()

        console.log(transaction_time)

        try {

            const connection = await connect();
            
            const [rows] = await connection.query(
                'INSERT INTO payments (order_id, payment_status, transaction_time, gross_amount) VALUES (?, ?, ?, ?)',
                [
                    order_id,
                    payment_status,
                    transaction_time,
                    gross_amount,
                ]
            )

            const [items] = await connection.query(
                'NSERT INTO items (uuid_user, uuid_art, payment_id, status, times) VALUES (?, ?, ?, ?, ?)',
                [
                    uuidUser,
                    uuidArt,
                    paymentId,
                    payment_status,
                    transaction_time
                ]
            )

            connection.end()

            // const paymentQuery = `
            //   INSERT INTO payment (
            //     order_id,
            //     payment_status,
            //     payment_method,
            //     transaction_id,
            //     transaction_time,
            //     gross_amount,
            //     created_at,
            //     updated_at
            //   )
            //   VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            // `;

            // const transaction_time = new Date();

            // const paymentValues = [
            //   order_id,
            //   payment_status,
            //   payment_method,
            //   order_id,
            //   transaction_time,
            //   gross_amount,
            //   transaction_time,
            //   transaction_time,
            // ];

            // const [paymentResult] = await connection.execute(paymentQuery, paymentValues);

            // const paymentId = paymentResult.insertId;

            // const uuidArtsSeparated = uuidArts.split(",");

            // const itemsQuery = `
            //   INSERT INTO items (
            //     uuid_user,
            //     uuid_art,
            //     payment_id,
            //     status,
            //     times,
            //     created_at,
            //     updated_at
            //   )
            //   VALUES (?, ?, ?, ?, ?, ?, ?)
            // `;

            // for (const uuidArt of uuidArtsSeparated) {
            //   const itemsValues = [
            //     uuidUser,
            //     uuidArt,
            //     paymentId,
            //     payment_status,
            //     transaction_time,
            //     transaction_time,
            //     transaction_time,
            //   ];

            //   await connection.execute(itemsQuery, itemsValues);
            // }

            res.status(200).json({ message: "Payment data saved successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
