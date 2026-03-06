// String Manipulation Functions

// Takes a string and flips it around - "hello" becomes "olleh"
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Just counts how many characters are in the string
function countCharacters(str) {
    return str.length;
}

// Makes the first letter of each word uppercase, rest lowercase
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// Array Functions

// Finds the biggest number in an array
function findMaximum(arr) {
    return arr.length === 0 ? undefined : Math.max(...arr);
}

// Finds the smallest number in an array
function findMinimum(arr) {
    return arr.length === 0 ? undefined : Math.min(...arr);
}

// Adds up all the numbers in an array
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Keeps only elements that pass your condition (like filtering out small numbers)
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions

// Calculates factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120
function factorial(n) {
    if (n < 0) return undefined;
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

// Checks if a number is prime (only divisible by 1 and itself)
// Uses a simple optimization: only checks odd numbers up to the square root
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Generates Fibonacci sequence: each number is the sum of the two before it
// Starts with [0, 1, 1, 2, 3, 5, 8, 13, ...]
function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) sequence[i] = sequence[i - 1] + sequence[i - 2];
    return sequence;
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { reverseString, countCharacters, capitalizeWords, findMaximum, findMinimum, sumOfArray, filterArray, factorial, isPrime, fibonacciSequence };
}
