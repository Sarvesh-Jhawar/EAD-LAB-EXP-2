// Question 8:Count the number of digits in a given number.
function countDigits(num) {
    let count=0;
    while(num>0){
        count++;
        num=Math.floor(num/10);
    }
    return count;
}
console.log("The number of digits is: " + countDigits(12345));
