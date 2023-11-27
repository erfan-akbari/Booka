const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    }
})

const model = mongoose.models?.user || mongoose.model('user', schema)

export default model;