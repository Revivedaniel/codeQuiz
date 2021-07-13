//all methods object
let functions = {
    //countdown method
    countdown: function(time) {
        timeLeft = time;
        //start a timer that counts down from a time passed through, if the time runs out hide the current question and show initials page
        timeInterval = setInterval(function () {
           if (timeLeft > 1) {
            timeLeft--;
            timeStamp.textContent = String(timeLeft);
          } else {
              timeLeft = 00;
            timeStamp.textContent = '00';
            clearInterval(timeInterval);
            alert("You ran out of time!");
            questionsEL[currentQuestion].classList.add("hidden");
            allDoneEL.classList.remove("hidden")
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
        //After answering the last question correctly stop interval,  write time to score, and display allDone
        if (questionIndex >= 6) {
            clearInterval(timeInterval)
            allDoneScoreEL.textContent = String(timeLeft + 1);
            allDoneEL.classList.remove("hidden")
        } else {
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
        timeLeft = timeLeft - 5;
        incorrect.classList.remove("hidden")
        setTimeout(function () {
            incorrect.classList.add("hidden")
        }, 2000)
    },
    //making initials and score into an object and push it to the array
    makeObject: function (i, s) {
        var newScore = {
            initials: i,
            score: s,
        }
        highScoresData.push(newScore)
        //JSON.stringify the array and save it to localStorage
        localStorage.setItem("highScores", JSON.stringify(highScoresData))
    },

    updateList: function () {
        //clear innerHTML of the ul for the list items
        scoresGrid.innerHTML = "";
        var currentScores = JSON.parse(localStorage.getItem("highScores"))
        for (let i = 0; i < currentScores.length; i++) {
            const liContent = currentScores[i];
            //render a new li for each highscore in localStorage
            var li = document.createElement("li");
            li.textContent = liContent.initials +" "+ liContent.score;
            scoresGrid.appendChild(li)   
      }
    }
    
};

// if there are values in localStorage
//   JSON.parse them to variable
// if there are no values in locaStorage than create an empty array variable
var highScoresData = JSON.parse(localStorage.getItem("highScores")) || []

var timeLeft = ""
var timeInterval = ""
var viewScores = document.querySelector("#viewScores")
//question index
var currentQuestion = 0;
//articles in variables
var beginEL = document.querySelector("#begin");
var questionsEL = document.querySelectorAll(".question");
var allDoneEL = document.querySelector("#allDone");
var allDoneScoreEL = allDoneEL.querySelector("span")
var highScoresEL = document.querySelector("#highScores");
var correct = document.querySelector("#correct")
var incorrect = document.querySelector("#incorrect")
//Start quiz button
var startQuizBttn = beginEL.querySelector("button");
//array of answer buttons for questions
var question1buttons = questionsEL[0].querySelectorAll("button");
var question2buttons = questionsEL[1].querySelectorAll("button");
var question3buttons = questionsEL[2].querySelectorAll("button");
var question4buttons = questionsEL[3].querySelectorAll("button");
var question5buttons = questionsEL[4].querySelectorAll("button");
var question6buttons = questionsEL[5].querySelectorAll("button");
//input for initials
var initialsInput = document.querySelector("#initials");
//allDone buttons
var submit = allDoneEL.querySelector("#submit");
var goBackBttns = highScoresEL.querySelectorAll("button");
//highscores article 
var scoresGrid = highScoresEL.querySelector("ul");
//time in variable
var timeStamp = document.querySelector("#timeStamp");
//when start quiz is pressed start timer, hide first article, and show first question
startQuizBttn.addEventListener("click", function () {
    functions.countdown(98);
    functions.hideCurrentArticle(beginEL);
    functions.showNextQuestion(currentQuestion);
});
//when question 1 is correct hide current article, itterate questionNumber, and display next question
question1buttons[0].addEventListener("click", functions.incorrectAnswer);
question1buttons[1].addEventListener("click", function() {
    currentQuestion++
    functions.hideCurrentArticle(questionsEL[0]);
    functions.showNextQuestion(currentQuestion);
    functions.correctAnswer();
})
question1buttons[2].addEventListener("click", functions.incorrectAnswer);
question1buttons[3].addEventListener("click", functions.incorrectAnswer);
//when question 2 is correct hide current article, itterate questionNumber, and display next question
question2buttons[0].addEventListener("click", function() {
    currentQuestion++
    functions.hideCurrentArticle(questionsEL[1]);
    functions.showNextQuestion(currentQuestion);
    functions.correctAnswer();
})
question2buttons[1].addEventListener("click", functions.incorrectAnswer);
question2buttons[2].addEventListener("click", functions.incorrectAnswer);
question2buttons[3].addEventListener("click", functions.incorrectAnswer);
//when question 3 is correct hide current article, itterate questionNumber, and display next question
question3buttons[0].addEventListener("click", functions.incorrectAnswer);
question3buttons[1].addEventListener("click", functions.incorrectAnswer);
question3buttons[2].addEventListener("click", function() {
    currentQuestion++
    functions.hideCurrentArticle(questionsEL[2]);
    functions.showNextQuestion(currentQuestion);
    functions.correctAnswer();
})
question3buttons[3].addEventListener("click", functions.incorrectAnswer);
//when question 4 is correct hide current article, itterate questionNumber, and display next question
question4buttons[0].addEventListener("click", functions.incorrectAnswer);
question4buttons[1].addEventListener("click", functions.incorrectAnswer);
question4buttons[2].addEventListener("click", functions.incorrectAnswer);
question4buttons[3].addEventListener("click", function() {
    currentQuestion++
    functions.hideCurrentArticle(questionsEL[3]);
    functions.showNextQuestion(currentQuestion);
    functions.correctAnswer();
})
//when question 5 is correct hide current article, itterate questionNumber, and display next question
question5buttons[0].addEventListener("click", function() {
    currentQuestion++
    functions.hideCurrentArticle(questionsEL[4]);
    functions.showNextQuestion(currentQuestion);
    functions.correctAnswer();
})
question5buttons[1].addEventListener("click", functions.incorrectAnswer);
question5buttons[2].addEventListener("click", functions.incorrectAnswer);
question5buttons[3].addEventListener("click", functions.incorrectAnswer);
//when question 6 is correct hide current article, itterate questionNumber, and display next question
question6buttons[0].addEventListener("click", functions.incorrectAnswer);
question6buttons[1].addEventListener("click", function() {
    currentQuestion++
    functions.hideCurrentArticle(questionsEL[5]);
    functions.showNextQuestion(currentQuestion);
    functions.correctAnswer();
})
question6buttons[2].addEventListener("click", functions.incorrectAnswer);
question6buttons[3].addEventListener("click", functions.incorrectAnswer);

//when submit button is pressed write initials and score to two seperate li's in scoreBoard (session) and display highscores
submit.addEventListener("click", function () {
    var key = String(initialsInput.value).toUpperCase();
    functions.makeObject(key, timeLeft)
    functions.updateList();
    functions.hideCurrentArticle(allDoneEL);
    highScoresEL.classList.remove("hidden");
});

//when go back is pressed reload page and show #begin
goBackBttns[0].addEventListener("click", function () {
    location.reload();
})
goBackBttns[1].addEventListener("click", function () {
    localStorage.setItem("highScores", JSON.stringify(""))
    functions.updateList();
})

//when view scores is pressed hide current article and show highScores article
viewScores.addEventListener("click", function () {
    if (currentQuestion === 0) {
        functions.hideCurrentArticle(beginEL)
        functions.hideCurrentArticle(questionsEL[0])
    } else {
        functions.hideCurrentArticle(questionsEL[currentQuestion])
    }
    functions.updateList();
    highScoresEL.classList.remove("hidden")
})
