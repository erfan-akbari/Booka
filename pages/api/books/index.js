import connectToDB from "@/utils/db"
import booksModel from "@/models/book"

const handler = async (req, res) => {
    connectToDB()
    if (req.method === 'GET') {
        const books = await booksModel.find()
        if (books) {
            return res.status(200).json(books)
        } else {
            return res.status(500).json({ message: 'server error' })
        }
    }
    return res.json({ message: 'http method not found' })
}

export default handler