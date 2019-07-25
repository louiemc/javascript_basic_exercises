function leapYear(year) {
  return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
}
// if year is evenly divisible by 4, then go to the next step
// if year is evenly divisible by 100, then go to the next step
// if year is evenly divisible by 400, then go to the next step
// leap year: 366 days
// !leap year: 365;

console.log("*******************************************");
console.log("Are the following years leap years?");
console.log("2019:", leapYear(2019));
console.log("2018:", leapYear(2018));
console.log("2017:", leapYear(2017));
console.log("2016:", leapYear(2016));
console.log("2015:", leapYear(2015));
console.log("2014:", leapYear(2014));
console.log("*******************************************");