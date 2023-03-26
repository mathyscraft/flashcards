const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

const buttonH1C1 = document.getElementById("H1C1");
const buttonH1C2 = document.getElementById("H1C2");
const buttonH3C1 = document.getElementById("H3C1");


hamburger.addEventListener("click", function() {
    menu.hidden = !menu.hidden
    overlay.hidden =  ! overlay.hidden
})

buttonH1C1.addEventListener("click", function() {
    let dataFile = document.createElement("script")
    dataFile.setAttribute("src", "data_H1C1.js")
    dataFile.onload = function() {
        getQuestion()
        hamburger.click()
        progressBar.style.borderColor = "rgb(41, 41, 41)"
        points = 0
    }
    document.getElementsByTagName("head")[0].appendChild(dataFile)
})
buttonH1C2.addEventListener("click", function() {
    let dataFile = document.createElement("script")
    dataFile.setAttribute("src", "data_H1C2.js")
    dataFile.onload = function() {
        getQuestion()
        hamburger.click()
        progressBar.style.borderColor = "rgb(41, 41, 41)"
        points = 0
    }
    document.getElementsByTagName("head")[0].appendChild(dataFile)
})
buttonH3C1.addEventListener("click", function() {
    let dataFile = document.createElement("script")
    dataFile.setAttribute("src", "data_H3C1.js")
    dataFile.onload = function() {
        getQuestion()
        hamburger.click()
        progressBar.style.borderColor = "rgb(41, 41, 41)"
        points = 0
    }
    document.getElementsByTagName("head")[0].appendChild(dataFile)
})
