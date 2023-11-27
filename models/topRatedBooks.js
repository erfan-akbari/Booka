const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    color: {
        type: String,
        required: true
    },
    shadow: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    translators: {
        type: String,
        required: true
    },
    publication: {
        type: String,
        required: true
    }
})

const model = mongoose.models?.topRatedBooks || mongoose.model('topRatedBooks', schema)

export default model;