// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar (string){
    let new_str = ""
    for (let el of string){
        new_str += el+el 
    }
    return new_str
}

console.log(doubleChar("String"))
console.log(doubleChar("Hello World!"))
console.log(doubleChar("1234!_ "))