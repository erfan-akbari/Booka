import connectToDB from "@/utils/db"
import topRatedBooksModel from "@/models/topRatedBooks"

const handler = async (req, res) => {
    connectToDB()
    if (req.method === 'GET') {
        const topRatedBooks = await topRatedBooksModel.find()
        if (topRatedBooks) {
            return res.status(200).json(topRatedBooks)
        } else {
            return res.status(500).json({ message: 'server error' })
        }
    }

    return res.json({ message: 'http method not found' })
}

export default handler