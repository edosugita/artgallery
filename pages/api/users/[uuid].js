import {connect} from "@/lib/db";

export default async function Uuid(req, res) {
    if (req.method === 'GET') {
        const uuid = req.query.uuid

        try {
            const connection = await connect()

            const [rows] = await connection.query(
                'SELECT uuid_user, name, username, email, password, phone, avatar, role, created_at, updated_at FROM users WHERE uuid_user = ?',
                [uuid]
            )

            connection.end()

            if (rows.affectedRows === 0) {
                res.status(404).json({ message: `User not found` })
                return
            }

            const user = rows[0]

            res.status(200).json({user})
        } catch (e) {
            res.status(500).json({ message: 'Failed to get user!', e })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}