import {connect} from "@/lib/db";

export default async function All(req, res) {
    if (req.method === 'GET') {
        try {
            const connection = await connect()
            const {limit} = req.query

            let sql = 'SELECT * FROM information';

            if (limit) {
                sql += ` LIMIT ${limit}`;
            }

            const [rows] = await connection.query(sql);

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
