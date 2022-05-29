const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err))
}

module.exports = connectDB
