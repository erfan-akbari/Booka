import connectToDB from '@/utils/db'
import articlesModel from '@/models/article'

const handler = async (req, res) => {
    connectToDB()

    if (req.method === 'GET') {
        const articles = await articlesModel.find({}).populate("creator");
        if (articles) {
            return res.json(articles)
        } else {
            return res.status(500).json({ message: 'server error' })
        }
    }

}

export default handler