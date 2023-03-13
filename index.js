const readline = require('readline-sync');

console.log('Please enter your first number:');
const firstNumber = readline.prompt();
var firstNumberFloat = parseFloat(firstNumber);

console.log('Please enter your second number:');
const secondNumber = readline.prompt();
var secondNumberFloat = parseFloat(secondNumber);

const result = secondNumberFloat * firstNumberFloat;
console.log("The result is: " + result);
