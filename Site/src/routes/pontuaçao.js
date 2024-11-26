var express = require("express");
var router = express.Router();

var pontuaçaoController = require("../controllers/pontuaçaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/InserirPontuaçao", function (req, res) {
    pontuaçaoController.InserirPontuaçaoController(req, res);
})


module.exports = router;