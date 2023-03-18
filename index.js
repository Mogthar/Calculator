const readline = require('readline-sync');
const allowedOperators = ['+', '-', '*', '/'];

console.log('Please chose the mathematical operation')
const operator = RequestOperator();

console.log('Please enter your first number:');
const firstNumber = RequestNumber();

console.log('Please enter your second number:');
const secondNumber = RequestNumber()

var result;
switch(operator){
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
}
console.log("The result is: " + result);


// create a function called request a number which returns the requested number
function RequestNumber()
{
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        let entry = readline.prompt();
        let number = parseFloat(entry);
        if(!isNaN(number))
        {
            return number
        }
        else
        {
            console.log("wrong entry format")
        }
    }

}

function RequestOperator()
{
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        let entry = readline.prompt();
        if(allowedOperators.includes(entry))
        {
            return entry
        }
        else
        {
            console.log("wrong entry format")
        }
    }
}