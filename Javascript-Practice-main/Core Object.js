// Store Manager Increment by using Map Function
const prompt = require('prompt-sync')()
let increase = parseInt(prompt("Enter Your Increment: "))
const salary = [2000, 4500,5000, 1400, 6000]

/*const newSalary = salary.map(x => x + increase)
console.log(newSalary)*/

// Using For Loop...
for(let i=0; i<5;i++){
    salary[i] += increase
}
console.log(salary)


// Which Century? Based on given years
const lyear = parseInt(prompt("Enter Your Year: "))

    // Overview of Code : First we gave year as in user input. We made a function name calCent, in which we divided the year by 100 in one variable then return it in Math.ceil.

function calCent(){
    let calculation = lyear/100            
    return Math.ceil(calculation)
}

console.log(calCent(lyear))


// Finding out the day From Monday to Sunday with help of Year, Month and Date
const year = parseInt(prompt("Enter Your Year: "))
const month = parseInt(prompt("Enter Your Month: "))
const day = parseInt(prompt("Enter Your Date: "))

function getWeekDay(year, month, day){
    let names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let d = new Date(year, month, day)
    console.log(names[d.getDay()])
}

getWeekDay(year, month, day)