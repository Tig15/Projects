// It is a non-primitive data type that allow you to store multiple collections of data. 
// Values in Javascript Object will be in key-value pair format.
// JS object keys are unique you cannot repeat any key.

// How to declare object:

const Myself = {
    name:"Aman",
    age:20,
} // Key-Value Pair are called as Properties in the Javascript.
console.log(Myself)


// There are three ways of accessing value to the object : Dot Notation, Bracket Notation and Object Destructuring.

const Sky = {
    belong:"Earth",
    time:"Dusk",
    color:"Purple",
}

console.log(Sky.color) // 1. Dot Notation
console.log(Sky['belong']) // 2. Bracket Notation

const {time} = Sky
console.log(time) // 3. Object Destructuring

// Nested Objects...

const library = {
    firstShelf:{
        Books:40,
        Genre:"Fictional-Adventure"
    },
    secondShelf:{
        Books:25,
        Genre:"Thriller-Crime"
    },
    thirdSelf:"Nothing"
}

console.log(library);
console.log(library.firstShelf.Books)
console.log(library.secondShelf['Genre'])

