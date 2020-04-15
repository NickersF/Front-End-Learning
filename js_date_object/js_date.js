// Author Nicholas Fazzolari


const dateObj01 = new Date();
const dateObj02 = new Date();

dateObj02.setSeconds(0);

console.log(dateObj01);
console.log(dateObj01.toTimeString());
console.log(dateObj01.getSeconds());

console.log(dateObj02.getSeconds());