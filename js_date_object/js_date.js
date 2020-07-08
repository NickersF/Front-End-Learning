// Author Nicholas Fazzolari

// Nice little print time function
function printTime() {
    const dateObj01 = new Date();
    console.log(dateObj01.toLocaleTimeString());
}

printTime() // print time at execution
setTimeout(printTime, 2000); // two seconds later print the time again

setInterval(() => printTime(), 1000);