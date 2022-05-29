const express = require("express")
const app = express()

const indexRoutes = require("./routes/index")
const linkRoutes = require("./routes/links")

app.set("view engine", "ejs")
app.set("views", "views")

app.use(indexRoutes)
app.use("/links", linkRoutes)

app.listen(3000)
