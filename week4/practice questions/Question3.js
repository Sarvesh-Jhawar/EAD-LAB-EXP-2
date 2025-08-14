// Question 3: Find the sum of numbers from 1 to n.
function sumofN(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i;
    }
    return sum;
}
console.log("the sum of numbers are "+sumofN(5));