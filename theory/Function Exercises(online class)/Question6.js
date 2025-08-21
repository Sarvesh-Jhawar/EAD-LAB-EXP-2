//Question  6.	Use an arrow function with map() to return an array of squares from [1, 2, 3, 4, 5].
// Expected output: [1, 4, 9, 16, 25]
function Squares(nums){
    return nums.map(num => num * num);
}
console.log(Squares([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]