const { Emoji } = require("../models/emoji")

async function renderHelloWorld(req, res) {
    const emoji = new Emoji()
    const datetime = await emoji.now()
    res.render("placeholder/hello_world.ejs", {
        mensagem: `Olá mundo! ${emoji.char}`,
        outramensagem: datetime
    })
}

module.exports = { renderHelloWorld }
