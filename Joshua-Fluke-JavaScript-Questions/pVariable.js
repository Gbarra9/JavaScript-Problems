// HOW DO YOU CREATE A PRIVATE VARIABLE?

function secretVariable() {
    var private = 'super secret code'
    return function () {
        return private
    }
}

var getPrivateVariable = secretVariable()


// This will return the function
// console.log(secretVariable())

console.log(getPrivateVariable())