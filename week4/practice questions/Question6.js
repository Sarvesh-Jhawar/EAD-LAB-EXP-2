// Question6.	Reverse a given number.
function reverseNumber(num){
    let ans=0;
    while(num>0){
        ans=(ans*10)+(num%10);
        num=Math.floor(num/10);
    }
    return ans;
}
console.log("The reverse of the number is: " + reverseNumber(12345));