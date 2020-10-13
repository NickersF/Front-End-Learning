/*
Author: Nicholas Fazzolari

JavaScript implementation for a basic HTML/CSS/JS Timer script.
 */

let hoursPosVal = 0;
let minutesPosVal = 0;
let secondsTensPosVal = 0;
let secondsOnesPosVal = 0;

let hoursUpBtn = document.getElementById('hoursUpBtn');
let hoursDisplay = document.getElementById('hoursSetDisplay');
let hoursDnBtn = document.getElementById('hoursDnBtn');

function timeValueSelectUp(btnElement, dispEl, value, range) {

    $(btnElement).mousedown(function() {
        $(btnElement).attr('src', './set_up_glow.svg');

        if (value >= range) {
            value = range;
        }

        value++;

        $(dispEl).text(value);
    });

    $(btnElement).mouseup(function() {
        $(btnElement).attr('src', './set_up.svg');
    });
};

function timeValueSelectDown(btnElement, dispEl, value) {

    $(btnElement).mousedown(function() {
        $(btnElement).attr('src', './set_down_glow.svg');
        
        if (value <= 0) {
            value = 1;
        }
        value--;

        $(dispEl).text(value);
    });

    $(btnElement).mouseup(function() {
        $(btnElement).attr('src', './set_down.svg');
    });
}

$(document).ready(function(){

    timeValueSelectUp(hoursUpBtn, hoursDisplay, hoursPosVal, 5);
    //timeValueSelectDown(hoursDnBtn, hoursDisplay, hoursPosVal);

    // Clear Button
    // ************
    $('#clearButton').click(function() {
        $('#hoursSetDisplay').text(hoursPosVal = 0);
        $('#minutesSetDisplay').text(minutesPosVal = 0);
        $('#secondsTensDisplay').text(secondsTensPosVal = 0);
        $('#secondsOnesDisplay').text(secondsOnesPosVal = 0);
    });
});