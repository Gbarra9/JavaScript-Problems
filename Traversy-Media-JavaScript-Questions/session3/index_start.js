// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20


  // Solution 1: ES5 arguments & for loop

// function addAll() {
//   // turns arguments into array
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (let i = 0; i < args.length; i++){
//     // take current argument value and adding to total
//     total += args[i]
//   }
//   return total;
// }

  // Solution 2: ES6 ... (rest operator) and reduce/forEach
    // parameter name can be any

// function addAll(...numbers) {
//   // only add ...numbers in parameters
//   let total = 0;
//   // callback function for each parameter add to total
//     // numbers.forEach(function(num) {
//     //   total += num;
//     // })
//     // return total;
//   numbers.forEach((num) => total += num)
//   return total;
// }

  // Solution 3: ES6 ... (rest operator) and reduce

// function addAll(...numbers) {
//   // each iteration add current value
//   return numbers.reduce((acc,cur) => acc + cur)}
// console.log(addAll(2,5,6,7))



// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17


  // My Solution
// function sumAllPrimes(num) {
//   let acc = 0
//   for(let i = 2; i <= num; i++) {
//     if(i === 2) {
//       acc += i
//     } else if (i === 3) {
//       acc += i
//     } else if (i === 5) {
//       acc += i
//     } else if (i === 7) {
//       acc += i
//     } else {
//       acc+= 0
//     }
//   }
//   return acc
// }

  // First Solution
// function sumAllPrimes(num) {
//   let total = 0
//
//   function checkForPrime(i) {
//     for(let j = 2; j < i ; j++) {
//       // check if j divisible by i
//       // first run returns false 2 < 2 = false, so 2 gets added 2 the total
//       if(i % j === 0) {
//         return false
//       }
//     }
//     return true
//   }
//
//   for(let i = 2; i <= num ; i++) {
//     // parameter returns true or false depending on function above
//     // if true add number to total
//     if(checkForPrime(i)) {
//       total += i
//     }
//   }
//   return total
// }
//
// console.log(sumAllPrimes(10))

// CHALLENGE 3: SEEK & DESTROY ****
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

  // Solution 1: arguments, indexOf, filter
// function seekAndDestroy(arr) {
//     // args returns whole array passed into arugments
//     // arr return single array --> [2, 3, 4, 6, 6, 'hello']
//   const args = Array.from(arguments)
//
//
//   function filterArr(arr) {
//     // use indexOf to return true if not in array
//     // returns first index at which given element is found, or -1 if not found
//     // return true if NOT found in array
//     return args.indexOf(arr) === -1
//
//   }
//
//   return arr.filter(filterArr)
// }

  // Solution 2: ...rest, filter, includes
// function seekAndDestroy(arr, ...rest) {
//   // filter loops through array, value is true will stay in array
//   // includes checks if value in array
//   return arr.filter(val => !rest.includes(val))
// }
// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))



// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']




// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]


// function sortByHeight(a) {
//   // arr1 holds position of -1 values
//   const arr1 = []
//   // arr2 holds value that is not -1
//   const arr2 = []
//
//   // val represents each value in array
//   // i represents index or position of current value
//   // forEach loop
//
//     // Optional Ternary syntax
//       // first part condition
//       // second part if condition is met
//       // third part result if condition not met
//     // a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val));
//
//
//   a.forEach((val, i) => {
//     // if current value = -1
//     if(val === -1) {
//       arr1.push(i)
//     } else {
//       arr2.push(val)
//     }
//   })
//
//   // lowest to highest with sort function a - b
//   // highest to lowest put (b -  a)
//   const sortArr = arr2.sort((a,b) => a  - b)
//
//   // val current val, i current position in index
//   // takes
//   arr1.forEach((val, i ) => sortArr.splice(arr1[i], 0 , -1))
//
//   return sortArr
// }
//
// // a takes in array and pass a as argument to function when called
// const a = [-1, 150, 190, 170, -1, -1, 160, 180]
// console.log(sortByHeight(a))






// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined


// function missingLetters(str) {
//   // charCodeAt() method that gives number code of character
//   // str.charCodeAt(0) will return value of first chracter's value via predetermined value
//   let compare = str.charCodeAt(0)
//   let missing
//
//   // turn string to array (split method) and loop through it
//   // empty characters mean turn string to array of items, each character becomes an item
//   // map similar to forEach but returns array
//     // map has parameters char = current value , i = current index
//   str.split('').map((char,i) => {
//     if(str.charCodeAt(i) === compare) {
//       // if value charCodeAt equals each other move on to next comparison
//       ++compare
//     } else {
//       // if next character code missing store into missing variable
//       // gets str value from charcode that correlates with letter
//       missing = String.fromCharCode(compare)
//     }
//   })
//   return missing
//
// }
// console.log(missingLetters("abcfg"))




// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]


function evenOddSums(arr) {

  let evenSum = 0
  let oddSum = 0

    // loops through each value in array
    // ternary operator
      // arr.forEach(val => (val % 2 === 0 ? (evenSum += val) : (oddSum+= val)));

  arr.forEach(val => {
    if(val % 2 === 0) {
      evenSum += val

    } else {
      oddSum += val
    }
  })
  return [evenSum, oddSum]
}

console.log(evenOddSums([50, 60, 60, 45, 71]))

function evenOddSums() {}
