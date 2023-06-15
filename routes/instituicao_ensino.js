const controller = require("../controllers/instituicao_ensino")
const router = require("express").Router()

router.post("/", controller.cadastrar)

module.exports = { router }
