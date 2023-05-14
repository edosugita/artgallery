import { connect } from "@/lib/db"

export default async function All(req, res) {
  if (req.method === 'GET') {
    const { uuidUser } = req.query
    try {
      const connection = await connect()

      let sql = "SELECT *FROM cart AS c JOIN arts AS a ON c.uuid_art = a.uuid_art JOIN users AS u ON a.uuid_user = u.uuid_user WHERE c.uuid_user = ?"

      const [rows] = await connection.query(sql, [uuidUser])

      connection.end()

      res.status(200).json(rows)
    } catch (e) {
      res.status(405).json({ message: "Method not allowed", e })
    }
  }
}
