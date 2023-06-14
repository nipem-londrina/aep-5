const router = require("express").Router()

router.get("/solicitar", (req, res) => res.render("instituicao_ensino/solicitar"))

module.exports = { router }
