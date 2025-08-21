// Question 1: 1.	Write two functions to calculate Fibonacci numbers:
// fibRecursive(n) → recursive approach
// fibIterative(n) → loop approach
// Compare which one is faster when n = 40.
function fibRecursive(n) {
    if (n<=1){
        return n;
    }
    return fibRecursive(n-1) + fibRecursive(n-2);
}
function fibIterative(n) {
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.time("fibRecursive");
fibRecursive(40);
console.timeEnd("fibRecursive");

console.time("fibIterative");
fibIterative(40);
console.timeEnd("fibIterative");

