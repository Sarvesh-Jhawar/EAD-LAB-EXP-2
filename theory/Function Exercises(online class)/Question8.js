// Question 8:	Write two functions:
// double(x) → returns x * 2
// square(x) → returns x * x
// Then write a higher-order function compose(f, g, value) that applies both functions.
// Example: compose(double, square, 3); // (3^2) * 2 = 18
function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

function compose(f,g,value){
    return f(g(value));
}
console.log(compose(double, square, 3)); // 18
