const prompt = require("prompt-sync")()

/* Javascript Function is the block or group of codes used for executing a particular task. */
/* function functionname(val1,val2){

}

functionname(val1, val2) */

/* Example of Function : 1. Who won the match?, 2. Find Diagonal of Square */
firstTeam = parseInt(prompt("Enter First Team Score: "))
secondTeam = parseInt(prompt("Enter Second Team Score: "))

function finalResult(firstTeam, secondTeam){
    if(firstTeam > secondTeam){
        console.log("First Team Won!")
    }
    else if(firstTeam == secondTeam){
        console.log("Match Draw")
    }
    else{
        console.log("Second Team Won!")
    }
}

finalResult(firstTeam, secondTeam)

a = parseFloat(prompt("Enter Side Value: "))

function diag(a){
    diag = 1.41 * a

    console.log(`The Diagonal of Square is ${diag}`)
}
diag(a)

/* There are three ways of writing a function in Javascript. */
/* The Previous Example of Function is called Function Declaration */
x = parseInt(prompt("Enter Your Value: "))
y = parseInt(prompt("Enter Your Value: "))
z = parseInt(prompt("Enter Your Value: "))

const avg = function(x,y,z){
    average = (x + y + z)/3

    console.log(`The average of ${x}, ${y}, and ${z} is ${average}`)
}
avg(x,y,z)
/* This is called as Function Expression */

p = parseInt(prompt("Enter Value: "))
q = parseInt(prompt("Enter Value: "))
let sub = (p,q) => p - q 
console.log(sub(p,q))
/* This is called as Arrow Function. */