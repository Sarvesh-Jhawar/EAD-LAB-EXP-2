// Question 10.	Check whether a number is a prime number.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is 7 a prime number? " + isPrime(7));