const controller = require("../controllers/views-login")
const router = require("express").Router()

router.get("/", controller.renderLogin)

module.exports = { router }
