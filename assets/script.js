// LOGIC - JS
var $startPrompt = document.querySelector("#start-prompt");
var $startBtn = document.querySelector("#start-prompt button");
var $questionPrompt = document.querySelector("#question-prompt");
var $questionText = document.querySelector("#question-text");
var $questionOptions = document.querySelector("#options");
var $timer = document.querySelector("#timer");

var secondsLeft = 10;
var currentIndex = 0;

var questions = [
  {
    text: "Is the sky blue?",
    correctAnswer: "Yes",
    options: ["Yes", "No"],
  },
  {
    text: "Does the coding bootcamp melt your brain?",
    correctAnswer: "How couldn't it!?",
    options: ["How couldn't it!?", "No, I'm a genius!"],
  },
  {
    text: "Do you like anime?",
    correctAnswer: "True",
    options: ["Yes", "No"],
  },
  {
    text: "Do you go to bed late?",
    correctAnswer: "Yes",
    options: ["Yes", "No"],
  },
  {
    text: "Do you play video games?",
    correctAnswer: "Yes",
    options: ["Yes", "No"],
  },
];

$questionOptions.addEventListener("click", function (e) {
    // if target is not a button exit early
    if (!e.target.matches("button")) return;

    var val = e.target.textContent;
    if (val === questions[currentIndex].correctAnswer) {
        console.log("You are correct");
    } else {
        console.log("You are wrong")
    }
})

$startBtn.addEventListener("click", function (e) {
  // Hide Start Prompt
  $startPrompt.classList.add("hide");
  // Show our question prompt
  $questionPrompt.classList.remove("hide");
  // Display our timer
  $timer.classList.remove("hide");
  // Start our timer
  newQuestion(currentIndex);
  setTime();
});

function newQuestion(questionindex) {
  $questionText.textContent = questions[questionindex].text;
  while($questionOptions.firstChild){
    $questionOptions.removeChild($questionOptions.firstChild);
}
  //questions options
  questions[questionindex].options.forEach(function (item) {
    // create a html button
    var $btn = document.createElement("button");
    // set text of button to be our current item
    $btn.textContent = item;
    // append it to our options div
    $questionOptions.append($btn);
  });
}

function setTime() {
  secondsLeft = 11;
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    $timer.textContent = secondsLeft + "";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      currentIndex++;
      newQuestion(currentIndex);
      setTime();
      // Game over
      // sendMessage();
    }
  }, 1000);
}

