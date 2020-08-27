/* 

Author: Nicholas Fazzolari

The user is shown an addition expression.
The user must input and answer and the program will determine if it's correct.

*/

let a;                  // stores rng for expression
let b;                  // stores rng for expression
let strExpr;            // stores the string which will be attached to a DOM node for rendering
let userAnswer = 2;         // stores the user input value to be used for comparison against the evaluated a & b.

// Generate numeric values for the expression
function createExpressionValues() {
    a = Math.round(Math.random() * 10);
    b = Math.round(Math.random() * 10);
}

// Convert numbers into a string for page rendering
function generateExpressionDOMString(a, b) {
    return a.toString() + " + " + b.toString() + " = ?";
}

// Evaluate user input value to result of expression
function evaluateExpression(a, b, userAnswer) {
    if (userAnswer === (a + b)) {
        console.log("The answer: " + userAnswer.toString() + " is correct! Good Job!");
    }
    else {
        console.log("The answer: " + userAnswer.toString() + " is incorrect! Try again.");
    }
}

// Function calls
createExpressionValues(a, b);
strExpr = generateExpressionDOMString(a, b);

// Evaluation test ( hard coded )
evaluateExpression(1, 1, userAnswer);

// Logging
console.log(strExpr);
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (strExpr));