const mongoose = require('mongoose')
const writersModel = require('@/models/writer')
const commentsModel = require('@/models/comment')

const schema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        posters: {
            type: Array,
            required: true,
        },
        shortName: {
            type: String,
            required: true,
        },
        creator: {
            type: mongoose.Types.ObjectId,
            ref: "writer",
            required: true,
        },
    },
    {
        timestamps: true
    }
)

schema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'mainID'
})

const model = mongoose.models?.article || mongoose.model('article', schema)

export default model;