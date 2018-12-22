// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {



    // Create filter array(based on original expression) using match method to get rid of non characters
    // accepts anything between a-z and 0-9 and g to continue beyond first match
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    // Take current iteration compare to length before current iteration
    // compares all values

// SOLUTION 1 - Return a single longest word
    // EXTRA NOTE: return longest word in array --> return sorted[0]

  const sorted = wordArr.sort(function(a,b){
    return b.length - a.length;
  });
    //ARROW FUCNTION
    // const sorted = wordArr.sort((a,b) => b.length - a.length)


  // If multiple words, put into new array
  // function parameter word = current item in iteration

// SOLUTION 2 - Return an array and include multiple words if they have the same length
  const longestWordArr = sorted.filter(function(word){
    // returns true or false, if true add in new array, if false not included in new array
    return word.length === sorted[0].length;
  })

    //ARROW FUCNTION
    // const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);

// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  // Check if more than one array value
    // if array length is equal to one print array item, else return array items
  if(longestWordArr.length === 1) {
    // Return the word in first position
    return longestWordArr[0]
  } else {
    return longestWordArr;
  }

  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]



function chunkArray(arr, len) {

  // Solution 1
    // // init chunk Array
    // const chunkedArr = []
    // // Set Index
    // let i = 0
    //
    // // Loop while index is less than array length
    // while(i < arr.length) {
    //   // slice out from the index to the index + the chunk length push onto chunked array
    //   // two parameters, includes first parameter and second parameter value as range not inclusive
    //   // range starting at 0(before increment) to 3(not inclusive) passed as an argument
    //   chunkedArr.push(arr.slice(i , i + len))
    //   //increment by chunk length
    //   // adds current len = 3 passed as argument to i
    //   i += len
    // }
    // return chunkedArr

  // Solution 2

  // Int chucked arr
  const chunkedArr = []

  // Loop through arr, apply function to each item in arr array
  arr.forEach(function(val) {
    //Get Last element from array
    // accessing last array value item and storing into last variable
    const last = chunkedArr[chunkedArr.length - 1]

    //check if last (last undefined) and checks if last array item from chunkedArr = to len
    // len = 2
    if(!last || last.length === len) {

      chunkedArr.push([val])
    } else {
      // push if last array item in array has length less than 2
      // push as single item value in last item array
      last.push(val)
    }
    console.log(chunkedArr)
  })
  return chunkedArr

}




// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]


function flattenArray(arrays) {
  // Solution 1
    // reduce method takes in function with parameters a and b
    // a is starting point
    // b is each starting point
    // .concat merges two arrays , merge does not change original array (new array made)

  // return arrays.reduce(function(a,b) {
  //   return a.concat(b)
  //
  // })

  // Solution 2 : apply method
    // concat on empty array
    // apply method takes single array and passes all elements inside that single array

    // return [].concat.apply([], arrays)

  // Solution 3 : spread operator ...
    // takes all items in arrays adding each item as a separate item

    return [].concat(...arrays)
}




// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'


function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2)
}

// Helper function
function formatStr(str) {
  // anything that does not match a word character, replace with empty space
  // lowercase characters
  // split each character into own array value
  // sorts array from earliest letter to latest by values
  // joins the array together into string value
  return str.toLowerCase.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}




// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'


function letterChanges(str) {
  // replace all characters a-z with global gi meaning case insensitive
  // char is current character in iteration
  let newStr = str.toLowerCase().replace(/[a-z]/gi,function(char){
    if (char === 'z' || char ==='Z') {
      return 'a'
    } else {
      // method from fromCharCode(), actual character code that adds a 1 to its value
      return String.fromCharCode(char.charCodeAt() + 1)
    }
  })
  // use vowels as literals global case insensitive and replace them with uppercase vowels
  newStr = newStr.replace(/[a|e|i|o|u]/gi, function(vowel){
    return vowel.toUpperCase()
  })
  return newStr
}

// Call Function

// CHALLENGE 1

// const output = longestWord('Hello there, my name is Brad');
//
// console.log(output);


// CHALLENGE 2
  // SOLUTION 1

  // EXAMPLE 1
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
//
// console.log(output);
  // EXAMPLE 2
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
//
// console.log(output);

  // SOLUTION 2

  // const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
  //
  // console.log(output);


// CHALLENGE 3

// const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
//
// console.log(output);



// CHALLENGE 4

// const output = isAnagram('dormitory', 'dirty room##');
//
// console.log(output);




// CHALLENGE 5

const output = letterChanges('Hello There');

function letterChanges(str) {}

// Call Function
const output = longestWord('Hello, my name is Brad');


console.log(output);
