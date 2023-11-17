import connectToDB from '@/utils/db'
import articlesModel from '@/models/article'

const handlear = async (req, res) => {
    connectToDB()

    if (req.method === 'GET') {
        const articles = await articlesModel.find()
        if (articles) {
            return res.status(200).json(articles)
        } else {
            return res.status(500).json({ message: 'server error' })
        }
    }

}

export default handlear