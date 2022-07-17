// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be? Between 8 and 128 characters");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
var askLowercase = confirm("Do you want lowercase letters?");
console.log(askLowercase)
var askUppercase = confirm("Do you want uppercase letters?");
console.log(askUppercase)
var askNumeric = confirm("Do you want Numbers?")
console.log(askNumeric)
var askSpecialCharacter = confirm ("Do you want Special Characters?")
console.log(askSpecialCharacter)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
