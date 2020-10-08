/*
Author: Nicholas Fazzolari

JavaScript implementation for a basic HTML/CSS/JS Timer script.
 */

const timeValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrPos = 0;

$(document).ready(function(){
    $('#upBtn').click(function() {

        if (arrPos >= 10) {
            arrPos = 9;
        }

        $('#valueDisplay').text(timeValues[arrPos]);
        $('#arrPosDisplay').text(arrPos);
        arrPos++;
    });

    $('#dnBtn').click(function() {

        if (arrPos <= 0) {
            arrPos = 0;
        }

        $('#valueDisplay').text(timeValues[arrPos]);
        $('#arrPosDisplay').text(arrPos);
        arrPos--;
    });
});