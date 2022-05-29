const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const connectDB = require("./config/db")

const indexRoutes = require("./routes/index")
const linkRoutes = require("./routes/links")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set("view engine", "ejs")
app.set("views", "views")

app.use(indexRoutes)
app.use("/links", linkRoutes)

connectDB()
app.listen(3000)
