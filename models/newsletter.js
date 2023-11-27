const mongoose = require('mongoose')

const schema = mongoose.Schema({
    email: {
        type: String,
    }
})

const model = mongoose.models?.newsletter || mongoose.model('newsletter', schema)

export default model;