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

let year = date.getFullYear();
console.log("Year:", year);

let month = date.getMonth() + 1;
console.log(month);
switch (month) {
  case 1:
    console.log("Month: January");
    break;
  case 2:
    console.log("Month: February");
    break;
  case 3:
    console.log("Month: March");
    break;
  case 4:
    console.log("Month: April");
    break;
  case 5:
    console.log("Month: May");
    break;
  case 6:
    console.log("Month: June");
    break;
  case 7:
    console.log("Month: July");
    break;
  case 8:
    console.log("Month: August");
    break;
  case 9:
    console.log("Month: September");
    break;
  case 10:
    console.log("Month: October");
    break;
  case 11:
    console.log("Month: November");
    break;
  case 12:
    console.log("Month: December");
    break;
};
