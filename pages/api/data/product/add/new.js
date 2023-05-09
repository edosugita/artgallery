import { hash } from "bcrypt";
import {v4 as uuidV4} from "uuid";
import path from "path";
import fs from "fs";
import {connect} from "@/lib/db";

export default async function New(req, res) {
    if (req.method === 'POST') {
        const { uuid_user, artname, slug, description, dimension, discount, dateStartBid, dateEndbid, clockStartBid, clockEndBid, bid_price, price, kategori, label } = req.body
        const uuid = uuidV4()

        const image = 'Image.png'
        // const imageData = Buffer.from(image.data)
        // const imageEncrypt = await hash(imageData, 10)
        const kategoriList = kategori.join(",")

        try {
            const connection = await connect()

            const [rows] = await connection.query(
                'INSERT INTO arts (uuid_art, uuid_user, artname, slug, description, image, dimension, discount, date_start_bid, clock_start_bid, date_end_bid, clock_end_bid, bid_price, price, kategori, label) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    uuid,
                    uuid_user,
                    artname,
                    slug,
                    description,
                    image,
                    dimension,
                    discount,
                    dateStartBid,
                    clockStartBid,
                    dateEndbid,
                    clockEndBid,
                    bid_price,
                    price,
                    kategoriList,
                    label
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

            res.status(201).json({message: "Product Created!"})
        } catch (e) {
            console.log(image)
            res.status(500).json({ message: 'Product registration failed!', e})
        }
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}