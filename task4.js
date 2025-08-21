// Ageing the Population...
// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

// afterNYears function yarating people deb nomlanagan object va n year ni kiritilsin n kiritilganda 
// objectdagi hamma qiymatlar n yerga ortishi kerak!.
function afterNYears(obj, n){
    for (let key in obj){
        obj[key] += n
    }
    return obj
}

console.log(afterNYears({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
}, 1))

console.log(afterNYears({
    "Baby" : 2,
    "Child" : 8,
    "Teenager" : 15,
    "Adult" : 25,
    "Elderly" : 71
  }, 19))

console.log(afterNYears({
    "Genie" : 1000,
    "Joe" : 40
  }, 5))