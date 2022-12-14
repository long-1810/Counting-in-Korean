const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


questions = [
  {
    "question": "??? l?? s??? n??o",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": true },
      { "text": "3", "correct": false },
      { "text": "4", "correct": false },
      { "text": "5", "correct": false },
      { "text": "6", "correct": false },
      { "text": "7", "correct": false },
      { "text": "8", "correct": false },
      { "text": "9", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": false },
      { "text": "3", "correct": false },
      { "text": "4", "correct": false },
      { "text": "5", "correct": false },
      { "text": "6", "correct": true },
      { "text": "7", "correct": false },
      { "text": "8", "correct": false },
      { "text": "9", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": false },
      { "text": "3", "correct": false },
      { "text": "4", "correct": false },
      { "text": "5", "correct": false },
      { "text": "6", "correct": false },
      { "text": "7", "correct": false },
      { "text": "8", "correct": true },
      { "text": "9", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "1", "correct": true },
      { "text": "2", "correct": false },
      { "text": "3", "correct": false },
      { "text": "4", "correct": false },
      { "text": "5", "correct": false },
      { "text": "6", "correct": false },
      { "text": "7", "correct": false },
      { "text": "8", "correct": false },
      { "text": "9", "correct": false },
    ]
  },
  {
    "question": "??? l?? s??? n??o",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": false },
      { "text": "3", "correct": true },
      { "text": "4", "correct": false },
      { "text": "5", "correct": false },
      { "text": "6", "correct": false },
      { "text": "7", "correct": false },
      { "text": "8", "correct": false },
      { "text": "9", "correct": false },
    ]
  },
  {
    "question": "??? l?? s??? n??o",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": false },
      { "text": "3", "correct": false },
      { "text": "4", "correct": true },
      { "text": "5", "correct": false },
      { "text": "6", "correct": false },
      { "text": "7", "correct": false },
      { "text": "8", "correct": false },
      { "text": "9", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": false },
      { "text": "3", "correct": false },
      { "text": "4", "correct": false},
      { "text": "5", "correct": true },
      { "text": "6", "correct": false },
      { "text": "7", "correct": false },
      { "text": "8", "correct": false },
      { "text": "9", "correct": false },
    ]
  },
  {
    "question": "??? l?? s??? n??o",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": false },
      { "text": "3", "correct": false },
      { "text": "4", "correct": false },
      { "text": "5", "correct": false },
      { "text": "6", "correct": false },
      { "text": "7", "correct": false },
      { "text": "8", "correct": false },
      { "text": "9", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "20", "correct": true },
      { "text": "30", "correct": false },
      { "text": "40", "correct": false },
      { "text": "50", "correct": false },
      { "text": "60", "correct": false },
      { "text": "70", "correct": false },
      { "text": "80", "correct": false },
      { "text": "90", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "20", "correct": false},
      { "text": "30", "correct": true },
      { "text": "40", "correct": false },
      { "text": "50", "correct": false },
      { "text": "60", "correct": false },
      { "text": "70", "correct": false },
      { "text": "80", "correct": false },
      { "text": "90", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "20", "correct": false },
      { "text": "30", "correct": false },
      { "text": "40", "correct": true },
      { "text": "50", "correct": false },
      { "text": "60", "correct": false },
      { "text": "70", "correct": false },
      { "text": "80", "correct": false },
      { "text": "90", "correct": false },
    ]
  },
  {
    "question": "??? l?? s??? n??o",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "20", "correct": false},
      { "text": "30", "correct": false },
      { "text": "40", "correct": false },
      { "text": "50", "correct": true  },
      { "text": "60", "correct": false },
      { "text": "70", "correct": false },
      { "text": "80", "correct": false },
      { "text": "90", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "20", "correct": false },
      { "text": "30", "correct": false },
      { "text": "40", "correct": false },
      { "text": "50", "correct": false },
      { "text": "60", "correct": true },
      { "text": "70", "correct": false },
      { "text": "80", "correct": false },
      { "text": "90", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "20", "correct": false },
      { "text": "30", "correct": false },
      { "text": "40", "correct": false },
      { "text": "50", "correct": false },
      { "text": "60", "correct": false },
      { "text": "70", "correct": true },
      { "text": "80", "correct": false },
      { "text": "90", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "20", "correct": false },
      { "text": "30", "correct": false },
      { "text": "40", "correct": false },
      { "text": "50", "correct": false },
      { "text": "60", "correct": false },
      { "text": "70", "correct": false },
      { "text": "80", "correct": true },
      { "text": "90", "correct": false },
    ]
  },
  {
    "question": "?????? l?? s??? n??o",
    "answers": [
      { "text": "10", "correct": false },
      { "text": "20", "correct": false },
      { "text": "30", "correct": false },
      { "text": "40", "correct": false },
      { "text": "50", "correct": false },
      { "text": "60", "correct": false },
      { "text": "70", "correct": false },
      { "text": "80", "correct": false },
      { "text": "90", "correct": true },
    ]
  },
  {
    "question": "????????? l?? s??? n??o",
    "answers": [
      { "text": "56", "correct": false },
      { "text": "98", "correct": false },
      { "text": "30", "correct": false },
      { "text": "35", "correct": false },
      { "text": "23", "correct": false },
      { "text": "46", "correct": false },
      { "text": "76", "correct": false },
      { "text": "65", "correct": false },
      { "text": "74", "correct": true },
    ]
  },
  {
    "question": "????????? l?? s??? n??o",
    "answers": [
      { "text": "55", "correct": false },
      { "text": "64", "correct": false },
      { "text": "30", "correct": false },
      { "text": "94", "correct": true },
      { "text": "56", "correct": false },
      { "text": "42", "correct": false },
      { "text": "76", "correct": false },
      { "text": "17", "correct": false },
      { "text": "74", "correct": false },
    ]
  },
  {
    "question": "????????? l?? s??? n??o",
    "answers": [
      { "text": "55", "correct": false },
      { "text": "64", "correct": false },
      { "text": "30", "correct": false },
      { "text": "44", "correct": true },
      { "text": "56", "correct": false },
      { "text": "42", "correct": false },
      { "text": "76", "correct": false },
      { "text": "17", "correct": false },
      { "text": "74", "correct": false },
    ]
  },
  {
    "question": "????????? l?? s??? n??o",
    "answers": [
      { "text": "55", "correct": false },
      { "text": "64", "correct": false },
      { "text": "30", "correct": false },
      { "text": "94", "correct": true },
      { "text": "56", "correct": false },
      { "text": "42", "correct": false },
      { "text": "76", "correct": false },
      { "text": "17", "correct": false },
      { "text": "74", "correct": false },
    ]
  },
  {
    "question": "???????????? l?? s??? n??o",
    "answers": [
      { "text": "55", "correct": false },
      { "text": "64", "correct": false },
      { "text": "30", "correct": false },
      { "text": "94", "correct": true },
      { "text": "56", "correct": false },
      { "text": "42", "correct": false },
      { "text": "76", "correct": false },
      { "text": "17", "correct": false },
      { "text": "74", "correct": false },
    ]
  },
  {
    "question": "69 l?? s??? n??o",
    "answers": [
      { "text": "????????????", "correct": false },
      { "text": "????????????", "correct": false },
      { "text": "????????????", "correct": false },
      { "text": "????????????", "correct": true },
    ]
  },
  {
    "question": "\"M???t c??i b??n\" trong ti???ng H??n l?? g???",
    "answers": [
      { "text": "????????????", "correct": false },
      { "text": "??? ??????", "correct": false },
      { "text": "?????? ???", "correct": true },
      { "text": "?????? ??????", "correct": false }
    ]
  },
  
]


// Aesthetic purposes only
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function rainbow_color() {
  var r = document.querySelector(':root');
  for (let value = 0; value <= 255; value += 2) {
    r.style.setProperty('--hue-neutral', value);
    await sleep(100)
  }
}