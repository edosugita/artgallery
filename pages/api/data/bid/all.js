import {connect} from "@/lib/db";

export default async function All(req, res) {
    if (req.method === 'GET') {
        try {
            const {uuidArt} = req.query
            const connection = await connect()

            let sql = 'SELECT MAX(price_bid) AS max_bid_price FROM arts_bid WHERE uuid_arts = ?';

            const [rows] = await connection.query(sql, uuidArt);

            connection.end()

            if (rows.length === 0) {
                res.status(404).json({ message: `Data not found` })
                return
            }

            res.status(200).json(rows)
        } catch (e) {
            res.status(500).json({ message: 'Failed to get all data!', e })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
