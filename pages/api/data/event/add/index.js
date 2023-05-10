import { hash } from "bcrypt";
import path from "path";
import fs from "fs";
import {connect} from "@/lib/db";

export default async function Add(req, res) {
    if (req.method === 'POST') {
        const { title, slug, content, dateEvent, endEvent } = req.body

        const image = 'Image.png'
        // const imageData = Buffer.from(image.data)
        // const imageEncrypt = await hash(imageData, 10)

        try {
            const connection = await connect()

            const [rows] = await connection.query(
                'INSERT INTO event (title, [slug], content, image, date_event, end_event) VALUES (?, ?, ?, ?, ?, ?)',
                [
                    title,
                    slug,
                    content,
                    image,
                    dateEvent,
                    endEvent
                ]
            )
            connection.end();

            // const folderPath = path.join(process.cwd(), 'public', 'images', 'product')
            // if (!fs.existsSync(folderPath)) {
            //     fs.mkdirSync(folderPath, { recursive: true })
            // }
            //
            // const imagePath = path.join(folderPath, `${imageEncrypt}.${image.type.split('/')[1]}`)
            // fs.writeFileSync(imagePath, image.data)

            res.status(201).json({message: "Event Created!"})
        } catch (e) {
            console.log(image)
            res.status(500).json({ message: 'Event created failed!', e})
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}