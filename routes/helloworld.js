const list = [
    {
        func: (req, res) => {
            res.send("Olá mundo!")
        },
        route: "/",
        method: "GET"
    }
]

module.exports = { list }
