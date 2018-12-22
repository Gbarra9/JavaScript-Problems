// FOR LOOP DECREMENT
// factorial definition = the product of an integer and all the integers below it


function factorialize(num) {
    let factorial = 1
    for (let i = num; i > 1; i--) {
        factorial *= i
    }
    return factorial;
}

// if output is 5
console.log(factorialize(5))