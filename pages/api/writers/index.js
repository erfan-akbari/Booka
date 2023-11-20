import connectToDB from '@/utils/db'
import writerModel from "@/models/writer"
const mongoose = require('mongoose')

const handler = async (req, res) => {
    connectToDB()

    if (req.method === 'GET') {
        const data = await writerModel.find()
        if (data) {
            return res.json(data)
        } else {
            return res.status(500).json({ message: 'server error' })
        }
    }

}

export default handler