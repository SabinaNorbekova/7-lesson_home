// ES6: Destructuring Objects X
// Given an array of user objects.

// function yarating u arraychida object berilsin o'sha objectdagi userlarning namelarini array qilib qaytarilsin

let names = []

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]

function nameArr (obj){
    let name_array = []
    for (let {name} of obj){
        name_array.push(name)
    }
    return name_array
}

console.log(nameArr(users)) 