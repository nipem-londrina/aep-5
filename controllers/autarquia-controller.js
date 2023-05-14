//const {Autarquia} = require("../models/autarquia-model")

function renderCadLocEs(req, res) {
    res.render("autarquia/cadLocalEstagio")
}

function renderCadIES(req, res) {
    res.render("autarquia/cadIES")
}

module.exports = { renderCadLocEs, renderCadIES }
