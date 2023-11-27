const mongoose = require('mongoose');
const commentsModel = require('@/models/comment')

const handler = (req, res) => {
    const { method } = req

    if (method === 'GET') {
        /// codes
    } else if (method === 'POST') {
        /// codes
    }
}

export default handler