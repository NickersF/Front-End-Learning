// Future date object where user time values will be set
let countDownDate = new Date();
countDownDate.getTime();
// The countdown display element
let countDownOutputEl = document.getElementById('countdownOutput');
// Timer function variable
let timerFunc;

function startTimer() {
    let timerFunc = setInterval(countdownTimer, 1000);
}

function countdownTimer() {
    let now = new Date();
    now.getTime();

    let distance = countDownDate - now;

    //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countDownOutputEl.innerHTML = minutes + " : " + seconds;
}

function stopCountdownTimer() {
    clearInterval(timerFunc);
}