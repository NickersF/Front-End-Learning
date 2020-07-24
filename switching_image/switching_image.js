// Author: Nicholas Fazzolari
var toggleImageEveryTwoSeconds = window.setInterval(blinkingImageSwap, 1500);

function blinkingImageSwap() {
    var imgElementMainLogo = document.getElementById('mainlogo').src;

    if (imgElementMainLogo.indexOf("starbar_blueglow_logo.png")!=-1) {
        document.getElementById('mainlogo').src = "starbar_yellowglow_logo.png";
    }
    else {
        document.getElementById('mainlogo').src = "starbar_blueglow_logo.png";
    }
}