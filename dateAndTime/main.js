let today = new Date();
// console.log(today); 
// this outputs: 2019-06-12T14:28:42.870Z

// this outputs: Wed Jun 12 2019 10:28:42 GMT-0400 (Eastern Daylight Time)
// let x = Date();
// console.log(x);

let day = today.getDay();
// console.log(day); outputs 3
// switch statement for 0-6 getDay gives you 0-6 stands for day of week; always starts on sunday 0
switch (day) {
  case 0:
    console.log("Today is: Sunday");
    break;
  case 1:
    console.log("Today is: Monday");
    break;
  case 2:
    console.log("Today is: Tuesday");
    break;
  case 3:
    console.log("Today is: Wednesday");
    break;
  case 4:
    console.log("Today is: Thursday");
    break;
  case 5:
    console.log("Today is: Friday");
    break;
  case 6:
    console.log("Today is: Saturday");
    break;
}

// Getting the Current Time
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log("Current time is: ", time);

// Shorter code for the SAME thing plus it'll have AM/PM
let otherTime = today.toLocaleTimeString('en-us');
console.log("Current time is: ", otherTime);