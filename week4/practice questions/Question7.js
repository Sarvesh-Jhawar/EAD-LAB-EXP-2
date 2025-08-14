// Question 7.	Display the Fibonacci series up to n terms.
function fibonacciSeries(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log("Fibonacci series up to 10 terms: " + fibonacciSeries(10).join(", "));