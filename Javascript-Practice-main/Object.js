const prompt = require("prompt-sync")()
// Whether the flight landed or not
function landed(flightNumber, flightStatus){
    this.flightNumber = prompt("Enter Your Flight Number: ")
    this.flightStatus = "Landing"

    console.log("This flight number " + this.flightNumber  + " is Safely " + this.flightStatus )
}
landed(this.flightNumber, this.flightStatus)

// Find finalAmount with parameter amount, discount and rate
function finalAmount(discount, amount, rate){
    this.amount = prompt("Enter Your Amount: ")
    this.rate = parseFloat(prompt("Enter Your Rate: "))
    
    this.discount = this.amount * this.rate
    let finalAmount = this.amount - this.discount
    return finalAmount
}

console.log(finalAmount(this.discount, this.amount, this.rate))

// Find the Volume of cuboid
function cuboid(length, width, height){
    this.length = prompt("Enter Value of Length: ")
    this.width = prompt("Enter Value of Width: ")
    this.height = prompt("Enter Value of Height: ")

    let volume = this.length * this.width * this.height
    return volume
}
console.log(cuboid(this.length, this.width, this.height))


