// 1)
// Create a string that says, "On my way to Techtonic!" by only using properties in the provided object called wordObj.
// The string is case sensitive.  Utilize JavaScript string methods to handle capital letters.


// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var util = require('util');
// var input = "";
//
// process.stdin.on('data', function (text) {
//     input += text;
// });
//
// process.stdin.on('end', function () {
//     console.log(makeSentence());
// });
// //On my way to Techtonic!
// var wordObj = {space:" ",
//                punctuation:"!",
//                letterBank:{pairedLetters:{one:"my",two:"ch",three:""},
//                            singleLetters:{one:"t",two:"n",three:""},
//                            vowels:['a','e','i','o','u']
//                           },
//                wordBank:{one:"way",two:"tonic"}
//               }
// //*****************************************
// //DO NOT ALTER ANY CODE ABOVE THIS COMMENT
// //*****************************************
//
// function makeSentence(wordObj){
//     console.log(wordObj.wordBank.one)
//
//     return  //CREATE YOUR STRING HERE BY ONLY USING PROPERTIES WITHIN wordObj
//
// }
//
// makeSentence(wordObj)
//


// 2)
// Finish implementing the function reverseIt.  reverseIt takes a single parameter of a string and returns that string reversed.  Once you have completed the reverseIt function, click run, and reverseIt will be called and passed the test cases.

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var util = require('util');
// var input = "";
//
// process.stdin.on('data', function (text) {
//     input += text;
// });
//
// process.stdin.on('end', function () {
//     console.log(reverseIt(input));
// });
// //*****************************************
// //DO NOT ALTER ANY CODE ABOVE THIS COMMENT
// //*****************************************
//
//
// function reverseIt(myString){
// // variable that will take reversed string
//   let reversedString = '';
//
// //   create for loop with decrement
//   for(let i = myString.length - 1; i>=0; i--) {
//     reversedString += myString[i];
//   }
//   return reversedString;
// };
//
//
// // call reverseIt function
// reverseIt('water');

// 3)

// The function pascalCase takes in an array of cities and capitalizes the first letter of each city name, but there are 2 bugs preventing it from working.  Troubleshoot pascalCase and get it to successfully return the array with each city's first letter capitalized. Once you have completed the pascalCase function, click run, and the pascalCase will be called and passed the test case.

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var util = require('util');
// var input = "";
//
// process.stdin.on('data', function (text) {
//     input += text;
// });
//
// process.stdin.on('end', function () {
//     var listOfCities = ["denver","philadelphia","chicago","dallas","seattle"];
//     console.log(pascalCase(listOfCities));
// });
// //*****************************************
// //DO NOT ALTER ANY CODE ABOVE THIS COMMENT
// //*****************************************
//
//
// function pascalCase(cityArr){
//     for(var i = 0;i < cities.length;i++){
//         var tempArr = cityArr[i].split("");
//         tempArr[1] = tempArr[1].toUpperCase();
//         cityArr[i] = tempArr.join("");
//     }
//     return cityArr;
// }

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
//
// process.stdin.on('data', function (text) {
//     input += text;
// });
//
// process.stdin.on('end', function () {
//     //do your processing here.
//     console.log(input);
// });
