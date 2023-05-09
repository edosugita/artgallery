import { connect } from "@/lib/db"
import { hash } from "bcrypt"
import { v4 as uuidV4 } from "uuid";

export default async function register(req, res) {
  if (req.method === 'POST') {
    const { name, username, email, password, phone } = req.body
    const uuid = uuidV4()
    const hashedPassword = await hash(password, 10)
    const avatar = 'avatar.jpg'
    const role = 'user'
    const phoneNumber = phone.substring(1)

    try {
        const connection = await connect();

        const [emailCheck] = await connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        )

        if (emailCheck.length > 0) {
            res.status(400).json({ message: 'Email already exists' })
            return
        }

        const [usernameCheck] = await connection.query(
            'SELECT * FROM users WHERE username = ?',
            [username]
        )

        if (usernameCheck.length > 0) {
            res.status(400).json({ message: 'Username already exists' })
            return
        }

        const [uuidCheck] = await connection.query(
            'SELECT * FROM users WHERE uuid_user = ?',
            [uuid]
        )

        if (uuidCheck.length > 0) {
            res.status(400).json({ message: 'Something went wrong' })
            return
        }

        const [rows] = await connection.query(
            'INSERT INTO users (uuid_user, name, username, email, password, phone, avatar, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
                uuid,
                name,
                username,
                email,
                hashedPassword,
                phoneNumber,
                avatar,
                role
            ]
        )
        connection.end();
        res.status(201).json({message: "User Created!"})
    } catch (e) {
        res.status(500).json({ message: 'User registration failed!', e });
    }
  } else {
        res.status(405).json({ message: "Method not allowed" })
  }
}
