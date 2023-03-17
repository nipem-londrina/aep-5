
function helloWorldRoute(req, res) {
    res.render("index.ejs", { mensagem: "Olá mundo!"})
}

module.exports = { helloWorldRoute }