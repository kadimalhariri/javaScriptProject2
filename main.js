function reverseString() {
    str = 'kadim';
    console.log(str.split('').reverse().join(''));
}
reverseString();


function numberOfCharacters() {
    str2 = 'Kadim al hariri';
    console.log(`The number of characters is ${str2.length}`);
}
numberOfCharacters();


function upper() {
    fullName = 'al hariri';
    up = fullName.split('')[0].toUpperCase()+ fullName.slice(1, 3)+fullName[3].toUpperCase()+ fullName.slice(4)
    console.log(up);
}
upper();

console.log('-----------------------------------------------');


function maxValue() {
    numbers = [0.1, 5, 3, 7, 2, 9, 4];
    max = Math.max(...numbers);
    min = Math.min(...numbers);
    console.log(max, min);
}
maxValue();


function calc() {
    number = [10, 100, 800, 90]
    sum = number.reduce((a, b) => a + b, 0);
    console.log(sum);
}
calc();


function filterArray(arr) {
    return arr.filter(num => num > 5);
}
let array = [1, 3, 6, 8, 2, 7];
let filteredArray = filterArray(array);
console.log("Filtered array (numbers greater than 5):", filteredArray);

console.log('-----------------------------------------------');

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

let numberrr = 5;
let result = factorial(numberrr);
console.log("Factorial of", numberrr, "is:", result);

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let prime = 7;
let output = isPrime(prime);
console.log(prime + " is prime:", output);


function generateFibonacci(terms) {
    let sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, terms);
}

let numberOfTerms = 7;
let fibonacciSequence = generateFibonacci(numberOfTerms);
console.log("Fibonacci sequence:", fibonacciSequence);