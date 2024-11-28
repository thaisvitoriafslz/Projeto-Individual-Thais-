var pontuacaoModel = require("../models/pontuacaoModel");

function InserirPontuacao(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var idUsuario = req.body.idUsuarioServer;


        pontuacaoModel.InserirPontuacao(pontuacao, idUsuario)
            .then(
                function (response) {
                    res.json(response);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao inserir a pontuaçao! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    InserirPontuacao,
}