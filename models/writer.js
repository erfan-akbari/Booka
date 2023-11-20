const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String
    }
})

const model = mongoose.models.writer || mongoose.model('writer', schema)

export default model;