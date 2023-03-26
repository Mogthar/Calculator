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

exports.PerformVowelCountingCalculation = function(inputString){
    const analysisObject = new AnalysisObject();
    
    analysisObject.AnalyzeString(inputString);

    analysisObject.ListVowels();
}