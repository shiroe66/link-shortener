const express = require("express")
const app = express()

const indexRoutes = require("./routes/index")

app.set("view engine", "ejs")
app.set("views", "views")

app.use(indexRoutes)

app.listen(3000)
