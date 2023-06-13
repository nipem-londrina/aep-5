function renderCadastroCampo(req, res) {
    res.render("autarquia/cadastrar-campo_estagio")
}

function renderCadastroInstituicao(req, res) {
    res.render("autarquia/cadastrar-instituicao_ensino")
}

module.exports = { renderCadastroCampo, renderCadastroInstituicao }
