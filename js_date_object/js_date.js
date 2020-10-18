// Author Nicholas Fazzolari

var countDownDate = new Date()
//countDownDate.setHours(00);
countDownDate.setMinutes(56);
countDownDate.setSeconds(17);
countDownDate.getTime();

var timerFunc;

function startTimer() {
    setInterval(countdownTimer, 1000);
}

function countdownTimer() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
}

function stopCountdownTimer() {
    clearInterval();
}

var testDateObject = Date.now();

console.log(testDateObject.toLocaleString());