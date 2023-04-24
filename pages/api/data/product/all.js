import { connect } from "@/lib/db"

export default async function all(req, res) {
    if (req.method === 'GET') {
        const connection = connect()

        const [rows] = await connection.query(
            'SELECT * FROM arts'
        )

        connection.end();

        const data = rows[0];
        res.status(200).json({message: data})
    }
}
