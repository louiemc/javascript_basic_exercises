let today = new Date();
console.log(today);

// console.log(today.getMonth());
// outputs 5 --> this is because January starts with 0
// console.log(today.getDate());
// outputs 12 --> today is the 12th
// console.log(today.getFullYear());
// outputs 2019 --> that is the year

let month = today.getMonth() + 1;
if (month < 10) {
  month = '0' + month;
}
// console.log(month);

let day = today.getDate();
if (day < 10) {
  day = '0'+day;
}
// console.log(day);

let year = today.getFullYear();
// console.log(year);

// Get Date
let todaysDate = month + "/" + day + "/" + year;
console.log(todaysDate);
// outputs 06/12/2019