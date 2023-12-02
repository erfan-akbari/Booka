const mongoose = require('mongoose');
import commentsModel from '@/models/comment'
import connectToDB from '@/utils/db'

const handler = async (req, res) => {
    connectToDB()

    if (req.method === 'GET') {
        const comments = await commentsModel.find({}, '-__v').populate('creator')
        if (comments) {
            res.json(comments)
        } else {
            return res.status(500).json({ message: 'server error' })
        }
    } else if (req.method === 'POST') {
        const { text, creator, mainID } = req.body
        if (text && creator && mainID) {
            const newComments = await commentsModel.create({ text, creator, mainID })
            if (newComments) {
                res.status(201).json({ newComments, message: 'Comment created successfully' })
            } else {
                return res.status(500).json({ message: 'server error' })
            }
        } else {
            res.status(422).json({ message: 'Please submit the body correctly' })
        }
    }
}

export default handler;