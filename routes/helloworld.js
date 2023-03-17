const list = [
    {
        func: (req, res) => {
            res.render("index.ejs", { mensagem: "Olá mundo!"})
        },
        route: "/",
        method: "GET"
    }
]

module.exports = { list }
