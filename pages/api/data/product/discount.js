import {connect} from "@/lib/db";

export default async function Discount(req, res) {
    if (req.method === 'GET') {
        try {
            const connection = await connect();

            const { limit } = req.query;
            const discount = 'discount';

            let sql = 'SELECT * FROM `arts` JOIN `users` ON arts.uuid_user = users.uuid_user WHERE label = ? AND status = 1';

            if (limit) {
                sql += ` LIMIT ${limit}`;
            }

            const [rows] = await connection.query(sql, discount);
            connection.end();

            if (rows.affectedRows === 0) {
                res.status(404).json({ message: `Data not found` });
                return;
            }

            res.status(200).json(rows);
        } catch (e) {
            res.status(500).json({ message: 'Failed to get data discount!', e });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}