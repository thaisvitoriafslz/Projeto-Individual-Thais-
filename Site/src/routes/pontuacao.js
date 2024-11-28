var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/InserirPontuacao", function (req, res) {
    pontuacaoController.InserirPontuacao(req, res);
})

router.post("/QtdTentativasUsuario", function (req, res) {
    pontuacaoController.QtdTentativasUsuario(req, res);
})

router.post("/TotalUsuarios", function (req, res) {
    pontuacaoController.TotalUsuarios(req, res);
})

module.exports = router;