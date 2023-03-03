// An Object can also contain a function. Javascript Object Method is an Object property that has a function value.
// An Object Method can access like this : "objectName.methodName()"

const circle ={
    angle:360,
    getRadius: function(Aoc){
        r = Aoc/6.28;
        console.log(`The area of radius is ${r}`);
    }
}

circle.getRadius(200);
circle.getRadius() // The Result Appears to be NaN


// Adding Properties and Method in the object.

const square = {}

square.side = 4;

square.getDiagonal = function (side) { 
    d = side * 1.41
    console.log(`The Diagonal of Square is ${d}`)
 }

console.log(square);
square.getDiagonal(20);

