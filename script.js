// All base variables used in the code, along with the querySelector linked to the "generateBtn" variable.
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var passwordLength;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmSpecial;
var confirmation;
// The main function of the code, providing the random generation to the code.
function generatePassword() {
        
    passwordLength = prompt("Choose password length (Enter a value between 8-128 characters).");
        if(!passwordLength) {
            alert("You have to choose a value.")
        } else if (passwordLength < 8 || passwordLength > 128) {
            confirmation = prompt("Choose password length (Enter a value between 8-128 characters).");
        } else {
            confirmLowercase = confirm("Would you like lowercase characters?")
            confirmUppercase = confirm("Would you like uppercase characters?")
            confirmNumber = confirm("Would you like numbers?")
            confirmSpecial = confirm("Would you like special characters? (Example: $%#$@#%)")
        };

        var confirmation = [];
// Concatenates the user input, letting the code know which parameters have been selected.
// Checks if the user DOES want lowercase letters included, and concatenates them inside the function.
        if (confirmLowercase) {
            confirmation = confirmation.concat(lowerCase);
        }
// Checks if the user DOES want uppercase letters included, and concatenates them inside the function.
        if (confirmUppercase) {
            confirmation = confirmation.concat(upperCase);
        }
// Checks if the user DOES want numberss included, and concatenates them inside the function.
        if (confirmNumber) {
            confirmation = confirmation.concat(numbers);
        }
// Checks if the user DOES want special characters included, and concatenates them inside the function.
        if (confirmSpecial) {
            confirmation = confirmation.concat(special);
        }

// the "bigPassword" variable is what the generated password is assigned to, and is what gets displayed to the user.
var bigPassword = [];
// This is what allows random generation for the password.
        for(var i = 0; i < passwordLength; i++) {
            var pickPassword = confirmation[Math.floor(Math.random() * confirmation.length)];
            bigPassword.push(pickPassword);
        }
// This final block of the function displays the randomly generated password.
        var passLink = bigPassword.join("");
        UserInput(passLink);
        return passLink;
    }

// This function is how the password becomes displayed and printed to the screen, linking the "password" ID from the HTML, and changing it's text content to display the password.
function UserInput(passLink) {
    document.getElementById("password").textContent = passLink
}
// Makes the button functional, upon clicking, the "generatePassword" function will be initiated. 
generateBtn.addEventListener("click", function() {
    generatePassword()
});
