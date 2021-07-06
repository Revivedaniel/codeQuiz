//all methods object
let functions = {
    //countdown method
    countdown: function(time) {
        var timeLeft = time;
      
        var timeInterval = setInterval(function () {
          if (timeLeft > 1) {
            timeStamp.textContent = String(timeLeft);
            timeLeft--;
          }else {
            timeStamp.textContent = '0';
            clearInterval(timeInterval);
            alert("You ran out of time. Try again!");
            quizFailed = true;
          }
        }, 1000);
      },
    //hide current article method
    hideCurrentArticle: function(element)  {
        element.classList.add("hidden")
    },
    //show next question method
    showNextQuestion: function (questionNumber) {
        let questionIndex = (questionNumber - 1)
        questionIndex++
        if (questionIndex >= 6) {
            allDoneEL.classList.remove("hidden")
        } else{
        questionsEL[questionIndex].classList.remove("hidden")
        }
    },
    //Question is correct
    correctAnswer: function () {
        correct.classList.remove("hidden")
        setTimeout(function () {
            correct.classList.add("hidden")
        }, 2000)
    },
    //Question is incorrect
    incorrectAnswer: function () {
        incorrect.classList.remove("hidden")
        setTimeout(function () {
            incorrect.classList.add("hidden")
        }, 2000)
    },
};
//timer active
var quizStarted = false;
var quizDone = false;
var quizFailed = false;
var currentQuestion = 0;
//place all articles in variables
var beginEL = document.querySelector("#begin");
var questionsEL = document.querySelectorAll(".question");
var allDoneEL = document.querySelector("#allDone");
var highScoresEL = document.querySelector("#highScores");
var correct = document.querySelector("#correct")
var incorrect = document.querySelector("#incorrect")
//place all buttons in variables
//Start quiz button
var startQuizBttn = beginEL.querySelector("button");
//array of answer buttons for questions
var question1buttons = questionsEL[0].querySelectorAll("button");
var question2buttons = questionsEL[1].querySelectorAll("button");
var question3buttons = questionsEL[2].querySelectorAll("button");
var question4buttons = questionsEL[3].querySelectorAll("button");
var question5buttons = questionsEL[4].querySelectorAll("button");
var question6buttons = questionsEL[5].querySelectorAll("button");
//allDone buttons
var initials = allDoneEL.querySelector("#initials");
var submit = allDoneEL.querySelector("#submit");
var goBackBttns = highScoresEL.querySelectorAll("button")
//place the ul for high scores in a variable
var scoresGrid = highScoresEL.querySelector("ul")
//place time in variable
var timeStamp = document.querySelector("#timeStamp")
//create timer
//when start quiz is pressed start timer, hide first article, and show first question
startQuizBttn.addEventListener("click", function () {
    functions.countdown(98);
    functions.hideCurrentArticle(beginEL);
    functions.showNextQuestion(currentQuestion);
});
//when question 1 is correct hide current article, itterate questionNumber, and display next question
question1buttons[0].addEventListener("click", functions.incorrectAnswer)
question1buttons[1].addEventListener("click", function() {
    functions.correctAnswer();
    functions.hideCurrentArticle(questionsEL[0]);
    currentQuestion++
    functions.showNextQuestion(currentQuestion);
})
question1buttons[2].addEventListener("click", functions.incorrectAnswer)
question1buttons[3].addEventListener("click", functions.incorrectAnswer)
//when question 2 is correct hide current article, itterate questionNumber, and display next question
question2buttons[0].addEventListener("click", function() {
    functions.correctAnswer();
    functions.hideCurrentArticle(questionsEL[1]);
    currentQuestion++
    functions.showNextQuestion(currentQuestion);
})
question2buttons[1].addEventListener("click", functions.incorrectAnswer)
question2buttons[2].addEventListener("click", functions.incorrectAnswer)
question2buttons[3].addEventListener("click", functions.incorrectAnswer)
//when question 3 is correct hide current article, itterate questionNumber, and display next question
question3buttons[0].addEventListener("click", functions.incorrectAnswer)
question3buttons[1].addEventListener("click", functions.incorrectAnswer)
question3buttons[2].addEventListener("click", function() {
    functions.correctAnswer();
    functions.hideCurrentArticle(questionsEL[2]);
    currentQuestion++
    functions.showNextQuestion(currentQuestion);
})
question3buttons[3].addEventListener("click", functions.incorrectAnswer)
//when question 4 is correct hide current article, itterate questionNumber, and display next question
question4buttons[0].addEventListener("click", functions.incorrectAnswer)
question4buttons[1].addEventListener("click", functions.incorrectAnswer)
question4buttons[2].addEventListener("click", functions.incorrectAnswer)
question4buttons[3].addEventListener("click", function() {
    functions.correctAnswer();
    functions.hideCurrentArticle(questionsEL[3]);
    currentQuestion++
    functions.showNextQuestion(currentQuestion);
})
//when question 5 is correct hide current article, itterate questionNumber, and display next question
question5buttons[0].addEventListener("click", function() {
    functions.correctAnswer();
    functions.hideCurrentArticle(questionsEL[4]);
    currentQuestion++
    functions.showNextQuestion(currentQuestion);
})
question5buttons[1].addEventListener("click", functions.incorrectAnswer)
question5buttons[2].addEventListener("click", functions.incorrectAnswer)
question5buttons[3].addEventListener("click", functions.incorrectAnswer)
//when question 6 is correct hide current article, itterate questionNumber, and display next question
question6buttons[0].addEventListener("click", functions.incorrectAnswer)
question6buttons[1].addEventListener("click", function() {
    functions.correctAnswer();
    functions.hideCurrentArticle(questionsEL[5]);
    currentQuestion++
    functions.showNextQuestion(currentQuestion);
})
question6buttons[2].addEventListener("click", functions.incorrectAnswer)
question6buttons[3].addEventListener("click", functions.incorrectAnswer)
//when timer runs out hide current article, write time to score, and display allDone
//when last question is answered stop timer, hide last question, write time to score, and display allDone