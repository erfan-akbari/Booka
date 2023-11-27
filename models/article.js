const mongoose = require('mongoose')
const writerModel = require('@/models/writer')

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

const model = mongoose.models?.article || mongoose.model('article', schema)

export default model;