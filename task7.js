// Check If It's a Title String
// Check if a string title is a title string or not. A title string is one which has 
// all the words in the string start with a upper case letter.

function checkTitle(string){
    words = string.split(" ")
    // console.log(words)
    for(let items of words){
        if(items[0] != items[0].toUpperCase()){
            return false
        }
    }
    return true
}
console.log(checkTitle("A Mind Boggling Achievement"))
console.log(checkTitle("A Simple Java Script Program!"))
console.log(checkTitle("Water is transparent"))
