const { connection } = require("../database/connection")

class InstituicaoDeEnsino {
    cadastrar(razaoSocial, cnpj, tipoDeInstituicao, nomeContato, telefone, email, endereco, senha) {
        connection.query(
            `INSERT INTO insituicaoDeEnsino (razaoSocial, cnpj, tipoDeInstituicao, nomeContato, telefone, endereco)
            VALUES (
                '${razaoSocial}',
                '${cnpj}',
                '${tipoDeInstituicao}',
                '${nomeContato}',
                '${telefone}',
                '${endereco}'
            )`,
            function (err) {
                if (err) throw err
            }
        )
        connection.query(
            "SELECT last_insert_id() as id",
            (err, rows) => {
                if (err) throw err
                let lastInsertId = rows[0].id

                connection.query(
                    `INSERT INTO usuario (login, senha, tipoUsuario, idInstituicaoDeEnsino)
                    VALUES (
                    '${email}',
                    '${senha}',
                    '2',
                    '${lastInsertId}
                    ')`,
                    function (err) {
                        if (err) throw err
                    }
                )
            }
        )
    }
}

module.exports = { InstituicaoDeEnsino }