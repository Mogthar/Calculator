const readline = require('readline-sync');

console.log('Please enter your first number:');
var entrySuccessful = false;
while(!entrySuccessful)
{
    const firstNumber = readline.prompt();
    var firstNumberFloat = parseFloat(firstNumber);
    if(!isNaN(firstNumberFloat))
    {
        entrySuccessful = true;
    }
    else
    {
        console.log("wrong entry format")
    }
}

entrySuccessful = false;
console.log('Please enter your second number:');
while(!entrySuccessful)
{
    const secondNumber = readline.prompt();
    var secondNumberFloat = parseFloat(secondNumber);
    if(!isNaN(secondNumberFloat))
    {
        entrySuccessful = true;
    }
    else
    {
        console.log("wrong entry format")
    }
}


const result = secondNumberFloat * firstNumberFloat;
console.log("The result is: " + result);


// create a function called request a number which returns the requested number
/*
function RequestNumber()
{
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        const secondNumber = readline.prompt();
        var secondNumberFloat = parseFloat(secondNumber);
        if(!isNaN(secondNumberFloat))
        {
            return secondNumberFloat
        }
        else
        {
            console.log("wrong entry format")
        }
    }

}
*/