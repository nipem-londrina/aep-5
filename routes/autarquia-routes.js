const controller = require("../controllers/autarquia-controller")
const router = require("express").Router()

router.get("/localEstagio", controller.renderCadLocEs)
router.get("/instituicao", controller.renderCadIES)

module.exports = { router }
