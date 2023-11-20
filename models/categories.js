const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String
    },
    route: {
        type: String
    },
})

const model = mongoose.models?.categories || mongoose.model('categories', schema)

export default model;