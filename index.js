require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

var routes = []
routes = routes.concat(
    require("./routes/helloworld").list
)

routes.forEach(e => {
    switch (e.method) {
        case "GET":
            app.get(e.route, e.func)
            break
        case "POST":
            app.post(e.route, e.func)
            break
        case "PUT":
            app.put(e.route, e.func)
            break
        case "DELETE":
            app.delete(e.route, e.func)
            break
        default:
            console.log("ERROR! Invalid method.")
            break
    }
})

app.listen(PORT, () => console.log(`Funcionando na porta ${PORT}`))
