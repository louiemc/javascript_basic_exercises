// Create an array with numbers 1 to 10
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// declare a variable to hold the random number
// using Javascript built in math functions: Math.floor and Math.random
let randomNumber = Math.floor(Math.random() * x.length) + 1;
console.log(randomNumber); // outputs random number

let userGuess;

// using node; inquirer
let inquirer = require("inquirer");

inquirer.prompt(
  {
    type: "input",
    name: ""
  }
)