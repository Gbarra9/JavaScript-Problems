// 1)
// Create a string that says, "On my way to Techtonic!" by only using properties in the provided object called wordObj.
// The string is case sensitive.  Utilize JavaScript string methods to handle capital letters.

//On my way to Techtonic!

var wordObj = {space:" ",
               punctuation:"!",
               letterBank:{pairedLetters:{one:"my",two:"ch",three:""},
                           singleLetters:{one:"t",two:"n",three:""},
                           vowels:['a','e','i','o','u']
                          },
               wordBank:{one:"way",two:"tonic"}
}
              


function makeSentence(wordObj) {
    // first word On
    let wordOne = wordObj.letterBank.vowels[3].toUpperCase() + wordObj.letterBank.singleLetters.two
    // second word my 
    let wordTwo = wordObj.letterBank.pairedLetters.one
    // third word way
    let wordThree = wordObj.wordBank.one
    // fourth word to
    let wordFour = wordObj.letterBank.singleLetters.one + wordObj.letterBank.vowels[3]
    // fifth word techtonic with exclamation mark '!'
    let wordFiveExtra = wordObj.letterBank.singleLetters.one.toUpperCase() + wordObj.letterBank.vowels[1] +
                        wordObj.letterBank.pairedLetters.two + wordObj.wordBank.two + wordObj.punctuation


    return console.log(`${wordOne} ${wordTwo} ${wordThree} ${wordFour} ${wordFiveExtra}`)
    //CREATE YOUR STRING HERE BY ONLY USING PROPERTIES WITHIN wordObj
    
}

makeSentence(wordObj)


