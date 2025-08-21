// Question 4 : 4.	Write a recursive function factorial(n) that returns factorial of a number.
// Example: factorial(5) → 120

function Factorial(n){
    if(n===0){
        return 1;
    }
    return n * Factorial(n-1);
}
console.log(Factorial(5)); // 120