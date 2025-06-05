const quizzes = {
  html: [
    { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "Hyper Tool Multi Language"], answer: "Hyper Text Markup Language" },
    { q: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<hyper>"], answer: "<a>" },
    { q: "Which tag is used for line break?", options: ["<break>", "<br>", "<lb>", "<line>"], answer: "<br>" },
    { q: "Which tag creates a list?", options: ["<ul>", "<list>", "<ol>", "<li>"], answer: "<ul>" },
    { q: "HTML files have what extension?", options: [".txt", ".htm", ".html", ".doc"], answer: ".html" }
  ],
  css: [
    { q: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
    { q: "Which is the correct CSS syntax?", options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"], answer: "body {color: black;}" },
    { q: "Which property changes background color?", options: ["bgcolor", "color", "background-color", "bgColor"], answer: "background-color" },
    { q: "How to add a comment in CSS?", options: ["/* this is a comment */", "// comment", "<!-- comment -->", "**comment**"], answer: "/* this is a comment */" },
    { q: "Which selector targets id?", options: [".id", "#id", "*id", "$id"], answer: "#id" }
  ],
  javascript: [
    { q: "Which is not a JavaScript data type?", options: ["Number", "String", "Boolean", "Float"], answer: "Float" },
    { q: "How do you write 'Hello' in alert box?", options: ["msg('Hello')", "alertBox('Hello')", "alert('Hello')", "msgBox('Hello')"], answer: "alert('Hello')" },
    { q: "Which keyword declares variable?", options: ["var", "int", "dim", "string"], answer: "var" },
    { q: "JavaScript file extension?", options: [".js", ".java", ".script", ".json"], answer: ".js" },
    { q: "Which symbol is for comments?", options: ["#", "//", "--", "%%"], answer: "//" }
  ]
};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let buttonsDisabled = false;

const subjectCards = document.querySelectorAll('.card');
const quizBox = document.getElementById('quizBox');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const resultText = document.getElementById('result');
const backBtn = document.getElementById('back-btn');
const subjectsDiv = document.querySelector('.subjects');

subjectCards.forEach(card => {
  card.addEventListener('click', () => {
    const subject = card.getAttribute('data-subject');
    startQuiz(subject);
  });
});

backBtn.addEventListener('click', goBack);

function startQuiz(subject) {
  currentQuiz = quizzes[subject];
  currentIndex = 0;
  score = 0;
  buttonsDisabled = false;

  subjectsDiv.style.display = 'none';
  quizBox.style.display = 'block';
  resultText.innerText = '';
  backBtn.style.display = 'none';

  showQuestion();
}

function showQuestion() {
  buttonsDisabled = false;
  const current = currentQuiz[currentIndex];
  questionText.innerText = `Q${currentIndex + 1}. ${current.q}`;
  optionsList.innerHTML = '';
  current.options.forEach(opt => {
    const button = document.createElement('button');
    button.innerText = opt;
    button.onclick = () => checkAnswer(button, opt);
    optionsList.appendChild(button);
  });
  resultText.innerText = '';
}

function checkAnswer(button, selected) {
  if (buttonsDisabled) return;
  buttonsDisabled = true;

  const correctAnswer = currentQuiz[currentIndex].answer;
  const buttons = optionsList.querySelectorAll('button');

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.style.backgroundColor = '#4caf50';
      btn.style.color = 'white';
    }
  });

  if (selected === correctAnswer) {
    button.style.backgroundColor = '#4caf50';
    button.style.color = 'white';
    resultText.style.color = '#76ff03';
    resultText.innerText = '✅ Correct!';
    score++;
  } else {
    button.style.backgroundColor = '#e57373';
    button.style.color = 'white';
    resultText.style.color = '#ff5252';
    resultText.innerText = `❌ Wrong! Correct: ${correctAnswer}`;
  }

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < currentQuiz.length) {
      showQuestion();
    } else {
      questionText.innerText = '';
      optionsList.innerHTML = '';
      resultText.style.color = '#81d4fa';
      resultText.innerText = `🎉 Quiz Completed! Your Score: ${score}/${currentQuiz.length}`;
      backBtn.style.display = 'inline-block';
    }
  }, 1800);
}

function goBack() {
  subjectsDiv.style.display = 'flex';
  quizBox.style.display = 'none';
}

// Joke Generator Logic
const jokes = [
  "Why don’t programmers like nature? It has too many bugs!",
  "Why do Java developers wear glasses? Because they can’t C#!",
  "How do you comfort a JavaScript bug? You console it.",
  "Why did the programmer quit his job? Because he didn’t get arrays.",
  "What's a computer’s favorite beat? An algorithm!",
  "I would tell you a joke about UDP... but you might not get it.",
  "Why did the CSS selector break up with the HTML tag? It found a classier one.",
  "How do functions break up? They stop calling each other!",
  "What do you call 8 hobbits? A hobbyte.",
  "What is a programmer’s favorite hangout place? The Foo Bar."
];

const jokeBtn = document.getElementById('get-joke');
const jokeOutput = document.getElementById('joke-output');

jokeBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeOutput.innerText = jokes[randomIndex];
});
