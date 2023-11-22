import connectToDB from "@/utils/db"
import booksModel from "@/models/book"

const handler = async (req, res) => {
    connectToDB()
    if (req.method === 'GET') {

        let books;

        if (req.query.q) {
            const { q } = req.query
            books = await booksModel.find({ title: { $regex: q } })
        } else if (req.query.cat) {
            books = await booksModel.find({ category: query.cat })
        } else if (req.query.w) {
            books = await booksModel.find({ writer: query.w })
        } else if (req.query.t) {
            books = await booksModel.find({ translators: query.t })
        } else {
            books = await booksModel.find()
        }


        if (books) {
            return res.status(200).json(books)
        } else {
            return res.status(500).json({ message: 'server error' })
        }
    }
}

export default handler