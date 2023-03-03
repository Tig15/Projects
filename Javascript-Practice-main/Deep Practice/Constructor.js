// A constructor function is used to create Objects.
// To create an Object from a constructor function, we use the "new" keyword.
function Month(birth){
    this.birthday = birth
    this.weeks =4,
    this.days=7
}

const April = new Month("15 April")
const March = new Month()

console.log(April.birthday)
console.log(March.days)

// In Javascript, "this" keyword refers to the object is created.