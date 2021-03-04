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
      // Calls function to create and append image
      // Game over
      // sendMessage();
    }
  }, 1000);
}

generateBtn.addEventListener("click", writePassword);


// click the start button
//     timer starts
//     I am presented with a question
// answer a question
//     presented with another question
// if question incorrect
//     time subtracted
// if no more questions or the timer reaches 0
//     game over
//         ask for user initials
//         save initial and score
// HTML area
// Start Page
//     start button
//     Title with explanation
// Question page
//     timer area
//     Question area
//     Answer area - 4 answer buttons
//         a)
//         b)
//         c)
//         d)
// Score Page
// PROGRAM LOGIC
// start button
//     a timer starts
//     presented with question1 text
//     presented with question1 answer buttons
// click on a question answer button
//     if that was last question
//         game is over
//             diplay game over
//             calculate userScore
//             ask user for initials
//                 save user intials and userScore together
//     if answer incorrect
//         time is subtracted from the clock
//     present next question
//         question[i+1] text
//         question[i+1] answer buttons
// SECTIONS
// Main page
//     Timer area
//     Question area
//     Link to view High Scores
// High Scores Page
