// Author: Nicholas Fazzolari

let buttonHoverColor = '#E91E63';
let mainColor = '#2A13AD';

$(document).ready(function() {

    $('#setButton').mousedown(function() {
        $('#setButton').css('color', buttonHoverColor);
    });

    $('#setButton').mouseup(function() {
        $('#setButton').css('color', mainColor);
    });

    $('#clearButton').mousedown(function() {
        $('#clearButton').css('color', buttonHoverColor);
    });

    $('#clearButton').mouseup(function() {
        $('#clearButton').css('color', mainColor);
    });

    $('#startButton').mousedown(function() {
        $('#startButton').css('color', buttonHoverColor);
    });

    $('#startButton').mouseup(function() {
        $('#startButton').css('color', mainColor);
    });
});
