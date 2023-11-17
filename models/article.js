const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    creator: {
        type: String,
    },
    intrCreator: {
        type: String,
    },
    createdAt: {
        type: Number,
    },
    shortName: {
        type: String,
    },
})

const model = mongoose.models.article || mongoose.model('article', schema)

export default model;