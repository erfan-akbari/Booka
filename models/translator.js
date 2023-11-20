const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String
    }
})

const model = mongoose.models.translator || mongoose.model('translator', schema)

export default model;