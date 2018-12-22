/* 
Author: Nicholas Fazzolari

A function that generates pseudorandom hexadecimal color values.
*/

"use strict";

let bodyEl = document.getElementById("randomColorMe");
bodyEl.addEventListener("click", setBackgroundColor);

function generateRandomHexColor() {
    let ASCIIArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let newHexColor = "#";
    let hexSeed;

    for (let i = 0; i < 6; i++) {
        hexSeed = Math.floor(Math.random() * 15);
        newHexColor += ASCIIArray[hexSeed];
    }

    return newHexColor;
}

function setBackgroundColor() {
    let randomColor = generateRandomHexColor();

    bodyEl.style.backgroundColor = randomColor;
}