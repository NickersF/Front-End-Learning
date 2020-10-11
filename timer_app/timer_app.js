/*
Author: Nicholas Fazzolari

JavaScript implementation for a basic HTML/CSS/JS Timer script.
 */

let posVal = 0;

$(document).ready(function(){
    $('#upBtn').click(function() {

        if (posVal >= 8) {
            posVal = 8;
        }

        posVal++;
        $('#valueDisplay').text(posVal);
    });

    $('#dnBtn').click(function() {

        if (posVal <= 0) {
            posVal = 1;
        }

        posVal--;
        $('#valueDisplay').text(posVal);
    });
});