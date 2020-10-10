/*
Author: Nicholas Fazzolari

JavaScript implementation for a basic HTML/CSS/JS Timer script.
 */

let arrPos = 0;

$(document).ready(function(){
    $('#upBtn').click(function() {

        if (arrPos >= 10) {
            arrPos = 9;
        }

        $('#valueDisplay').text(arrPos);
        arrPos++;
    });

    $('#dnBtn').click(function() {

        if (arrPos <= 0) {
            arrPos = 0;
        }

        $('#valueDisplay').text(arrPos);
        arrPos--;
    });
});