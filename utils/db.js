const mongoose = require('mongoose')

const connectToDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return false
        }
        await mongoose.connect("mongodb://127.0.0.1:27017/booka-db")
        console.log('Connected to DB successfully :))')

    } catch (error) {
        console.log('Error in DB connection ===>', error)
    }
}

export default connectToDB