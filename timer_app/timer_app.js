/*
Author: Nicholas Fazzolari

JavaScript implementation for a basic HTML/CSS/JS Timer script.
Implements the UI controls and state using jQurey and JavaScript
 */

// User time values
let hoursPosVal = 0;
let minutesPosVal = 0;
let secondsTensPosVal = 0;
let secondsOnesPosVal = 0;

$(document).ready(function(){

    // Hours up button events
    $('#hoursUpBtn').mousedown(function() {
        $('#hoursUpBtn').attr('src', './set_up_glow.png');

        if (hoursPosVal >= 5) {
            hoursPosVal = 5;
        }
        hoursPosVal++;

        $('#hoursSetDisplay').text(hoursPosVal);
    });

    $('#hoursUpBtn').mouseup(function() {
        $('#hoursUpBtn').attr('src', './set_up.png');
    });

    // Hours down button events
    $('#hoursDnBtn').mousedown(function() {
        $('#hoursDnBtn').attr('src', './set_down_glow.png');
        
        if (hoursPosVal <= 0) {
            hoursPosVal = 1;
        }
        hoursPosVal--;

        $('#hoursSetDisplay').text(hoursPosVal);
    });

    $('#hoursDnBtn').mouseup(function() {
        $('#hoursDnBtn').attr('src', './set_down.png');
    });

    // Minutes up button events
    $('#minutesUpBtn').mousedown(function() {
        $('#minutesUpBtn').attr('src', './set_up_glow.png');

        if (minutesPosVal >= 8) {
            minutesPosVal = 8;
        }
        minutesPosVal++;

        $('#minutesSetDisplay').text(minutesPosVal);
    });

    $('#minutesUpBtn').mouseup(function() {
        $('#minutesUpBtn').attr('src', './set_up.png');
    });

    // Minutes down button events
    $('#minutesDnBtn').mousedown(function() {
        $('#minutesDnBtn').attr('src', './set_down_glow.png');
        
        if (minutesPosVal <= 0) {
            minutesPosVal = 1;
        }
        minutesPosVal--;

        $('#minutesSetDisplay').text(minutesPosVal);
    });

    $('#minutesDnBtn').mouseup(function() {
        $('#minutesDnBtn').attr('src', './set_down.png');
    });

    // Seconds tens up button events
    $('#tensSecsUpBtn').mousedown(function() {
        $('#tensSecsUpBtn').attr('src', './set_up_glow.png');

        if (secondsTensPosVal >= 5) {
            secondsTensPosVal = 5;
        }
        secondsTensPosVal++;

        $('#secondsTensDisplay').text(secondsTensPosVal);
    });

    $('#tensSecsUpBtn').mouseup(function() {
        $('#tensSecsUpBtn').attr('src', './set_up.png');
    });

    // Seconds tens down button events
    $('#tensSecsDnBtn').mousedown(function() {
        $('#tensSecsDnBtn').attr('src', './set_down_glow.png');
        
        if (secondsTensPosVal <= 0) {
            secondsTensPosVal = 1;
        }
        secondsTensPosVal--;

        $('#secondsTensDisplay').text(secondsTensPosVal);
    });

    $('#tensSecsDnBtn').mouseup(function() {
        $('#tensSecsDnBtn').attr('src', './set_down.png');
    });

    // Seconds ones up button events
    $('#onesSecsUpBtn').mousedown(function() {
        $('#onesSecsUpBtn').attr('src', './set_up_glow.png');

        if (secondsOnesPosVal >= 8) {
            secondsOnesPosVal = 8;
        }
        secondsOnesPosVal++;

        $('#secondsOnesDisplay').text(secondsOnesPosVal);
    });

    $('#onesSecsUpBtn').mouseup(function() {
        $('#onesSecsUpBtn').attr('src', './set_up.png');
    });

    // Seconds tens down button events
    $('#onesSecsDnBtn').mousedown(function() {
        $('#onesSecsDnBtn').attr('src', './set_down_glow.png');
        
        if (secondsOnesPosVal <= 0) {
            secondsOnesPosVal = 1;
        }
        secondsOnesPosVal--;

        $('#secondsOnesDisplay').text(secondsOnesPosVal);
    });

    $('#onesSecsDnBtn').mouseup(function() {
        $('#onesSecsDnBtn').attr('src', './set_down.png');
    });

    // Set Button
    $('#setButton').click(function() {
        let minutesString = hoursPosVal.toString() + minutesPosVal.toString();
        let secondsString = secondsTensPosVal.toString() + secondsOnesPosVal.toString();

        parseInt(minutesString);
        parseInt(secondsString);

        $('#countdownOutput').text(minutesString + " : " + secondsString);
    });

    // Clear Button
    $('#clearButton').click(function() {
        $('#hoursSetDisplay').text(hoursPosVal = 0);
        $('#minutesSetDisplay').text(minutesPosVal = 0);
        $('#secondsTensDisplay').text(secondsTensPosVal = 0);
        $('#secondsOnesDisplay').text(secondsOnesPosVal = 0);

        // Clear the countdown output
        $('#countdownOutput').text('00 : 00');
    });

    // Start Button
    $('#startButton').click(function() {
        // Call countdown function
    });
});