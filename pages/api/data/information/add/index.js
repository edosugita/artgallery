import { hash } from "bcrypt";
import path from "path";
import fs from "fs";
import {connect} from "@/lib/db";

export default async function Add(req, res) {
    if (req.method === 'POST') {
        const { title, slug, information } = req.body

        const image = 'Image.png'
        // const imageData = Buffer.from(image.data)
        // const imageEncrypt = await hash(imageData, 10)

        try {
            const connection = await connect()

            const [rows] = await connection.query(
                'INSERT INTO information (title, slug, information, image) VALUES (?, ?, ?, ?)',
                [
                    title,
                    slug,
                    information,
                    image
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

            res.status(201).json({message: "Information Created!"})
        } catch (e) {
            console.log(image)
            res.status(500).json({ message: 'Information created failed!', e})
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}