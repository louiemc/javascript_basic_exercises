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
    // {
    //   type: "number",
    //   name: "result",
    //   message: "Result of the calculation: " + add();
    // }
  ])
  .then(function(user) {

    // if the user chooses 'Addition'
    if (user.choices === "Addition") {
      let result = int(user.value1) + int(user.value2);
      console.log(result);
    }

    // if the user chooses 'Subtraction'
    else if (user.choices === "Subtraction") {
      let result = user.value1 - user.value2;
      console.log(result);
    }


    // if the user chooses 'Multiplication'
    else if (user.choices === "Multiplication") {
      let result = user.value1 * user.value2;
      console.log(result);
    }


    // if the user chooses 'Division'
    else if (user.choices === "Division") {
      let result = user.value1 / user.value2;
      console.log(result);
    }

    else {
      console.error("error");
    }
    
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
