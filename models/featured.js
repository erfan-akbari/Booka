const mongoose = require('mongoose')
const commentsModel = require('@/models/comment')

const schema = mongoose.Schema({
    title: {
        type: String
    },
    caption: {
        type: String
    },
    poster: {
        type: String
    },
    price: {
        type: Number
    },
    score: {
        type: Number
    },
    discount: {
        type: Number
    },
    color: {
        type: String
    },
    shadow: {
        type: String
    }
})

schema.virtual("comments", {
    ref: "comment",
    localField: "_id",
    foreignField: "mainID",
})

const model = mongoose.models?.featured || mongoose.model('featured', schema)

export default model;