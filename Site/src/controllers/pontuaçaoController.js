var pontuaçaoModel = require("../models/pontuaçaoModel");

function InserirPontuaçaoController(req, res) {
    var pontuaçao = req.body.pontuaçaoServer;
    var fkUsuario = req.body.fkUsuarioServer;


        pontuaçaoModel.InserirPontuaçao(pontuaçao, fkUsuario)
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
    InserirPontuaçaoController,
}