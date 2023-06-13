const controller = require("../controllers/views-instituicao_ensino")
const router = require("express").Router()

router.get("/solicitar", controller.renderSolicitar)

module.exports = { router }
