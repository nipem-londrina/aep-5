const { Emoji } = require("../models/emoji")

function renderHelloWorld(view) {
    return async (req, res) => {
        const emoji = new Emoji()
        const datetime = await emoji.now()
        res.render(view, {
            mensagem: `Olá mundo! ${emoji.char}`,
            outramensagem: datetime
        })
    }
}

module.exports = { renderHelloWorld }
