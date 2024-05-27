function replaceValueInString(str, valueToReplace, valueToReplaceWith) {
    
    return str.replaceAll(valueToReplace, valueToReplaceWith);
}


let originalString = "Hello, world!";
let valueToReplace = "Hello";
let valueToReplaceWith = "Hi";

let newString = replaceValueInString(originalString, valueToReplace, valueToReplaceWith);
console.log(newString);


function replaceValueInString(str, valueToReplace, valueToReplaceWith) {
    let result = '';
    let i = 0;

    while (i < str.length) {
       
        if (str.substring(i, i + valueToReplace.length) === valueToReplace) {
            result += valueToReplaceWith;
            i += valueToReplace.length;
        } else {
            
            result += str[i];
            i++;
        }
    }

    return result;
}


let originalString = "Hello, world! Hello, everyone!";
let valueToReplace = "Hello";
let valueToReplaceWith = "Hi";

let newString = replaceValueInString(originalString, valueToReplace, valueToReplaceWith);
console.log(newString); 




function capitalizeWords(sentence) {
    
    let words = sentence.split(' ');

    
    let capitalizedWords = words.map(word => {
        
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    });

    
    return capitalizedWords.join(' ');
}


let originalSentence = "hello world! this is a test.";
let capitalizedSentence = capitalizeWords(originalSentence);
console.log(capitalizedSentence); // "Hello World! This Is A Test."


