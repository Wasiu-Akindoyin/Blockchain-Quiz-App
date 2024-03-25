const quizData = [
    {
        question: "What is a Blockchain?",
        a: "A Centralized Ledger",
        b: "An Exchange",
        c: "A Type of Cryptocurrency",
        d: "A Distributed Ledger on a Peer to Peer Network",
        correct: "d",
    },
    {
        question: "What is a DApp?",
        a: "A Decentralized Application",
        b: "A Type of Blockchain",
        c: "A Condiment",
        d: "A type of Cryptocurrency",
        correct: "a",
    },
    {
        question: "What is the term for when a Blockchain splits?",
        a: "A Division",
        b: "A Sidechain",
        c: "A Fork",
        d: "A Merger",
        correct: "c",
    },
    {
        question: "What is a Genesis Block?",
        a: "The First Block of a Blockchain",
        b: "A Famous Block that hardcoded a Hash of the Book of Genesis onto the Blockchain",
        c: "The First Block after each Block Halving",
        d: "The second Transaction of a Blockchain",
        correct: "a",
    },
    {
        question: "What is a Miner?",
        a: "An Algorithm that predicts the next part of the Chain",
        b: "Computers that validate and process Blockchain Transactions",
        c: "A type of Blockchain",
        d: "A Person doing Calculations to verify a Transaction",
        correct: "b",
    },
    {
        question: "Where is the Least Safe Place to Keep your Cryptocurrency?",
        a: "On an Exchange",
        b: "In your Pocket",
        c: "At your Work Desk",
        d: "On a Hot Wallet",
        correct: "a",
    },
    {
        question: "Where do you store your Cryptocurrency?",
        a: "Bank Account",
        b: "In your Pocket",
        c: "Floppy Disk",
        d: "Blockchain Wallet",
        correct: "d",
    },
    {
        question: "Who Created Bitcoin?",
        a: "John Mcafee",
        b: "Wasiu Akindoyin",
        c: "Satoshi Nakamoto",
        d: "None of the Above",
        correct: "c",
    },
    {
        question: "What is a Node?",
        a: "A Blockchain",
        b: "An Exchange",
        c: "A Computer on a Blockchain Network",
        d: " A Type of Cryptocurrency",
        correct: "c",
    },
    {
        question: "What does P2P stand for?",
        a: "Private Key to Public Key",
        b: "Password to Password",
        c: "Peer to Peer",
        d: "None of the Above",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const skipBtn = document.getElementById("skip");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

skipBtn.addEventListener('click', () => {
    if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
        loadQuiz();
    } else {
        console.log("No more questions to skip to.");
    }
});

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    }
});



function showResult() {
    quiz.innerHTML = `
        <h2 style="font-size: 1.5em;">You Answered ${score}/${quizData.length} Questions Correctly</h2>
        <button style="width: 100%; font-weight: bold; font-size: 1.3em;" onclick="location.reload()">Reload Quiz</button>
    `;
}
