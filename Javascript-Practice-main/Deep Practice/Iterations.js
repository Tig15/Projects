const prompt = require("prompt-sync")()

// Multiples of 4 with the help of For Loop
const num = parseInt(prompt("Enter Your Number: "))

for(let i=1;i<=10;i++){
    const result = num * i
    console.log(`${num} x ${i} = ${result}`)
}


// Sorting of An Array
const marks = [20,47,85,36,65]

for(let i=0;i<marks.length-1;i++){
    let swapped = false
    for(let j=0;j<marks.length-i-1;j++){
        if(marks[j]>marks[j+1]){
            let temp = marks[j]
            marks[j] = marks[j+1]
            marks[j+1] = temp
            swapped = true
        }
    }
}
console.log(marks)

// Minimum and Maximum
const points = [34,45,22,4,34,65]
let smallest = points[0]

for(let i=0;i<points.length;i++){
    if(points[i]<smallest){
        smallest = points[i]
    }
}
console.log(smallest)

// While Loop
let i = 0
while(i<=10){
    i++
    console.log(i)
}

let j = 0
n = 5
do{
    j += n
    console.log(j)
    j++
}while(j<45)

