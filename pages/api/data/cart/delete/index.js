import { connect } from "@/lib/db";

export default async function Delete(req, res) {
  if (req.method === "DELETE") {
    const { uuidUser, uuidArt } = req.query;
    try {
      const connection = await connect();

      let sqlCheck = "SELECT COUNT(*) AS count FROM cart WHERE uuid_user = ? AND uuid_art = ?";
      const [rowsCheck] = await connection.query(sqlCheck, [uuidUser, uuidArt]);
      const isDataExists = rowsCheck[0].count > 0;

      if (isDataExists) {
        let sqlDelete = "DELETE FROM cart WHERE uuid_user = ? AND uuid_art = ?";
        await connection.query(sqlDelete, [uuidUser, uuidArt]);
        connection.end();
        res.status(200).json({ message: "Data has been deleted!" });
      } else {
        res.status(404).json({ message: "Data not found in cart!" });
      }
    } catch (e) {
      res.status(500).json({ message: "An error occurred while deleting data!" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
