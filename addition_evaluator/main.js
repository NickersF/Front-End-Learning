/* 

Author: Nicholas Fazzolari

The user is shown an addition expression.
The user must input and answer and the program will determine if it's correct.

*/

// Script Local Variables
let a;                  // stores rng for expression
let b;                  // stores rng for expression
let userAnswer;     // stores the user input value to be used for comparison against the evaluated a & b.

// DOM Display Elements
let expressionSpanEl = document.getElementById('expressionSpan');
let userAnswerInput = document.getElementById('answerInput');
let userAnswerEl = document.getElementById('userAnswerDisplay');

// Button Elements
let generateExpressionButton = document.getElementById('generateExpressionBtn');
let submiteAnswerButton = document.getElementById('submitAnswerBtn');


// Generate numeric values for the expression
function createExpressionValues() {
    a = Math.round(Math.random() * 10);
    b = Math.round(Math.random() * 10);
    userAnswerInput.value = "";
    userAnswer = "";
    userAnswerEl.innerHTML = "";
}

// Convert numbers into a string for page rendering
function generateExpressionDOMString(a, b) {
    expressionSpanEl.innerHTML = a.toString() + " + " + b.toString() + " = ?";
}

// Get user input and store value
function getUserInputValue() {
    userAnswer = userAnswerInput.value; 
}

// Evaluate user input value to result of expression
function evaluateExpression(a, b, userAnswer) {
    if (userAnswer === (a + b)) {
        userAnswerEl.innerHTML = "The answer: " +  a.toString() + " + " + b.toString() + " = " + userAnswer.toString() + " is correct! Good Job!";
    }
    else {
        userAnswerEl.innerHTML = "The answer: " +  a.toString() + " + " + b.toString() + " = " + userAnswer.toString() + " is incorrect! Try again!";
    }
}

// DOM Events
generateExpressionButton.addEventListener('click', createExpressionValues);
generateExpressionButton.addEventListener('click', function() { generateExpressionDOMString(a, b); });
userAnswerInput.addEventListener('mouseleave', getUserInputValue);
submiteAnswerButton.addEventListener('click', function() { evaluateExpression(a, b, parseInt(userAnswer)); })