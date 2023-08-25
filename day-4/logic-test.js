/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. 
You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
    // Your logic here
    if (typeof str !== "string") {
        return `invalid input! your input is a ${typeof str}`
    }

    const input = str.toLowerCase();

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return false;
            }
        }
    }

    return true;
}

console.log(hasUniqueCharacters('abcde'));
console.log(hasUniqueCharacters('abcded'));
console.log(hasUniqueCharacters('HelLo'));
console.log(hasUniqueCharacters('12345'));
console.log(hasUniqueCharacters(12345));