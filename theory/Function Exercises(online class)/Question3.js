// Question 3.	Write a function calculator(a, b, operation) that can add, subtract, multiply, divide, or find modulus based on the string given in operation.
// Example:
// 	calculator(10, 5, "add"); // 15
// calculator(10, 5, "divide"); // 2
// calculator(10, 5, "mod"); // 0
function calculator(a,b,operation){
    switch(operation){
        case "add":
            return a+b;
        case "divide":
            return a/b;
        case "mod":
            return a%b;
    }
}
console.log(calculator(10, 5, "add"));      // 15
console.log(calculator(10, 5, "divide"));   // 2
console.log(calculator(10, 5, "mod"));      // 0
