const express = require('express')
const app = express()
const PORT = 80

app.get("/", (req, res) => {
    res.send('Olá mundo!')
})

app.listen(PORT, () => console.log(`Funcionando na porta ${PORT}`))
