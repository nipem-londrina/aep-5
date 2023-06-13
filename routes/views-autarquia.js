const controller = require("../controllers/views-autarquia")
const router = require("express").Router()

router.get("/cadastrar/campo_estagio", controller.renderCadastroCampo)
router.get("/cadastrar/instituicao_ensino", controller.renderCadastroInstituicao)

module.exports = { router }
