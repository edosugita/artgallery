import {connect} from "@/lib/db";

export default async function All(req, res) {
    if (req.method === 'GET') {
        try {
            const {uuidArt, uuidUser} = req.query
            const connection = await connect()

            let sql = 'SELECT MAX(ab.price_bid) AS max_bid_price, ab.uuid_user, u.name FROM arts_bid AS ab JOIN users AS u ON ab.uuid_user = u.uuid_user WHERE ab.uuid_arts = ? AND ab.uuid_user = ?';

            const [rows] = await connection.query(sql, [uuidArt, uuidUser]);

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
