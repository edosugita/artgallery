import {connect} from "@/lib/db"
import { hash } from "bcrypt"

export default async function Uuid(req, res) {
    if (req.method === 'PUT') {
        const { password } = req.body
        const uuid = req.query.uuid
        const hashedPassword = await hash(password, 10)

        try {
            const connection = await connect()

            const [rows] = await connection.query(
                'UPDATE users SET password = ? WHERE uuid_user = ?',
                [hashedPassword, uuid]
            )

            connection.end()

            if (rows.affectedRows === 0) {
                res.status(404).json({ message: `Password not found` })
            }

            res.status(200).json({ message: `Password has been updated` })
        } catch (e) {
            res.status(500).json({ message: 'Password updated failed!', e })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}