import { connect } from "@/lib/db";

export default async function Add(req, res) {
  if (req.method === "POST") {
    try {
      const { content } = req.body;

      if (!content) {
        return res.status(400).json({ message: "Content is required" });
      }

      const connection = await connect();

      const [userRows] = await connection.query("SELECT uuid_user FROM users");
      const users = userRows.map((row) => row.uuid_user);

      for (const uuidUser of users) {
        await connection.query(
          "INSERT INTO notification (uuid_user, content) VALUES (?, ?)",
          [uuidUser, content]
        );
      }

      connection.end();

      res.status(201).json({ message: "Notification Created!" });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Notification creation failed!", error: e });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
