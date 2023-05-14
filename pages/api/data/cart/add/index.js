import { connect } from "@/lib/db";

export default async function Add(req, res) {
    if (req.method === "POST") {
        const { uuidUser, uuidArt } = req.query;
    try {
        const connection = await connect();

        let sqlCheck = "SELECT COUNT(*) AS count FROM cart WHERE uuid_art = ?";
        const [rowsCheck] = await connection.query(sqlCheck, [uuidArt]);
        const isUuidArtExists = rowsCheck[0].count > 0;

        if (isUuidArtExists) {
            res.status(400).json({ message: "Uuid Art already exists in cart!" });
        } else {
            let sqlInsert = "INSERT INTO cart (uuid_user, uuid_art) VALUES (?, ?)";
            const [rowsInsert] = await connection.query(sqlInsert, [uuidUser, uuidArt]);
            connection.end();
            res.status(200).json({ message: "Data has been created!", data: rowsInsert });
        }

        res.status(200).json({ message: "Data has been created!", data: rows });
    } catch (e) {
        res.status(405).json({ message: "Method not allowed" });
    }
    }
}
