/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */
function containDuplicate(nums) {
    // Your logic here
    let isContainDuplicate = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (typeof nums[i] && typeof nums[j] !== "number") {
                return 'Invalid array. Array contains string';
            }
            if (nums[i] === nums[j]) {
                isContainDuplicate = true;
            }
        }
    }

    return isContainDuplicate;
}

console.log(containDuplicate([1, 2, 3, 4]));
console.log(containDuplicate([1, 2, 3, 1]));
console.log(containDuplicate([1, 2, 3, '1']));
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));