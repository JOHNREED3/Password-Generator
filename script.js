// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  var length = prompt("How many characters would you like your password to contain?");
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters!");
    return generatePassword();
  };
  var specialChars = ("!@#$%^&*()");
  var numericChars = ("0123456789");
  var lowerChars = ("abcdefghijklmnopqrstuvwxyz");
  var upperChars = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var approvedChars;

  var generateChars = function() {
    var tempChars; 
  };

  if (confirm("Click OK to confirm including special characters.") == true) {
    // ******** TRY USING 
    console.log("special characters requested");
    // confirm("Click OK to confirm including numeric characters.") 
    // confirm("Click OK to confirm including lowercase characters.") 
    // confirm("Click OK to confirm including uppercase characters.") 
    // alert("You must select at least one character type!" )
    // var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // for (var i = 0; i <= passwordLength; i++) {
    //   var randomNumber = Math.floor(Math.random() * chars.length);
    //   password += chars.substring(randomNumber, randomNumber +1);
    //  }


  } else {generatePassword();
  };

  return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
