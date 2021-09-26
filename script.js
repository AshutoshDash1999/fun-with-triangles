// Is Triangle?
var angleInputOne = document.querySelector("#angleInputOne");
var angleInputTwo = document.querySelector("#angleInputTwo");
var angleInputThree = document.querySelector("#angleInputThree");
var angleBtn = document.querySelector("#angleBtn")
var showOutput = document.querySelector("#showOutputIsTriangle")

function isTriangle(){
    totalAngle = parseInt(angleInputOne.value) + parseInt(angleInputTwo.value) + parseInt(angleInputThree.value)
    
    if (totalAngle === 180){
        showOutput.innerText = "The triangle is possible.";
    } else{
        showOutput.innerText = "The triangle is not possible.";
    }
}

angleBtn.addEventListener("click", isTriangle)

// ------------------

// Calculate Hypotenuse
var sideInputOne = document.querySelector("#sideInputOne");
var sideInputTwo = document.querySelector("#sideInputOne");
var sideBtn = document.querySelector("#sideBtn");
var showOutputHypotenuse = document.querySelector("#showOutputHypotenuse");

function calculateHyptenuse(sideOne, sideTwo){
    hypotenuseSquare = ((sideOne*sideOne) + (sideTwo*sideTwo))
    hypotenuseSide = Math.sqrt(hypotenuseSquare)
    showOutputHypotenuse.innerText = `The hypotenuse is ${hypotenuseSide}`
}

function sideStringToNumber(){
    var sideOneInt = parseInt(sideInputOne.value)
    var sideTwoInt = parseInt(sideInputTwo.value)
    calculateHyptenuse(sideOneInt, sideTwoInt)
}

sideBtn.addEventListener("click", sideStringToNumber)

// -----------------------------------

// Calculate Area of Triangle

var baseInput = document.querySelector("#baseInput")
var heightInput = document.querySelector("#heightInput")
var areaBtn = document.querySelector("#areaBtn")
var showAreaOutput = document.querySelector("#showAreaOutput")

function calculateArea(base, height){
    areaOfTriangle = 0.5*base*height
    showAreaOutput.innerText = `The area is ${areaOfTriangle}`;
}

function baseAreaToInt(){
    var baseInt = parseInt(baseInput.value);
    var heightInt = parseInt(heightInput.value);
    calculateArea(baseInt, heightInt)
}

areaBtn.addEventListener("click", baseAreaToInt)

// ----------------------------------

// Triangle Quiz 

var formQuiz = document.querySelector("#formQuiz")
var submitQuizBtn = document.querySelector("#submitQuizBtn")
var outputMessage = document.querySelector("#outputMessage")

var correctAnswer = ["90", "right-angled"];


function calculateScore(){
    var index = 0;
    var score = 0;
    const formData = new FormData(formQuiz);
    for(let ans of formData.values()){
        if(ans === correctAnswer[index]){
            score=score+1;
        }
        index=index+1;
    }
    outputMessage.innerText = "Your score is "+ score;
}

submitQuizBtn.addEventListener("click", calculateScore);