const { Emoji } = require("../models/emoji")

function helloWorldRoute(req, res) {
    const emoji = new Emoji()
    emoji.now(datetime => {
        res.render("index.ejs", {
            mensagem: `Olá mundo! ${emoji.char}`,
            outramensagem: `${datetime}`
        })
    })
}

module.exports = { helloWorldRoute }
