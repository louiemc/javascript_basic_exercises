// y for date2
const y = '12/25/2019';

// get the date of today
const date1 = new Date();
console.log(date1); // outputs YYY-MM-DD and the time?

// assign value (date you want to compare)
const date2 = new Date(y);
console.log(date2);

// time between the 2 dates
// getting the amount of time that is passed brom date2 and date1
const timeBetween = Math.abs(date2.getTime() - date1.getTime());
console.log(timeBetween); // time between is seconds (milliseconds...)

// find days between using the timeBetween
// BUT timeBetween NEEDS to be divided by 1000 * 3600 * 24 which is the number of milliseconds per day.
const daysBetween = Math.ceil(timeBetween / (1000 * 60 * 60 * 24));
console.log("Days from now until Christmas:", daysBetween);
// *******************************************
// declaring another variable to hold the end date variable
// let  = x
// console.log(endDate);


