import connectToDB from '@/utils/db';
import booksModel from "@/models/book"

const handler = async (req, res) => {
    connectToDB()
    const { query, method } = req

    if (method === "GET") {
        const books = await booksModel.findOne({ _id: query.id })
        return res.status(200).json(books)
    }

    return res.json({ message: 'http method not found' })
}

export default handler