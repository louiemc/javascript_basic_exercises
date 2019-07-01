// using node; inquirer
let inquirer = require("inquirer");

inquirer
  .prompt({
    type: "input",
    name: "numberGuess",
    message: "Guess a number between 1 to 10"
  })
  .then(function(user) {
    // then use a promise to follow through

    // MOVED: array of numbers inside the promise
    // Create an array with numbers 1 to 10
    let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // MOVED: variable assigned to math functions
    // declare a variable to hold the random number
    // using Javascript built in math functions: Math.floor and Math.random
    let randomNumber = Math.floor(Math.random() * x.length) + 1;
    console.log(randomNumber); // outputs random number; don't really need this but i'm leaving it

    // if the user input the correct number
    if (user.numberGuess == randomNumber) { 
      // TIP: === vs == ; i was taught to always use === (triple equals) before doing == (double equals)
      // cont': using == here because the input is a STRING while the randomNumber is an INTEGER
      console.log("Good Work:", randomNumber);
    }
    // if the user input the incorrect number
    else {
      console.log("Not Matched");
    }
  });
