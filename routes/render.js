const router = require("express").Router()

const rotas = [
    // rotas gerais
    {
        rota: "/login",
        view: "login/login.ejs",
        controller: naoprecisa
    },
    {
        rota: "/",
        view: "placeholder/hello_world.ejs",
        controller: require("../controllers/emoji").renderHelloWorld
    },
    // rotas de autarquia
    {
        rota: "/a/alterar/solicitacao_estagio",
        view: "autarquia/alterar-solicitacao.ejs",
        method: "get",
        controller: naoprecisa
    },
    {
        rota: "/a/cadastrar/campo_estagio",
        view: "autarquia/cadastrar-campo_estagio.ejs",
        controller: naoprecisa
    },
    {
        rota: "/a/cadastrar/instituicao_ensino",
        view: "autarquia/cadastrar-instituicao_ensino.ejs",
        controller: naoprecisa
    },
    {
        rota: "/a/listar/ficha_estagio",
        view: "autarquia/listar-fichas.ejs",
        controller: naoprecisa
    },
    {
        rota: "/a/analisar/solicitacao",
        view: "autarquia/ver-solicitacao.ejs",
        controller: naoprecisa
    },
    // rotas de instituições
    {
        rota: "/i/solicitar",
        view: "instituicao_ensino/solicitar.ejs",
        controller: naoprecisa
    },
    {
        rota: "/i/listar",
        view: "instituicao_ensino/listar-solicitacoes.ejs",
        controller: naoprecisa
    },
    {
        rota: "/i/analisar",
        view: "instituicao_ensino/ver-solicitacao.ejs",
        controller: naoprecisa
    },
    // rotas de campos
    {
        rota: "/c/atualizar",
        view: "campo_estagio/atualizar-vagas.ejs",
        controller: naoprecisa
    }
]

// controller para as rotas mais simples com páginas estáticas
function naoprecisa(view) {
    return (req, res) => res.render(view)
}

// setar as rotas usando as infomações da lista acima
rotas.forEach(e => {
    router.route(e.rota).get(e.controller(e.view)) // todas as rotas são get
})

module.exports = { router }
