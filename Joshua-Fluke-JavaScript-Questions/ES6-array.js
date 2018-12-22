// HOW TO ADD AT THE BEGINNING AND END OF AN ARRAY ES6

// (...) is a spread operator


var myArray = ["a", "b", "c", "d"]

// takes group of items in the array, inserts an items at start
// myArray = ['start', ...myArray]
// takes group of items in the array, inserts an items at end
// myArray = [...myArray, 'end']

myArray = ['start', ...myArray, 'end']

console.log(myArray)