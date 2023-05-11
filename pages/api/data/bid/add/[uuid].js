import {connect} from "@/lib/db";

export default async function Uuid(req, res) {
    if (req.method === 'POST') {
        const uuid = req.query.uuid
        const {uuidUser} = req.query
        const {price} = req.body

        try {
            const connection = await connect()

            const [rows] = await connection.query(
                'INSERT INTO arts_bid (uuid_user, uuid_arts, price_bid) VALUES (?, ?, ?)',
                [uuidUser, uuid, price]
            )

            connection.end()

            res.status(200).json({ message: `Data has been created` })
        } catch (e) {
            res.status(500).json({ message: 'Failed to created data!', e })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}