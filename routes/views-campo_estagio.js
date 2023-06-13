const controller = require("../controllers/views-campo_estagio")
const router = require("express").Router()

router.get("/atualizar", controller.renderAtualizarVagas)

module.exports = { router }
