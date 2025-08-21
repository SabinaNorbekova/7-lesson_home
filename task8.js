// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// Example 1:
// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

function firstUniqueChar(str){
    let count = {}
    for (let i = 0; i < str.length; i++){
        if(count[str[i]] != undefined){
            count[str[i]] += 1
        }else{
            count[str[i]] = 1
        }
    }
    for(let i = 0; i < str.length; i++){
        if(count[str[i]] === 1){
            return i
        }
    }
    return -1
}
console.log(firstUniqueChar("loveleetcode"))
console.log(firstUniqueChar("leetcode"))
console.log(firstUniqueChar("aabb"))