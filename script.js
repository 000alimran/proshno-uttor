// Lame Joke Quiz Data
const questions = [
    {
      question: "Why don’t skeletons fight each other?",
      options: ["They are scared", "They don’t have the guts", "They might break", "They’re lazy"],
      answer: "They don’t have the guts",
    },
    {
      question: "Why don’t eggs tell jokes?",
      options: ["They crack up", "They break easily", "They are shy", "They need shell-ter"],
      answer: "They crack up",
    },
    {
      question: "Why couldn’t the bicycle stand up by itself?",
      options: ["It’s too small", "It’s too weak", "It’s two-tired", "It’s lazy"],
      answer: "It’s two-tired",
    },
    {
      question: "Why did the scarecrow win an award?",
      options: ["He was funny", "He was outstanding in his field", "He was brave", "He was hardworking"],
      answer: "He was outstanding in his field",
    },
    {
      question: "What do you call fake spaghetti?",
      options: ["Spag-fake", "Impasta", "Faux-getti", "Noodle-lie"],
      answer: "Impasta",
    },
    {
      question: "What do you call cheese that isn’t yours?",
      options: ["Stolen cheese", "Nacho cheese", "Borrowed cheese", "Someone else's cheese"],
      answer: "Nacho cheese",
    },
    {
      question: "Why can’t your nose be 12 inches long?",
      options: ["It’s weird", "It would be a foot", "It’s impossible", "It’s uncomfortable"],
      answer: "It would be a foot",
    },
    {
      question: "Why did the golfer bring two pairs of pants?",
      options: ["For a match", "In case he gets a hole in one", "For style", "To share with friends"],
      answer: "In case he gets a hole in one",
    },
    {
      question: "What do you call a can opener that doesn’t work?",
      options: ["A can’t opener", "A useless tool", "A broken opener", "A maybe opener"],
      answer: "A can’t opener",
    },
    {
      question: "Why don’t scientists trust atoms?",
      options: ["They explode", "They make up everything", "They are unstable", "They split easily"],
      answer: "They make up everything",
    },
  ];
  
  // Variables
let currentQuestionIndex = 0;
let score = 0;

// Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreSection = document.getElementById("score-section");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

// Load Question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectAnswer(li, currentQuestion.answer);
    optionsEl.appendChild(li);
  });
  nextBtn.disabled = true;
}

// Select Answer
function selectAnswer(selectedOption, correctAnswer) {
  const options = optionsEl.querySelectorAll("li");
  options.forEach(option => option.classList.remove("selected"));
  selectedOption.classList.add("selected");

  if (selectedOption.textContent === correctAnswer) {
    score++;
  }

  nextBtn.disabled = false;
}

// Next Question
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

// Show Score
function showScore() {
  document.getElementById("quiz-container").style.display = "none";
  scoreSection.style.display = "block";
  scoreEl.textContent = `${score} / ${questions.length}`;
}

// Restart Quiz
restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreSection.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  loadQuestion();
});

// Initialize Quiz
loadQuestion();
