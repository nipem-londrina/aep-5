require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.use(require("body-parser").urlencoded({extended: false}))

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use("/", require("./routes/render").router)
app.use("/api/v1", require("./routes/entity").router)


app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`))
