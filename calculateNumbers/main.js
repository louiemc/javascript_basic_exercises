const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "value1",
      message: "Pick a number for value1"
    },
    {
      type: "list",
      name: "operator",
      message: "Choose your arithmetic operator",
      choices: ["Addition", "Subtraction", "Mulitplication", "Division"]
    },
    {
      type: "input",
      name: "value2",
      message: "Pick a number for value2"
    }
  ])
  .then(function(user) {
    console.log("****************************************");
    if (user.choices === "Addition") {
      function add(value1, value2) {
        let sum = value1 + value2;
        return sum;
      }
      add();
      return sum;
    }
    console.log(sum);
    console.log("****************************************");
  });

// function add(value1, value2) {
//   let sum = value1 + value2;
//   console.log(sum);
// }

// function subtract(value1, value2) {
//   let difference = value1 - value2;
//   console.log(difference);
// }
// subtract(10, 7);

// function multiply(value1, value2) {
//   let product = value1 * value2;
//   console.log(product);
// }
// multiply(5, 6);

// function divide(value1, value2) {
//   let quotient = value1 / value2;
//   console.log(quotient);
// }
// divide(9,3);
