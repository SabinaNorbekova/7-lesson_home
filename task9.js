// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
// Example 1:
// Input: num1 = "11", num2 = "123"
// Output: "134"
function addStrings (num1, num2){
    let sum = 0;
    let carry = 0;
    let resArray = []
    for (let i = 0; i < Math.max(num1.length, num2.length); i++){
        let digit1 = i < num1.length ? Number(num1[num1.length - 1 - i]) : 0;
        let digit2 = i < num2.length ? Number(num2[num2.length - 1 - i]) : 0;
        let total = digit1 + digit2 + carry;
        let currentDigit = total % 10;
        carry = Math.floor(total / 10);
        resArray.unshift(currentDigit);
    }
    if(carry>0){
        resArray.unshift(carry);
    }
    return resArray.join("")
}
console.log(addStrings(num1 = "11", num2 = "123"))
console.log(addStrings(num1 = "456", num2 = "77"))
console.log(addStrings(num1 = "0", num2 = "0"))