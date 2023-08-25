/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {

    if (typeof n !== "number") {
        return 'Not a number';
    }

    if (n < 2) {
        return false;
    } 

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// function isPrime(n) {
//     if (typeof n !== "number") {
//         return 'Not a number';
//     }

//     if (n < 2) {
//         return false;
//     }

//     if (n == 2) {
//         return true;
//     } else if (n > 1 && n % 2 !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isPrime('1'));
// console.log(isPrime(2));
// console.log(isPrime(7));
// console.log(isPrime(4));
// console.log(isPrime(6));
// console.log(isPrime(5));
// console.log(isPrime(43));
// console.log(isPrime(99));
// console.log(isPrime(15));
// console.log(isPrime(100));

function showPrimeNumber(num) {
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            console.log('Prime', i);;
        }
    }
}

showPrimeNumber(100);