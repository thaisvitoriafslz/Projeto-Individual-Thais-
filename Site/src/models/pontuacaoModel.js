var database = require("../database/config")

function InserirPontuacao(pontuaçao, fkUsuario) {
    
    var instrucaoSql = `
        insert into pontuaçao (pontuaçao, fkUsuario) values ('${pontuaçao}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    InserirPontuacao,
};