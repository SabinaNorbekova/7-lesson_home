// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// objectToArray Function object olsin va o'sha objectni array ko'rinishida qaytarib bersin!.
function objectToArray(obj){
    let arr = []
    for(let key in obj){
        arr.push([key, obj[key]])
    }
    return arr
}
console.log(
    objectToArray({
        D: 1,
        B: 2,
        C: 3
      }) 
)
console.log(
    objectToArray({
        likes: 2,
        dislikes: 3,
        followers: 10
      })
)