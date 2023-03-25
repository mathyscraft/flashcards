const flashcard = document.getElementById("flashcard")
const flashcardContainer = document.getElementById("flashcard-container")
const output = document.getElementById("output")
const answer = document.getElementById("answer")
const pointSpan = document.getElementById("points")
const progressBar = document.getElementById("progress-bar")
const progressStat = document.getElementById("progress-stat")
let currentQuestion = {}
const initialQuestionLength = question.length
getQuestion()

function getQuestion() {
    answer.hidden = true
    output.hidden = false
    flashcard.style.opacity = "0"
    setTimeout(function() {
        flashcard.style.left = "50%"
        flashcard.style.opacity = "1"
         // Choisir une question aléatoire qui n'a pas encore été posée
        let unansweredQuestions = question.filter(q => !q.asked);
        if (unansweredQuestions.length === 0) {
            question = question.filter(q => !q.correct)
            for (i in question) {
                question[i].asked = false
            }
            if (question.length === 0) {
                output.innerHTML = "Bravo, vous avez répondu à toutes les questions !"
                answer.innerHTML = "Recharchez la page pour rejouer"
                return;
            } else if (question.length <= 0.1*initialQuestionLength) {
                progressBar.style.borderColor = "green"
            } else if (question.length <= 0.35*initialQuestionLength) {
                progressBar.style.borderColor = "orange"
            } else {
                progressBar.style.borderColor = "red"
            }
            unansweredQuestions = question.filter(q => !q.asked);
            console.log(question)
        }
        let randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
        currentQuestion = unansweredQuestions[randomIndex];
    
        // Afficher la question à l'utilisateur
        output.innerHTML = currentQuestion.texte;
        answer.innerHTML = currentQuestion.reponse;
    
        // Mettre à jour le nombre de questions répondues et marquer la question comme posée
        answered++;
        currentQuestion.asked = true;
        console.log(progressBar.style.width)
        progressBar.style.borderLeftWidth = ((question.length + 1 - unansweredQuestions.length) / question.length) * progressBar.getBoundingClientRect().width + "px"
        progressStat.innerHTML = (question.length + 1 - unansweredQuestions.length) +"/"+ question.length
    }, 800)
}

flashcard.addEventListener("click", function() {
    if (flashcard.style.left == "50%") {
        answer.hidden = !answer.hidden
        output.hidden = !output.hidden
    }
})

flashcard.addEventListener("mousedown", function() {
    document.onmousemove = function(e){
        flashcard.style.left = e.clientX + window.scrollX +"px"
    }
})
flashcardContainer.addEventListener("mouseup", function() {
    let flashcardX = flashcard.style.left
    flashcardX = flashcardX.replace("px","")
    if (flashcardX <= 0.3*window.innerWidth) {
        console.log("false")
        currentQuestion.correct = false
        getQuestion()

    } else if (flashcardX > 0.7*window.innerWidth) {
        console.log("correct")
        points++;
        pointSpan.innerHTML = points;
        currentQuestion.correct = true
        getQuestion()
    } else {
        setTimeout(function() {
            flashcard.style.left = "50%"
        }, 100)
    }
    document.onmousemove = function() {return}
})

flashcard.addEventListener("touchstart", function() {
    document.ontouchmove = function(e){
      flashcard.style.left = e.touches[0].clientX + window.pageXOffset + "px";
    }
  })
  
  flashcardContainer.addEventListener("touchend", function() {
    let flashcardX = flashcard.style.left.replace("px", "");
    if (flashcardX <= 0.3*window.innerWidth) {
      console.log("faux");
      getQuestion();
    } else if (flashcardX > 0.7*window.innerWidth) {
      console.log("vrai");
      getQuestion();
    } else {
      setTimeout(function() {
        flashcard.style.left = "50%";
      }, 100);
    }
    document.ontouchmove = function() {return;}
  })
  