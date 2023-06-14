const controller = require("../controllers/instituicaodeensino")
const router = require("express").Router()

router.post("/", controller.cadastrar)

module.exports = { router }