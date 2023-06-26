const router = require("express").Router()

// note que todas essas rotas são prefixadas com "/api/v1"
const rotas = [
    {
        rota: "/instituicao_ensino",
        metodo: "post",
        controller: require("../controllers/instituicao_ensino").cadastrar
    },
    {
        rota: "/campo_estagio",
        metodo: "post",
        controller: require("../controllers/campo_estagio").cadastrar
    }
]


// setar as rotas usando as infomações da lista acima
rotas.forEach(e => {
    router.route(e.rota)[e.metodo](e.controller)
})

module.exports = { router }
