exports.allowedOperators = ['+', '-', '*', '/'];

exports.PerformArithmeticCalculation = function(numberArray, operator){
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
    console.log(`The result is ${result}`);
}