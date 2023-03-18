const readline = require('readline-sync');
const allowedOperators = ['+', '-', '*', '/'];

console.log('Please chose the mathematical operation');
const operator = RequestOperator();

console.log('Please choose how many numbers to ' + operator);
const numberOfElements = RequestInteger();
var numberArray = Array(numberOfElements);

console.log('Please enter the numbers');
for(let i = 0; i < numberArray.length; i++){
    numberArray[i] = RequestNumber();
}

var result = numberArray[0];
switch(operator){
    case '+':
        for(let i = 1; i < numberArray.length; i++){
            result += numberArray[i];
        }
        break;
    
    case '-':
        for(let i = 1; i < numberArray.length; i++){
            result -= numberArray[i];
        }
        break;
    
    case '*':
        for(let i = 1; i < numberArray.length; i++){
            result *= numberArray[i];
        }
        break;
    
    case '/':
        for(let i = 1; i < numberArray.length; i++){
            result /= numberArray[i];
        }
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

function RequestInteger()
{
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        let entry = readline.prompt();
        let number = parseInt(entry);
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