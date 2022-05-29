const mongoose = require("mongoose")
const link =
  "mongodb+srv://user:<Aa1234>@cluster0.jqgxgtb.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () => {
  mongoose.connect(link, { useNewUrlParser: true })
}

module.exports = connectDB
