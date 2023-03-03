/* Implicit Conversion */
// When you add any datatype into strings, it convert that into string and concatenate
let name
names = 'Aman' + 15
console.log(names)

// Strings of number when used with operators, they convert into number types.
let age
age = '20' - 10
console.log(age)

// If boolean is used, then false work as 0 and true work as 1
let validAge
validAge = 19 - true
console.log(validAge)

// null considered as 0

/* Explicit Conversion */
// To convert any datatype into number, we can use Number() methods. But it will return NaN when using on text or undefined. Other than that we use parseInt and parseFloat.
let result
result = Number(null)
console.log(result)
result = Number('Aman')
console.log(result)

// To convert any datatype into string, we can use String() and toString() methods.
let stage
stage = String(false)
console.log(stage)
stage = (125).toString()
console.log(stage)

// To convert any datatype into boolean, we can use Boolean() methods. But it will return NaN when using on undefined or null or NaN.
let validate
validate = Boolean('Aman')
console.log(validate)
validate = Boolean(null)
console.log(validate)




