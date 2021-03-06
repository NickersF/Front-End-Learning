/*
Author: Nicholas Fazzolari

Implementation of a string based countdown timer
using the window.setInterval() method 
*/

let timeObject = {
    minutesTensValue: 0,
    minutesOnesValue: 3,
    secondsTensValue: 4,
    secondsOnesValue: 7
};

let timeStringEl = document.getElementById('timeString');

let startTimer = setInterval(countDownTimer, 1000);

function countDownTimer() {
    
    if (timeObject.secondsOnesValue != 0) {
        timeObject.secondsOnesValue--;
    }

    timeStringEl.innerHTML = timeObject.minutesTensValue + timeObject.minutesOnesValue + " : " + timeObject.secondsTensValue + timeObject.secondsOnesValue;
};

timeObject.minutesTensValue = 8;
console.log(timeObject.minutesTensValue);