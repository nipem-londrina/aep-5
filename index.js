require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.set("view engine", "ejs")
app.set("head", "views/partials")

app.use("/", require("./routes/helloworld").router)
app.use("/", require("./routes/autarquia-routes").router)

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`))
