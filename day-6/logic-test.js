/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
    // Your logic here

    let number = 0;
    let maxCount = 0;

    if (nums.length < 1) {
        return 'invalid input';
    }

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }

            if (count > maxCount) {
                maxCount = count;
                number = nums[i];
            }
        }
    }

    console.log(`max existing count ${number}: ${maxCount}`);
    return number;
}

console.log(majorityElement([2, 1, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([3, 2, 3, '2', '6', '8', '8', '8']));
console.log(majorityElement([1, 2, 3]));