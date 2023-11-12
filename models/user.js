const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: [{
        type: String,
        required: true,
        minLength: 3,
        pattern: /^[a-z0-9_-]{3,15}$/gm
    }],
    password: [{
        required: true,
        minLength: 6,
        maxLength: 16,
        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm
    }],
    email: [{
        type: String,
        required: true,
        pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm
    }]
})

const model = mongoose.models.user || mongoose.model('user', schema)

export default model;