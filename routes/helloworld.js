const controller = require("../controllers/helloworld")
const router = require("express").Router()

router.get("/", controller.helloWorldRoute)

module.exports = { router }
