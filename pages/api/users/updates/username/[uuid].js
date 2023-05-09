import {connect} from "@/lib/db";

export default async function Uuid(req, res) {
    if (req.method === 'PUT') {
        const { username } = req.body
        const uuid = req.query.uuid

        try {
            const connection = await connect()

            const [usernameCheck] = await connection.query(
                'SELECT * FROM users WHERE username = ?',
                [username]
            )

            if (usernameCheck.length > 0) {
                res.status(400).json({ message: 'Username already exists' })
                return
            }


            const [rows] = await connection.query(
                'UPDATE users SET username = ? WHERE uuid_user = ?',
                [username, uuid]
            )

            connection.end()

            if (rows.affectedRows === 0) {
                res.status(404).json({ message: `Username not found` })
                return
            }

            res.status(200).json({ message: `Username has been updated` })
        } catch (e) {
            res.status(500).json({ message: 'Username updated failed!', e })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}