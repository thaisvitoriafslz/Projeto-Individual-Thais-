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

    function QtdTentativasUsuario(req, res) {
        var idUsuario = req.body.idUsuarioServer;
    
    
            pontuacaoModel.QtdTentativasUsuario(idUsuario)
                .then(
                    function (response) {
                        res.json(response);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao calcular as tentativas do usuario! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
        
        function TotalUsuarios(req, res) {
            var idUsuario = req.body.idUsuarioServer;
        
                pontuacaoModel.TotalUsuarios(idUsuario)
                    .then(
                        function (response) {
                            res.json(response);
                        }
                    ).catch(
                        function (erro) {
                            console.log(erro);
                            console.log("\nHouve um erro ao calcular o total de acessos! Erro: ", erro.sqlMessage);
                            res.status(500).json(erro.sqlMessage);
                        }
                    );
            }


module.exports = {
    InserirPontuacao,
    QtdTentativasUsuario,
    TotalUsuarios
}