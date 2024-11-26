const questions = [
    {
        question: "Qual prática é de extrema importância para ter intimidade com Deus?",
        answers: [
            {text: "Oração", correct: true},
            {text: "Video Aula", correct: false},
            {text: "Louvor", correct: false},
            {text: "Conversar com o Lider de Louvor", correct: false},
        ]
    },
    {
        question: "Qual prática nos ajuda a conhecer os mandamentos de Deus?",
        answers: [
            {text: "Oração", correct: false},
            {text: "Leitura da palavra", correct: true},
            {text: "Jejum", correct: false},
            {text: "Praticar conteúdo aprendido em vídeo aula", correct: false},
        ] 
    },
    {
        question: "Qual prática nos faz estar em comunhão com as pessoas da igreja?",
        answers: [
            {text: "Criar grupo no Whatsapp", correct: false},
            {text: "Estudar musica sozinho", correct: false},
            {text: "Participar de cultos e eventos da igreja", correct: true},
            {text: "Estudar a palavra", correct: false},
        ] 
    },
    {
        question: "Qual prática nos torna obedientes a Deus?",
        answers: [
            {text: "Ler a bíblia", correct: false},
            {text: "Renunciar práticas contraria da vontade de Deus", correct: true},
            {text: "Estudar Guitarra", correct: false},
            {text: "Fazer Jejum", correct: false},
        ] 
    },
    {
        question: "Qual prática nos ajuda a aprender conteúdos novos de música?",
        answers: [
            {text: "Ler a bílbia e fazer anotações", correct: false},
            {text: "Perguntar ao meu amigo conteúdos que ele aprendeu de guitarra", correct: false},
            {text: "Tocar sozinho em casa sem buscar evolução musical", correct: false},
            {text: "Assistir video aula de música ou ser acompanhado por um professor em aulas", correct: true},
        ] 
    },
    {
        question: "Qual prática me ajuda a desenvolver meus conhecimentos de música?",
        answers: [
            {text: "Dedicar horas de estudo na semana, praticando o que aprendi", correct: true},
            {text: "Conversando com o meu líder de louvor", correct: false},
            {text: "Ler a bíblia e compartilhar com meu amigo o que aprendi", correct: false},
            {text: "Assistir aula de guitarra 3x na semana", correct: false},
        ] 
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Sua pontuação foi de ${score} de ${questions.length}!`;
    nextButton.innerHTML = "DASHBOARD";
    nextButton.style.display = "block";

    fetch("/pontuaçao/InserirPontuaçao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          pontuaçaoServer : score,
          fkUsuarioServer : sessionStorage.ID
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
  
          if (resposta.ok) {
            cardErro.style.display = "block";
  
            mensagem_erro.innerHTML =
              "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
  
            setTimeout(() => {
              window.location = "login.html";
            }, "2000");
  
            limparFormulario();
            finalizarAguardar();
          } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
          finalizarAguardar();
        });

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        window.location.href = "dashboard.html";
    }
})


startQuiz();


