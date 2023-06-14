const router = require("express").Router()

router.get("/cadastrar/campo_estagio", (req, res) => res.render("autarquia/cadastrar-campo_estagio"))
router.get("/cadastrar/instituicao_ensino", (req, res) => res.render("autarquia/cadastrar-instituicao_ensino"))

module.exports = { router }
