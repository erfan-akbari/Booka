import connectToDB from "@/utils/db"
import featuredModel from "@/models/featured"

const handler = async (req, res) => {
    connectToDB()

    if (req.method === 'GET') {
        try {
            const featured = await featuredModel.find()
            return res.status(200).json(featured)
        } catch (error) {
            return res.status(500).json({ message: 'server error' })
        }
    }

    return res.json({ message: 'http method not found' })
}

export default handler