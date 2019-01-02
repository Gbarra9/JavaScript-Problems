function findLongestWord(str) {
    // // space in between commas to add words as a whole no letters 
    let words = str.split(' ')
    let longest = ''

    // loop through each word and store to longest variable, if current string length greater than longest string
    for (var word of words) { 
        if (word.length > longest.length) {
            longest = word
        }
    }
    return console.log(longest)


    

}

// Alterative sort method

// function findLongestWord(str) {
//     return console.log(str.split(' ').sort(function (a, b) { return b.length - a.length})[0])
// }


// findLongestWord('The quick brown fox jumped over the lazy dog')








// EXAMPLE OF USING FOR OF LOOP

// CODE for loop the same
// var fruits = ['apple', 'orange', 'cherries']

// for (var i = 0; i < fruits.length; i++) { 
//     console.log(fruits[i])
// }

// Same as for loop above
// for (var fruit of fruits) { 
//     console.log(fruit)
// }