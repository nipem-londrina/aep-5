const router = require("express").Router()

const rotas = [
    // rotas gerais
    {
        rota: "/login",
        view: "login/login.ejs",
        metodo: "get",
        controller: naoprecisa
    },
    {
        rota: "/",
        view: "placeholder/hello_world.ejs",
        metodo: "get",
        controller: require("../controllers/emoji").renderHelloWorld
    },
    // rotas de autarquia
    {
        rota: "/a/alterar/solicitacao_estagio",
        view: "autarquia/alterar-solicitacao.ejs",
        metodo: "put",
        controller: naoprecisa
    },
    {
        rota: "/a/cadastrar/campo_estagio",
        view: "autarquia/cadastrar-campo_estagio.ejs",
        metodo: "get",
        controller: naoprecisa
    },
    {
        rota: "/a/cadastrar/instituicao_ensino",
        view: "autarquia/cadastrar-instituicao_ensino.ejs",
        metodo: "get",
        controller: naoprecisa
    },
    {
        rota: "/a/listar/ficha_estagio",
        view: "autarquia/listar-ficha.ejs",
        metodo: "get",
        controller: naoprecisa
    },
    {
        rota: "/a/analisar/solicitacao",
        view: "autarquia/ver-solicitacao.ejs",
        metodo: "get",
        controller: naoprecisa
    },
    // rotas de instituições
    {
        rota: "/i/solicitar",
        view: "instituicao_ensino/solicitar.ejs",
        metodo: "get",
        controller: naoprecisa
    },
    {
        rota: "/i/listar",
        view: "instituicao_ensino/listar-solicitacoes.ejs",
        metodo: "get",
        controller: naoprecisa
    },
    {
        rota: "/i/analisar",
        view: "instituicao_ensino/ver-solicitacoes.ejs",
        metodo: "get",
        controller: naoprecisa
    },
    // rotas de campos
    {
        rota: "/c/atualizar",
        view: "campo_estagio/atualizar-vagas.ejs",
        metodo: "get",
        controller: naoprecisa
    }
]

// controller para as rotas mais simples com páginas estáticas
function naoprecisa(view) {
    return (req, res) => res.render(view)
}

// setar as rotas usando as infomações da lista acima
rotas.forEach(e => {
    router.route(e.rota)[e.metodo](e.controller(e.view))
})

module.exports = { router }
