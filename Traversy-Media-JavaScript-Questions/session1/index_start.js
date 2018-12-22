// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  /* 
  1ST SOLUTION NOTES : (array reverse method)
   splits string object into array of strings, separates strings into substrings
   join parameter () empty = ',' added, ('') no space = no space between characters, ('-') hyphen = hyphen between words
   creates and returns new string by concatenating all elements in an array

  const strArr = str.split('');
  strArr.reverse();
  return strArr.join(''); 

  refactor by method chaining-->   return str.split('').reverse().join('');
  */

  // return str.split('').reverse().join('');

  /*
  2ND SOLUTION NOTES : (decrementing for loops)
    initialize revString with an empty value setting value to ''
    str.length - 1 b/c it will return undefenied if str.length(has 6 characters retruning undefined)
  */

  // let revString = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  /*
  3RD SOLUTION NOTES : (incrementing for loops)
    initialize revString with an empty value setting value to ''
    str.length - 1 b/c it will return undefenied if str.length(has 6 characters retruning undefined)
    first letter 'h' then 'e' b/c revString is placed after str[i]
  */

  // let revString = '';
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  //   console.log(revString)

  // }
  // return revString;

  /*
  4th SOLUTION NOTES : (ES6: for of loops)
    use char of
  */

  // let revString = '';
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  /*
  5th SOLUTION NOTES : (forEach loop using Higher Order Array function, function that takes another function as argument)
    turn str to array using split() method
  */
  //  regular non ES6

  // let revString = '';
  // str.split('').forEach(function (char) {
  //   revString = char + revString;
  // });
  // return revString;

  // ES6 method using arrow fucntion (one parameter, able to omit paratheses wrapping char)

  // let revString = '';
  // str.split('').forEach(char => revString = char + revString)
  // return revString;

  /*
 6th SOLUTION NOTES : (Reduce method)
  split() method to turn string to array
  reduce takes in a function (accumulator = value of first element, char value of second element)
  second argument sets initial value ('')
  this returns another array

 */

  // return str.split('').reduce(function (revString, char) {
  //   return char + revString;
  // }, '');

  // ES6 arrow function

  return str.split("").reduce((revString, char) => char + revString, "")
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  /* 
  1ST SOLUTION NOTES : Reverse string, turn string to array reverse it and create new string by join method
  */

  const revString = str
    .split("")
    .reverse()
    .join("")
  return revString === str

  /* 
  PERSONAL SOLUTION : Reverse string using for loop and use if then statement
  */

  // let palindrome = ""
  // for (let i = str.length - 1; i >= 0; i--) {
  //   palindrome = palindrome + str[i]
  //   console.log(palindrome)
  // }

  // if (palindrome === str) {
  //   return true
  // } else
  //   return false
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  /* 
  1ST SOLUTION NOTES 
    turn integer(number data type) to a string data type using .toString property
    turn string to array using .spliut('') and reverse array items using .reverse()
    join items using .join() method
    use parseInt to turn number (string data type) to (number data type)
    Note:Remember to ALWAYS include return keyword inside function to return value (otherwise undefined value is returned)

  */

  // Adding negative number or positive number Math .sign(int)

  const revString = int
    .toString()
    .split("")
    .reverse()
    .join("")
  return parseInt(revString) * Math.sign(int)
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  /* 
  1ST SOLUTION NOTES : Turn string to array then back to string
    use split() method to turn sting to array, put space between '' to make array items (each word instead of character)
    subString() method takes from a string range (value 1,  value 2), in this case between character value 1 and character value 2
    Take first letter uppercase it and add on the rest of the word
    use return and .join() method with space to have array items turn back into string with space

  */

  // const strArr = str.split(' ');
  // for (let i = 0; i <= strArr.length - 1; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(' ');

  /* 
  2ND SOLUTION NOTES: MAP High Order Array Function
    map an array and return an array
    substr the same as substring
  */

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(function (word) {
  //     return word[0].toUpperCase() + word.substr(1);
  //   }).join(' ');

  // ES6

  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substr(1)).join(' ');

  /* 
  3RD SOLUTION NOTES: Regular Eexpressions
    .replace() method takes in regular expressions need to be with slashes //
    include word boundary \b
    put in lower case range a-z
    g for global caps all words , otherwise only first word
    i is case insensitive
    takes in a function with a parameter


  */

  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase()
  })
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  /* 
  1ST SOLUTION NOTES: Use  Through Object Character mapping
    create an object
    turn string into array
    key value pairs of actual character, and how many of each character
    if charMap[char] exists add 1 to value of key value pair
    use for in loop to loop through object

  */
  const charMap = {}
  let maxNum = 0
  let maxChar = ""
  str.split("").forEach(function(char) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  })

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// module value %  remainder 0 then true
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else console.log(i)
  }
}

// Call Function

//// CHALLENGE 1 OUTPUTS
// const output = reverseString('hello');
// console.log(output);

//// CHALLENGE 2 OUTPUTS
// const output = isPalindrome('racecar');
// console.log(output);

// CHALLENGE 3 OUTPUTS

// const output = reverseInt(-543);
// console.log(output);

// CHALLENGE 4 OUTPUTS
// const output = capitalizeLetters('i love javascript');
// console.log(output);

// CHALLENGE 5 OUTPUTS
// const output = maxCharacter("javascript")
// console.log(output)

// CHALLENGE 6 OUTPUTS
const output = fizzBuzz()
console.log(output)
