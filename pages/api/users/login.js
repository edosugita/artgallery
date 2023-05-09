import { connect } from "@/lib/db"
import { compare } from "bcrypt"

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const { email, password } = req.body

        try {
            const connection = await connect()
            const [rows] = await connection.query(
                'SELECT uuid_user, name, username, email, password, phone, avatar, role, created_at, updated_at FROM users WHERE email = ? OR username = ?',
                [email, email]
            )

            console.log(email)
            connection.end()
            if (rows.length !== 1) {
                res.status(401).json({message: 'Invalid credentials'})
            }
            
            const user = rows[0]
            const match = await compare(password, user.password)

            if (!match) {
                res.status(401).json({message: 'Invalid credentials'})
            }

            res.status(200).json({ user })
        } catch (e) {

        }

    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}
