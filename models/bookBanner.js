const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
})

const model = mongoose.models?.bookBanner || mongoose.model('bookBanner', schema)

export default model;