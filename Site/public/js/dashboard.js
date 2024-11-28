const quizScore = sessionStorage.getItem("quizScore");

const pontuacaoAtual = document.getElementById("pontuacao-atual");
const QtdTentativas = document.getElementById("qtd-tentativas");
const TotalUsuarios = document.getElementById("total-usuarios");

pontuacaoAtual.innerHTML = `${quizScore}/10`;

const Incorretas =  (10 - quizScore)
const PorcentagemErro = 10 * Incorretas
const PorcentagemAcerto = 10 * quizScore 

fetch("/pontuacao/QtdTentativasUsuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      idUsuarioServer: sessionStorage.ID_USUARIO
    }),
  }).then(function (resposta) {
    console.log("resposta: ", resposta);

    if (resposta.ok) {
        
        resposta.json().then(json => {

          QtdTentativas.innerHTML = json[0].QtdTentativas

        });

    } else {
      throw "Houve um erro ao exibir a quantidade de tentativas!";
    }
  })


  
  fetch("/pontuacao/TotalUsuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      idUsuarioServer: sessionStorage.ID_USUARIO
    }),
  }).then(function (resposta) {
    console.log("resposta: ", resposta);

    if (resposta.ok) {
        
        resposta.json().then(json => {

            TotalUsuarios.innerHTML = json[0].TotalUsuarios

        });

    } else {
      throw "Houve um erro ao exibir a quantidade de tentativas!";
    }
  })
 


const labels = [
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Temperatura', 
        data: [1, 2, 3],
        backgroundColor: 'rgba(0, 0, 255, 0.7)', // Azul
        borderColor: 'rgba(0, 0, 255, 1)', // Azul forte
        borderWidth: 1, // Espessura da borda,
        
    },
    {
        label: 'Umidade', 
        data: [4, 5, 6],
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Preto
        borderColor: 'rgba(0, 0, 0, 1)', // Preto forte
        borderWidth: 1, // Espessura da borda
    }
    ],
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: {
                grid: {
                    display: false, // Remove as linhas de fundo no eixo X
                }
            },
            y: {
                grid: {
                    display: false, // Remove as linhas de fundo no eixo Y
                }
            }
        }
    }
};

const labels2 = [
    'Corretas', 'Incorretas'
];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Porcentagem', 
        data: [PorcentagemAcerto, PorcentagemErro],
        backgroundColor: [
            'rgba(0, 0, 255, 0.7)', // Azul
            'rgba(0, 0, 0, 0.7)',   // Preto
            'rgba(0, 0, 255, 0.7)',
            'rgba(0, 0, 0, 0.7)',
            'rgba(0, 0, 255, 0.7)',
            'rgba(0, 0, 0, 0.7)',
        ]
    },
    ]
};

const config2 = {
    type: 'pie',
    data: data2,
    options: {}
};

const myChart = new Chart(
    document.getElementById('chartJS'),
    config
);

const myChart2 = new Chart(
    document.getElementById('chartJS2'),
    config2
);

