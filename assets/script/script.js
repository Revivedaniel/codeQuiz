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
    functions.countdown();
    functions.hideCurrentArticle(beginEL);
    functions.showNextQuestion(currentQuestion);
});
//when question 1 is correct hide current article, itterate questionNumber, and display next question
//when question 2 is correct hide current article, itterate questionNumber, and display next question
//when question 3 is correct hide current article, itterate questionNumber, and display next question
//when question 4 is correct hide current article, itterate questionNumber, and display next question
//when question 5 is correct hide current article, itterate questionNumber, and display next question
//when question 6 is correct hide current article, itterate questionNumber, and display next question
//when timer runs out hide current article, write time to score, and display allDone
//when last question is answered stop timer, hide last question, write time to score, and display allDone
//all methods object
let functions = {
    //countdown method
    countdown: function() {
        var timeLeft = 98;
      
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
    }
};