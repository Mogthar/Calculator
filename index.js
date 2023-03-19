const readline = require('readline-sync');
const allowedOperators = ['+', '-', '*', '/'];
var isSessionOn = true;

while(isSessionOn){
    const operator = RequestOperator();

    var numberArray = RequestSizeOfCalculation(operator);

    InputNumbers(numberArray);

    CalculateResult(numberArray, operator);

    ContinueSession();
}



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

function InputNumbers(emptyNumberArray)
{
    console.log('Please enter the numbers');
    for(let i = 0; i < emptyNumberArray.length; i++){
        emptyNumberArray[i] = RequestNumber();
    }
}

function RequestOperator()
{
    console.log('Please chose the mathematical operation');
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

function RequestSizeOfCalculation(operatorString)
{
    console.log('Please choose how many numbers to ' + operatorString);
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        let entry = readline.prompt();
        let number = parseInt(entry);
        if(!isNaN(number))
        {
            return Array(number)
        }
        else
        {
            console.log("wrong entry format")
        }
    }
}

function CalculateResult(inputArray, operatorString){
    var result = inputArray[0];
    switch(operatorString){
    case '+':
        for(let i = 1; i < inputArray.length; i++){
            result += inputArray[i];
        }
        break;
    
    case '-':
        for(let i = 1; i < inputArray.length; i++){
            result -= inputArray[i];
        }
        break;
    
    case '*':
        for(let i = 1; i < inputArray.length; i++){
            result *= inputArray[i];
        }
        break;
    
    case '/':
        for(let i = 1; i < inputArray.length; i++){
            result /= inputArray[i];
        }
        break;
    }
    console.log("The result is: " + result);
}

function ContinueSession(){
    console.log("Do you want to proceed with another calculation? [Y / N]")
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        let entry = readline.prompt();
        if(entry == 'Y')
        {
            entrySuccessful = true;
            isSessionOn = true
        }
        else if(entry == 'N')
        {
            entrySuccessful = true;
            isSessionOn = false;
        }
        else
        {
            console.log("wrong entry format")
        }
    }
}