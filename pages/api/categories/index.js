import connectToDB from "@/utils/db"
import categoriesModel from "@/models/categories"

const handler = async (req, res) => {
    connectToDB()

    if (req.method === 'GET') {
        try {
            const categories = await categoriesModel.find()
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(500).json({ message: 'server error' })
        }
    }

    return res.json({ message: 'http method not found' })
}

export default handler