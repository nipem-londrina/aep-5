const controller = require("../controllers/campo_estagio")
const router = require("express").Router()

router.post("/", controller.cadastrar)

module.exports = { router }
