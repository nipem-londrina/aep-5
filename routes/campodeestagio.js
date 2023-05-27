const controller = require("../controllers/campodeestagio")
const router = require("express").Router()

router.post("/", controller.cadastrar)

module.exports = { router }
