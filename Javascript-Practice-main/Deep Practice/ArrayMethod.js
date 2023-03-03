// Add an Elemet to an array with help of push() method and unshift() method.

const types = ['string',20,0.25,"bool"]

types.push("null") // Adds an element at the end of an array.

console.log(types)

types.unshift("undefined") // Adds an Element at the beginning of an array.

console.log(types)

// Change an element inside the array. Let's see:

const wardrobe = ["shirt","tie","pant","socks","knife","shoes","track"]

wardrobe[4] = "jacket";
console.log(wardrobe);

// Remove an element inside the array with the help of pop() and shift() metho.

const shapes = ['triangle','circle','rectangle','square','cube','cylinder','parallelogram','trapezium','rhombus']

shapes.pop() // Removes the last element from the array
console.log(shapes)

shapes.shift() // Removes the first element from the array
console.log(shapes)

let a = shapes.length
console.log(a)

// Let's see how to use delete and concat method.

const lang = ["English", "Gujarati", "Hindi", "Japanese", "Korean"]

delete lang[3] // Using delete word, leaves the space, and announce as an empty item.
console.log(lang) 

const genre = ["Romcom", "Sci-fi", "Thriller","Horror"]
const books = [40, 50, 34,56]

const library = books.concat(genre) // This adds two existing array, by making new one.
console.log(library)