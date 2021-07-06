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

//write timer to time element
//when start quiz is pressed start timer, hide first article, and show first question
//when timer runs out hide current article, write time to score, and display allDone
//when last question is answered stop timer, hide last question, write time to score, and display allDone
