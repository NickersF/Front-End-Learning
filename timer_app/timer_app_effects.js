// Author: Nicholas Fazzolari

let buttonHoverColor = '#E91E63';
let mainColor = '#2A13AD';

$(document).ready(function() {
    $('#clearButton').mousedown(function() {
        $('#clearButton').css('color', buttonHoverColor);
    });

    $('#clearButton').mouseup(function() {
        $('#clearButton').css('color', mainColor);
    });
});
