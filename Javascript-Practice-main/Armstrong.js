const prompt = require("prompt-sync")()
let sum = 0
let a = parseInt(prompt("Enter Your Number:"))

let temp = a
while(temp > 0){
    let remainder = temp % 10   // % is Modulus
    temp = parseInt(temp/10)
    sum += remainder*remainder*remainder
}

if(sum==a){
    console.log(`${a} is an armstrong number.`)
}
else{
    console.log(`${a} is not an armstrong number.`)
}

// Write Another Program for Armstrong which requires Number of Digits by Yourself Someday.
/*let a = parseInt(prompt("Enter Your Number:"))
let noD = a.length
let sum = 0

let temp = a
while(temp > 0){
    let remainder = temp % 10
    temp = parseInt(temp/10)

    sum += remainder ** noD
}
if(sum==a){
    console.log(`${a} is an armstrong number.`)
}
else{
    console.log(`${a} is not an armstrong number.`)
}*/