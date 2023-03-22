require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.use("/", require("./routes/helloworld").router)

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`))
