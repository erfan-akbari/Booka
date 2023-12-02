const mongoose = require('mongoose')
const book = require('@/models/book')

const schema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
            maxLength: 200,
            minLength: 3,
        },
        creator: {
            type: String,
            required: true,
        },
        mainID: {
            type: mongoose.Types.ObjectId,
            ref: 'book' || 'article',
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const model = mongoose.models?.comment || mongoose.model('comment', schema)

export default model;