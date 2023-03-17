const { Emoji } = require("../models/emoji")

function helloWorldRoute(req, res) {
    const emoji = new Emoji()
    res.render("index.ejs", { mensagem: `Olá mundo! ${emoji.char}`})
}

module.exports = { helloWorldRoute }