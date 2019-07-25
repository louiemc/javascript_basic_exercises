const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    name: "number",
    message: "Pick a number you would like to start with",
    // choices: 
  },
  {
    type: "list",
    name: "temperature",
    message: "Convert to Farenheit or Celcius?",
    choices: ["Farenheit", "Celsius"]
  }
]).then(function (user) {
  if (user.temperature === "Farenheit") {
    let initialTemp = parseInt(user.number);
    let result = initialTemp * 1.8 + 32;
    console.log("Celsius to Farenheit:", result + " degrees Farenheit");
  }
  else if (user.temperature === "Celsius") {
    let initialTemp = parseInt(user.number);
    let result = (initialTemp - 32) / 1.8;
    console.log("Farenheit to Celsius:", result + " degrees celsius");
  } 
  else {
    console.log(error);
  }
});