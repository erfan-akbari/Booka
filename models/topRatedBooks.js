const mongoose = require('mongoose')

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

const model = mongoose.models.topRatedBooks || mongoose.model('topRatedBooks', schema)

export default model;