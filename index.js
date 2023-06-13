require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.use(require("body-parser").urlencoded({extended: false}))

app.set("view engine", "ejs")

app.use(express.static("public"))

app.use("/", require("./routes/views-hello_world").router)
app.use("/a", require("./routes/views-autarquia").router)
app.use("/api/v1/campodeestagio", require("./routes/campo_estagio").router)

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`))
