const readline = require('readline-sync');


exports.RequestString = function(){
    console.log("Enter a string:")
    let entry = readline.prompt();
    return entry;
}

exports.RequestCalculationMode = function(allowedModes)
{
    console.log('Please your calculation mode \n');
    console.log('1) Arithmetic mode \n');
    console.log('2) Vowel counting \n');
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        let entry = readline.prompt();
        if(allowedModes.includes(entry))
        {
            return entry
        }
        else
        {
            console.log("wrong entry format")
        }
    }
}

exports.ContinueSession = function(){
    console.log("Do you want to proceed with another calculation? [Y / N]")
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        let entry = readline.prompt();
        if(entry == 'Y')
        {
            entrySuccessful = true;
            return true;
        }
        else if(entry == 'N')
        {
            entrySuccessful = true;
            return false;
        }
        else
        {
            console.log("wrong entry format")
        }
    }
}

exports.RequestOperator = function(allowedOperators){
    console.log('Please chose the mathematical operation from ');
    for(var operator of allowedOperators){
        console.log(operator);
    }
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
            console.log("wrong operator")
        }
    }
}

exports.RequestInputNumbers = function(operator){
    console.log('Please choose how many numbers to ' + operator);
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        var number = parseInt(readline.prompt());
        if(!isNaN(number))
        {
            entrySuccessful = true;
        }
        else
        {
            console.log("wrong entry format")
        }
    }

    numberArray = new Array(number);

    console.log('Please enter the numbers');
    for(let i = 0; i < numberArray.length; i++){
        numberArray[i] = RequestNumber();
    }

    return numberArray;
}

function RequestNumber()
{
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        let number = parseFloat(readline.prompt());
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
