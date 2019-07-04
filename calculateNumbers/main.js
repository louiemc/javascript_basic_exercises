// const inquirer = require(inquirer);

// add a switch statement, so if +, -, *, / then carry out those functions
// switch(calculate) {
//   case "+":
//     function add();
//     break;
//   case "-":
//     function subtract();
//     break;
//   case "*":
//     function multiply();
//     break;
//   case "/":
//     function divide();
//     break;
//   default:
//     console.log('test test test test');
//     break;
// }


function add(value1, value2) {
  let sum = value1 + value2;
  console.log(sum);
}
add(1, 5);


function subtract(value1, value2) {
  let difference = value1 - value2;
  console.log(difference);
}
subtract(10, 7);

function multiply(value1, value2) {
  let product = value1 * value2;
  console.log(product);
}
multiply(5, 6);

function divide(value1, value2) {
  let quotient = value1 / value2;
  console.log(quotient);
}
divide(9,3);