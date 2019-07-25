// NOTE: SYNTAX FOR DATE METHOD
// new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
// year: integer value representing the year; 
// monthIndex: integer value representing the month, 0 for january to `11 for December
// day: integer value representing the day of the month. if not specified, the default value of 1 is used
// hours: intger value representing the hour of the day; default is 0 (midnight)
//  minutes, seconds, millisenconds: integer value; default is 0

console.log("***************************************************");

let x = 2014;
let y = 2050;

for (var yearStart = x; yearStart <= y; yearStart++) {
  // declare variable z to equal new Date method
  // yearStart represents the year parameter
  // 0 represents January (monthIndex)
  // 1 represents January 1st; bc day represents the day of the month
  // SO WE WANT: we want to know if January 1st falls on a SUNDAY
  let z = new Date(yearStart, 0, 1);
  // to get sunday: use getDay(method); so *if* you getDay of z and if it's === 0 (sunday) then console.log(year that jan 1st is a sunday)
  if (z.getDay() === 0) {
    console.log("January 1st on a Sunday:", yearStart);
    // output: goes through the years between x and y; giving you the years where juanuary falls on sunday
  }
}



console.log("***************************************************");

// // getDay() method
// let getDay1 = new Date();
// console.log(getDay1.getDay()); // output 5, which is Friday; so Sunday is 0 (goes from 0 - 6)
