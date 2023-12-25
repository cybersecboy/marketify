const mongoose = require("mongoose")

const connection = async (MONGODB_URL) => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("database connected...")
    } catch (error) {
        console.log("error connecting database")
    }
}

module.exports = connection
