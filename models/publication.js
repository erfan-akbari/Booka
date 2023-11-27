const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String
    }
})

const model = mongoose.models?.publications || mongoose.model('publications', schema)

export default model;