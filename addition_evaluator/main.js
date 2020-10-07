/* 

Author: Nicholas Fazzolari

The user is shown an addition expression.
The user must input and answer and the program will determine if it's correct.

*/

// Script Local Variables
let a;                  // stores rng for expression
let b;                  // stores rng for expression
let userAnswer;         // stores the user input value to be used for comparison against the evaluated a & b.

// DOM Display Elements
let expressionSpanEl = document.getElementById('expressionSpan');
let userAnswerInput = document.getElementById('answerInput');
let userAnswerEl = document.getElementById('userAnswerDisplay');

// Button Elements
let generateExpressionButton = document.getElementById('generateExpressionBtn');
let submiteAnswerButton = document.getElementById('submitAnswerBtn');


// Generate numeric values for the expression and clear display
function createExpressionValues() {
    a = Math.round(Math.random() * 10);
    b = Math.round(Math.random() * 10);
    userAnswerInput.value = "";
    userAnswer = "";
    userAnswerEl.innerHTML = "";
}

// Generates a sring which represents the mathematical expression for the DOM
function generateExpressionDOMString(a, b) {
    expressionSpanEl.innerHTML = a.toString() + " + " + b.toString() + " = ?";
}

// Get user input and store value in local answer variable
function getUserInputValue() {
    userAnswer = userAnswerInput.value; 
}

// Evalutes the user input and sets the HTML value based on correctness of answer
function evaluateExpression(a, b, userAnswer) {
    if (userAnswer === (a + b)) {
        userAnswerEl.innerHTML = "The answer: " +  a.toString() + " + " + b.toString() + " = " + userAnswer.toString() + " is correct! Good Job!";
        userAnswerEl.style.color = "#4CAF50";
    }
    else {
        userAnswerEl.innerHTML = "The answer: " +  a.toString() + " + " + b.toString() + " = " + userAnswer.toString() + " is incorrect! Try again!";
        userAnswerEl.style.color = "#f44336";
    }
}

// DOM Events
generateExpressionButton.addEventListener('click', createExpressionValues);
generateExpressionButton.addEventListener('click', function() { generateExpressionDOMString(a, b); });
userAnswerInput.addEventListener('mouseleave', getUserInputValue);  // Still not sure if this is the best way set the value
submiteAnswerButton.addEventListener('click', function() { evaluateExpression(a, b, parseInt(userAnswer)); })