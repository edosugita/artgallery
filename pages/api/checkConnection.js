import { connect } from "@/lib/db";

export default async function handler(req, res) {
  try {
    const connection = await connect();
    res.status(200).json({ message: 'Database connected!' });
    connection.end();
  } catch (e) {
    res.status(500).json({ message: 'Database connection failed!' });
  }
}