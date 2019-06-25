let date = new Date();
console.log(date);

let weekDay = date.getDay();
console.log(weekDay);

switch (weekDay) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
}

let yearFull = date.getFullYear();
console.log("Year:", yearFull);

let month = date.getMonth() + 1;
console.log(month);
switch (month) {
  case 1:
    console.log("Month: January ");
    break;
  case 2:
    console.log("Month: February ");
    break;
  case 3:
    console.log("Month: March ");
    break;
  case 4:
    console.log("Month: April ");
    break;
  case 5:
    console.log("Month: May ");
    break;
  case 6:
    console.log("Month: June ");
    break;
  case 7:
    console.log("Month: July ");
    break;
  case 8:
    console.log("Month: August ");
    break;
  case 9:
    console.log("Month: September ");
    break;
  case 10:
    console.log("Month: October ");
    break;
  case 11:
    console.log("Month: November ");
    break;
  case 12:
    console.log("Month: December ");
    break;
};


let dayNumber = date.getDate();
console.log(dayNumber);


// Date: month, weekDay, year
console.log(month, dayNumber, yearFull);



function firstSunday(year) {
  if (weekDay === 0 && dayNumber === 1) {
    console.log("This January 1st lands on a Sunday!", year);
  } else {
    console.log("January 1st does NOT land on a Sunday!");
  }
}
// years between 2014 to 2050
let thisYear = firstSunday(2017);
console.log(thisYear);


