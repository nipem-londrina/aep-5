const router = require("express").Router()

router.get("/", (req, res) => res.render("login/login"))

module.exports = { router }
