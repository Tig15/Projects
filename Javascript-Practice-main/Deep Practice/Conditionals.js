const e = require('express')

/* If statement */
const prompt = require('prompt-sync')()
let age = parseInt(prompt("Enter Your Age:"))
if(age > 18){
    console.log("You can use indecent sites.")
}
// Else Statement - To Execute Second Conditon which is obvious
else{
    console.log('Sorry, you cannot proceed as you are minor.')
}

/* Else If Statement */
let marks = parseInt(prompt("Enter Your Marks: "))
if(marks < 30){
    console.log("You are fail!")
}
else if(marks>80){
    console.log("You did Well!")
}
else{
    console.log("Keep more practice.")
}

/* Switch Statment */
let people = parseInt(prompt('Enter How Many People: '))
switch(people){
    case 25:
        console.log("You can go ahead!")
        break;
    case 10:
        console.log("Please! Get more people")
        break;
    default:
        console.log("Sorry! You are loaded!")      
}

/* Break */
/* Continue */





