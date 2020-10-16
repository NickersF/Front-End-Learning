let newDate = new Date();
let nowDate = new Date();

// Use strings 
hour = '1';
minute = '4';
secondsTens = '2';
secondsOnes = '7';

fullMinutes = hour + minute;
fullSeconds = secondsTens + secondsOnes;

newDate.setMinutes(fullMinutes);
newDate.setSeconds(fullSeconds);


console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate);
console.log(nowDate);
console.log(newDate.toTimeString());
console.log(nowDate.toTimeString());