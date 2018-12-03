// 4)


// You are given a string. Perform vowel reverse on it: swap the first vowel with the last one, the second with the second-to-last and so on. Keep consonants in their places without any modification. Output the resulting string.
//
// The input data consists of a single string. The length of the string is between 1 and 10 characters, inclusive. Each character of the string is a lower-case letter of English alphabet.
//
// In this problem only letters a, e, i, o and u are considered to be vowels.
//
// Example
//
// input
//
// input
//
// output
//
// unpit
//
// input
//
// alphabet
//
// output
//
// elphabat

//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var util = require('util');
// var input = "";

// process.stdin.on('data', function (text) {
//     input += text;
// });

// process.stdin.on('end', function () {
//     //do your processing here.
//     console.log('hello');
    
// });






// MY SOLUTION

// pass argument value string 'util' into reverseVowel function parameter

function reverseVowel(input) { 
    // initialize empty array and store vowels from input into empty array
    let arrayVowels = []
    
    // split method creates an array of items(each character is an item of array) based on the string value
    // forEach callback function iterates through each array item
    // if statement checks if character is a vowel, apply push method to store and add vowel to end of the arrayVowels array
    input.split('').forEach(function (val) { 
        if (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u') { 
            return arrayVowels.push(val)
        }
    })
    // replace method used to search for vowel characters and to return a new string
    // search input for vowel and replace with function that checks for vowel
    // if current character is vowel, remove and return the last item in the arrayVowels array
    let newWord = input.replace(/a|e|i|o|u/gi, (letter) => { 
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') { 
           return arrayVowels.pop()
        }
    })

    // returns new string with reversed vowels
    return newWord

}


// call reverseVowel function with the word 'util' as arugment 
console.log(reverseVowel('util'))
