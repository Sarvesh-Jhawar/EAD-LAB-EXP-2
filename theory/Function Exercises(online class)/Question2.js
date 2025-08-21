// Question 2: 2.	Create a function createPasswordManager() that returns methods to setPassword, validatePassword, and resetPassword.
// Password should not be directly accessible outside.
// You (Students) should analyze how closures keep private data safe.
function createPasswordManager() {
    let password = '';

    return {
        setPassword: function(newPassword) {
            password = newPassword;
        },
        validatePassword: function(inputPassword) {
            return password === inputPassword;
        },
        resetPassword: function() {
            password = '';
        }
    };
}
test=createPasswordManager();
test.setPassword("myPassword");
console.log(test.validatePassword("myPassword")); 
test.resetPassword();
console.log(test.validatePassword("myPassword")); 
