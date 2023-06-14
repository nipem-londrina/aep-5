const { connection } = require("../database/connection")

class CampoDeEstagio {
    cadastrar(nomeCampo, endereco, email, senha) {
        connection.query(
            `INSERT INTO localEstagio (nomeCampo, endereco)
            VALUES (
                '${nomeCampo}',
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
                    `INSERT INTO usuario (login, senha, tipoUsuario, idLocalEstagio)
                    VALUES (
                    '${email}',
                    '${senha}',
                    '1',
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

module.exports = { CampoDeEstagio }
