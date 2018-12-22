// REVERSE METHOD (exclusive method for array)


function reverseString(str) {
    // split string into array without spaces, each letter separated by comma
    // first items becomes last, last item becomes first
    // join method('') removes commma, each item in array joined together and converted into string
    return str.split('').reverse().join('')
}

console.log(reverseString('hello'))

// FOR LOOP INCREMENT

function reverseString(str) {
    // create var to store letters after each loop
    // .length access a letter in a string by position
    let string = ''
    for (let i = 0; i <= str.length - 1; i++) {
        string = str[i] + string
    }
    return string
}

console.log(reverseString('hello'))


// FOR LOOP DECREMENT

function reverseString(str) {
    // create var to store letters after each loop
    // .length access a letter in a string by position
    let string = ''
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i]
    }
    return string

}

console.log(reverseString('hello'))