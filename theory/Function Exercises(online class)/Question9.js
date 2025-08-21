
function bankAccount(Balance) {
    let initialBalance = Balance;
    return{
        deposit: function(amount){
            initialBalance += amount;
        },
        getBalance: function(){
            return initialBalance;
        },
        withdraw:function(amount){
            if(amount>initialBalance){
                return "Insufficient funds";
            }
            initialBalance -= amount;
        }
    }
}
account = bankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
account.withdraw(200); // 1300
console.log(account.withdraw(2000)); // Insufficient funds
console.log(account.getBalance()); // 1300
