"use strict" 
function submit() {
    let Word = prompt ("Please type in a word or phrase");
    return Word;
}

function vowelCounter() {
    let Word = submit();
    let vowelsCount = 0;

    const string = Word.toString();

    for (var i = 0; i <=Word.length - 1; i++) {
        
        if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
            vowelsCount += 1;
        }  
    }
return vowelsCount;
}

console.log(vowelCounter());