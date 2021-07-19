// Assignment code here\
let gpasswordLength = null;
//create an array for each type of character.
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Length of password prompt
  const generatePassword = () => {
    let length = window.prompt("Please insert length of password (8 - 128 characters)");

    if (!isNaN(length) && length >= 8 && length <= 128) {
      //store length in variable
        gPasswordLength = length;
        checkCharTypes();
    }
    // if less than 8 or greater than 128 characters send alert
    else alert('Password length must be between 8 and 128')
};
// confirm for 4 types of characters, lowercase, uppercase, numeric, special characters.
const checkCharTypes = () => {
  let isUpper = checkValue("lower case letters");
  let isLower = checkValue("upper case letters");
  let isNumber = checkValue("numbers");
  let isSpecial = checkValue("special characters");

  // if confirm = true then concat userChoices = userChoices.concat(another array)
  if (isUpper || isLower || isNumber || isSpecial) password(isUpper, isLower, isNumber, isSpecial);
  else alert('At least one character type must be selected');
};

const password = (isUpper, isLower, isNumber, isSpecial) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = lower.toUpperCase();
  const nums = "0123456789";
  const specials = "~!@#$%^&*()";
  let masterList = "";
  //let password = "";

  if (isLower) masterList = lower;
  if (isUpper) masterList += upper
  if (isNumber) masterList += nums;
  if (isSpecial) masterList += specials;

// for loop over the array i = 0; i < passwordlength; i++)
  for (let i = 0; i < gPasswordLength; i++) {

    // each iteration call userChoices and select random character
    // use math.random() multiplier is userChoices.length
      let index = Math.floor(Math.random() * (masterList.length - 1));
    // push random character to a password
      passwordText += masterList[index];
  };

};

const checkValue = (promptStr) => {
  let i = 0;
  while (i < 1) {
      let answer = window.prompt(`Would you like to include ${promptStr} in your password? Enter 'Y' for YES and 'N' for NO`);
      if (answer.toLowerCase() === 'y') return true;
      else if (answer.toLowerCase() === 'n') return false;
      else alert('Invalid input.');
      i++;
  };
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
