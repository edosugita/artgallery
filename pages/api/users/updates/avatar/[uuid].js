import {connect} from "@/lib/db"
import { v4 as uuidV4 } from "uuid"
import sharp from "sharp"
import fs from "fs"
import path from "path"

export default async function Uuid(req, res) {
    if (req.method === 'PUT') {
        const { avatar } = req.body
        const uuid = req.query.uuid

        try {
            const connection = await connect()
        } catch (e) {
            res.status(500).json({ message: 'Image updated failed!', e })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}