require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.use(require("body-parser").urlencoded({extended: false}))

app.set("view engine", "ejs")

app.use(express.static("public"))

app.use("/", require("./routes/helloworld").router)
app.use("/", require("./routes/autarquia-routes").router)
app.use("/api/v1/campodeestagio", require("./routes/campodeestagio").router)
app.use("/api/v1/instituicaodeensino", require("./routes/instituicaodeensino").router)

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`))
