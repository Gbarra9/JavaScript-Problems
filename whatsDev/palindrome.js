// palindrome a word or a sentence spelled the same backwards or forwards

// use regex (regular expression a sequence of characters that define/match a specific search pattern)

// FOR LOOP DECREMENT
function palindrome(str) {
    let reverse = ''
    // regex W targets all non-alphanumeric(punctuation, spaces and symbols) characters, g for global that goes through entire string
    let reg = /[\W_]/g
    // replace method, two arguments (regex, what to replace)
    // replace with nothing ''
    let smallStr = str.toLowerCase().replace(reg, '')


    for (let i = smallStr.length - 1; i >= 0; i--) {
        reverse += smallStr[i]

    }

    if (reverse === smallStr) {
        return true
    } else {
        return false
    }
}

console.log(palindrome('eye'))



// ARRAY REVERSE METHOD

function palindrome(str) {
    let reverse = str.split('').reverse().join('')
    let otherStr = str.toLowerCase().replace(/[\W_]/g, '')

    if (reverse === otherStr) {
        return true
    } else {
        return false
    }
}

console.log(palindrome('bob'))