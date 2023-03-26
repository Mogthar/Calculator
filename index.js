const readline = require('readline-sync');
const allowedOperators = ['+', '-', '*', '/'];
const vowels = ['A', 'E', 'I', 'O', 'U']
function AnalysisObject(){
    for(var letter of vowels)
    {
        this[letter] = 0;
    }

    this.AnalyzeString = function(inputString){
        this.Reset();
        let processedString = inputString.toUpperCase();
        for(var i = 0; i < processedString.length; i++)
        {
            if(vowels.includes(processedString[i]))
            {
                this[processedString[i]] += 1;
            }
        }
    }

    this.Reset = function(){
        for(var letter of vowels)
        {
            this[letter] = 0;
        }
    }

    this.ListVowels = function(){
        for(var letter of vowels)
        {
            console.log(letter + ' : ' + this[letter]);
        }
    }
}
const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
var isSessionOn = true;

while(isSessionOn){
    const calculationMode = RequestCalculationMode();
    if(calculationMode === ARITHMETIC_MODE){
        PerformArithmeticCalculation();
    }
    else if(calculationMode === VOWEL_COUNTING_MODE){
        PerformVowelCountingCalculation();
    }
    ContinueSession();
}

function RequestCalculationMode()
{
    console.log('Please your calculation mode \n');
    console.log('1) Arithmetic mode \n');
    console.log('2) Vowel counting \n');
    entrySuccessful = false;
    while(!entrySuccessful)
    {
        let entry = readline.prompt();
        if(entry === ARITHMETIC_MODE | entry === VOWEL_COUNTING_MODE)
        {
            return entry
        }
        else
        {
            console.log("wrong entry format")
        }
    }
}

function PerformVowelCountingCalculation()
{
    const entryString = RequestString();

    const analysisObject = new AnalysisObject();
    
    analysisObject.AnalyzeString(entryString);

    analysisObject.ListVowels();
}

function PerformArithmeticCalculation()
{
    const operator = RequestOperator();

    var numberArray = RequestSizeOfCalculation(operator);

    InputNumbers(numberArray);

    CalculateResult(numberArray, operator);
}

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

function RequestString()
{
    console.log("Enter a string:")
    let entry = readline.prompt();
    return entry;
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
    console.log(`The result is ${result}`);
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