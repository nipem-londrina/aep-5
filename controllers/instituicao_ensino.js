const { InstituicaoEnsino } = require("../models/instituicao_ensino")

function cadastrar(req, res) {
    const model = new InstituicaoEnsino()
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
    res.end("cadastrado com sucesso (eu acho (nao olhei))")
}

module.exports = { cadastrar }
