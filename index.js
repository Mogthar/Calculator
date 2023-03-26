const readline = require('readline-sync');
const userInput = require('./userInput');
const vowelCounting = require('./vowelCounting')
const arithmetic = require('./arithmetic')

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
var isSessionOn = true;

while(isSessionOn){
    const calculationMode = userInput.RequestCalculationMode([ARITHMETIC_MODE, VOWEL_COUNTING_MODE]);
    if(calculationMode === ARITHMETIC_MODE){
        const operator = userInput.RequestOperator(arithmetic.allowedOperators);
        var numberArray = userInput.RequestInputNumbers(operator); 
        arithmetic.PerformArithmeticCalculation(numberArray, operator);
    }
    else if(calculationMode === VOWEL_COUNTING_MODE){
        const inputString = userInput.RequestString();
        vowelCounting.PerformVowelCountingCalculation(inputString);
    }
    isSessionOn = userInput.ContinueSession();
}
