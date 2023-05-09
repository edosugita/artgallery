import {connect} from "@/lib/db"

export default async function Uuid(req, res) {
    if (req.method === 'PUT') {
        const { phone } = req.body
        const uuid = req.query.uuid
        const phoneNumber = phone.substring(1)

        try {
            const connection = await connect()

            const [rows] = await connection.query(
                'UPDATE users SET phone = ? WHERE uuid_user = ?',
                [phoneNumber, uuid]
            )

            connection.end()

            if (rows.affectedRows === 0) {
                res.status(404).json({ message: `Number phone not found` })
            }

            res.status(200).json({ message: `Number phone has been updated` })
        } catch (e) {
            res.status(500).json({ message: 'Number phone updated failed!', e })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}