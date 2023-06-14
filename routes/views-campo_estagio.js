const router = require("express").Router()

router.get("/atualizar", (req, res) => res.render("campo_estagio/atualizar-vagas"))

module.exports = { router }
