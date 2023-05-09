import {connect} from "@/lib/db";

export default async function Uuid(req, res) {
    if (req.method === 'PUT') {
        const { email } = req.body
        const uuid = req.query.uuid

        try {
            const connection = await connect()

            const [emailCheck] = await connection.query(
                'SELECT * FROM users WHERE email = ?',
                [email]
            )

            if (emailCheck.length > 0) {
                res.status(400).json({ message: 'Email already exists' })
                return
            }

            const [rows] = await connection.query(
                'UPDATE users SET email = ? WHERE uuid_user = ?',
                [email, uuid]
            )

            connection.end()

            if (rows.affectedRows === 0) {
                res.status(404).json({ message: `Email not found` })
                return
            }

            res.status(200).json({ message: `Email has been updated` })
        } catch (e) {
            res.status(500).json({ message: 'Email updated failed!', e })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}