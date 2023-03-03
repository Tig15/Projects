// The snail climbs up 7 feet each day and slips back 2 feet each night. 

const prompt = require('prompt-sync')()

const depth = parseInt(prompt("Enter Your Depth: "))
let days = 0
let total = 0

while(depth>total){
    days++
    total += 7

    if(total>depth){
        console.log(days)
        break
    }
    total -= 2
}