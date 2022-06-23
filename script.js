// Assignment code here
var approvedChars;
var password = "";
var passwordLength;
var passwordText;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  passwordLength = prompt("How many characters would you like your password to contain?");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters!");
    return generatePassword();
    };
  generateChars();
  randomPassword();  
 
  function randomPassword() {
    for (var i = 0; i <=passwordLength; i++) {
      var randomChar = Math.floor(Math.random() * approvedChars.length);
      password += approvedChars.substring(randomChar, randomChar +1)
    }
  }
  return password;
};

var generateChars = function() {
      // confirm("Click OK to confirm including special characters.") 
    if (confirm("Click OK to confirm including special characters.") == true) {
      console.log("special characters requested");
      var tempSpecial=("!@#$%^&*()");
    } else { tempSpecial=("")};

      // confirm("Click OK to confirm including numeric characters.") 
    if (confirm("Click OK to confirm including numeric characters.") == true) {
      console.log("numeric characters requested");
      var tempNumeric=("0123456789");
    } else { tempNumeric=("")};
    
      // confirm("Click OK to confirm including lowercase characters.") 
    if (confirm("Click OK to confirm including lowercase characters.") == true) {
      console.log("lowercase characters requested");
      var tempLower=("abcdefghijklmnopqrstuvwxyz");
    } else { tempLower=("")};
    
      // confirm("Click OK to confirm including uppercase characters.") 
    if (confirm("Click OK to confirm including uppercase characters.") == true) {
      console.log("uppercase characters requested");
      var tempUpper=("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    } else { tempUpper=("")};

    approvedChars = (tempSpecial + tempNumeric + tempLower + tempUpper);
    console.log(approvedChars);
};

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

