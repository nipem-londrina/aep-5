const controller = require("../controllers/hello_world")
const router = require("express").Router()

router.get("/", controller.renderHelloWorld)

module.exports = { router }
