/**
 *
 * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays 
 * or built-in functions like max().
 *
 */
function max_of_two(a, b) {

    if (typeof a != typeof b) {
        return 'invalid input';
    } else if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else if (a == b) {
        return 'input equal'
    } else {
        return 'not a input';
    }

}

console.log(max_of_two([10, 12], [5, 15]));
console.log(max_of_two(45, 66));
console.log(max_of_two(66, 66));