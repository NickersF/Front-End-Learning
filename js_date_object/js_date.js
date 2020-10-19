// Author Nicholas Fazzolari

var countDownDate = new Date()
countDownDate.setHours(0);
countDownDate.setMinutes(1);
countDownDate.setSeconds(17);
countDownDate.getTime();

// var testDateObject = new Date();
// testDateObject.setHours(0);
// testDateObject.setMinutes(0);
// testDateObject.setSeconds(0);
// testDateObject.getTime();

var timerFunc;

function startTimer() {
    setInterval(countdownTimer, 1000);
}

function countdownTimer() {
    //var now = new Date().getTime();
    var testDateObject = new Date();
    testDateObject.setHours(0);
    testDateObject.setMinutes(0);
    testDateObject.setSeconds(0);
    testDateObject.getTime();

    var distance = countDownDate - testDateObject;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
}

function stopCountdownTimer() {
    clearInterval();
}
