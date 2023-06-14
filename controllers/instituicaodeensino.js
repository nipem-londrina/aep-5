const { InstituicaoDeEnsino } = require("../models/instituicaodeensino")

function cadastrar(req, res) {
    const model = new InstituicaoDeEnsino()
    model.cadastrar(
        req.body.razaoSocial,
        req.body.cnpj,
        req.body.tipoDeInstituicao,
        req.body.nomeContato,
        req.body.telefone,
        req.body.email,
        req.body.endereco,
        req.body.senha
    )
    res.end("cadastrado com sucesso (eu acho (não olhei))")
}

module.exports = { cadastrar }