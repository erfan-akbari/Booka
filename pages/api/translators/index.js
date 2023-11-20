import connectToDB from '@/utils/db'
import translatorModel from "@/models/translator"

const handler = async (req, res) => {
    connectToDB()

    if (req.method === 'GET') {
        const data = await translatorModel.find()
        if (data) {
            return res.json(data)
        } else {
            return res.status(500).json({ message: 'server error' })
        }
    }

}

export default handler