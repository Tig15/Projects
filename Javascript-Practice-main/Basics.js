// Write a Program to find the Adults
const prompt = require("prompt-sync")()
let personAge = parseInt(prompt("Enter Your Age: "))

let oldEnough = 18
let validate = (personAge >= oldEnough)
console.log(validate)

if(personAge>= 18){
    console.log("This Person is in AdultHood")
}
else{
    console.log("This Person is not an Adult")
}

// Write a Program to find the noon(pm) or midnight(pm)
let time = parseInt(prompt("Enter Your Time:"))

console.log( time >= 0 && time <= 12 ? 'am' : 'pm')

