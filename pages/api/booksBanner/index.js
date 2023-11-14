import connectToDB from "@/utils/db"
import bookBannerModel from "@/models/bookBanner"

const handler = async (req, res) => {
    connectToDB()

    if (req.method === 'GET') {
        try {
            const bookBanner = await bookBannerModel.find()
            return res.status(200).json(bookBanner)
        } catch (error) {
            return res.status(500).json({ message: 'server error' })
        }
    }

    return res.json({ message: 'http method not found' })
}

export default handler