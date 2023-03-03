// Multiple of any number give by user between 1 to 10
const prompt = require('prompt-sync')()
const num = parseInt(prompt("Enter Your Number: "))

for(i=1;i<=10;i++){
    const result = i * num
    console.log(`${num} x ${i} = ${result}`)
}