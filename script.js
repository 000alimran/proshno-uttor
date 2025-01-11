// Quiz Data
const questions = [
    {
      question: "What is the capital of Bangladesh?",
      options: ["Chattogram", "Dhaka", "Khulna", "Sylhet"],
      answer: "Dhaka",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      answer: "CSS",
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
  