const controller = require("../controllers/helloworld")

const list = [
    {
        func: controller.helloWorldRoute,
        route: "/",
        method: "GET"
    }
]

module.exports = { list }
