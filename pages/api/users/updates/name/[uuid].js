import {connect} from "@/lib/db"

export default async function Uuid(req, res) {
    if (req.method === 'PUT') {
        const { name } = req.body
        const uuid = req.query.uuid

        try {
            const connection = await connect()

            const [rows] = await connection.query(
                'UPDATE users SET name = ? WHERE uuid_user = ?',
                [name, uuid]
            )

            connection.end()

            if (rows.affectedRows === 0) {
                res.status(404).json({ message: `Name not found` })
            }

            res.status(200).json({ message: `Name has been updated` })
        } catch (e) {
            res.status(500).json({ message: 'Name updated failed!', e })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}