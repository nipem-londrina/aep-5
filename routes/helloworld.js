const controller = require("../controllers/helloworld")
const router = require("express").Router()

router.get("/", controller.renderHelloWorld)

module.exports = { router }
