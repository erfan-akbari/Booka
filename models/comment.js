const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
            maxLength: 200,
            minLength: 3,
        },
        creator: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        book: {
            type: mongoose.Types.ObjectId,
            ref: 'book',
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const model = mongoose.models?.comment || mongoose.model('comment', schema)

export default model;