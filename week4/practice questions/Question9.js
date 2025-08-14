// Question9.	Accept a string and display it in reverse order (using loop).
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("The reverse of the string is: " + reverseString("Hello World"));