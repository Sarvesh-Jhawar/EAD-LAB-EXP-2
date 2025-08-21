// Question 5	Write a function filterEven(numbers) that accepts an array and uses a callback function to filter only even numbers.
// Example: filterEven([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
function filterEven(numbers){
    return numbers.filter(function(num){
        return num%2==0;
    })
}
console.log(filterEven([1, 2, 3, 4, 5, 6])); // [2, 4, 6]