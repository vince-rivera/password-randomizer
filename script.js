// Assignment code here\

//create an array for each type of character.
//var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
//"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
//"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Length of password prompt
const generatePassword = () => {
  const passwordLength = checkPasswordLength();
  console.log(`Password length: ${passwordLength}`);
  const charTypes = checkCharTypes();
  console.log("charTypes object. JSON objects may be too advanced at the moment but will be the fundamental way to work with real data in the future:")
  console.log(charTypes);

  return createPassword(passwordLength, charTypes); 
}


  const checkPasswordLength = () => {
    let i = 0
    while (i < 1) {
    let length = window.prompt("Please insert length of password (8 - 128 characters)");

    if (!isNaN(length) && length >= 8 && length <= 128) 
    return length;
    // if less than 8 or greater than 128 characters send alert
    else alert('Password length must be between 8 and 128')
  }
}
// confirm for 4 types of characters, lowercase, uppercase, numeric, special characters.
const checkCharTypes = () => {
  let i = 0
  while (i < 1) {
  let isUpper = checkValue("lower case letters");
  let isLower = checkValue("upper case letters");
  let isNumber = checkValue("numbers");
  let isSpecial = checkValue("special characters");

  // if confirm = true then concat userChoices = userChoices.concat(another array)
  if (isUpper || isLower || isNumber || isSpecial) return{ isUpper: isUpper, isLower: isLower, isNumber: isNumber, isSpecial: isSpecial };
  else alert('At least one character type must be selected');
  }
}


const createPassword = (passwordLength, charTypes) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = lower.toUpperCase();
  const nums = "0123456789";
  const specials = "~!@#$%^&*()";
  let masterList = "";
  let password = "";

  if (charTypes.isLower) masterList = lower;
  if (charTypes.isUpper) masterList += upper;
  if (charTypes.isNumber) masterList += nums;
  if (charTypes.isSpecial) masterList += specials;

// for loop over the array i = 0; i < passwordlength; i++)
  for (let i = 0; i < passwordLength; i++) {

    // each iteration call userChoices and select random character
    // use math.random() multiplier is userChoices.length
      let index = Math.floor(Math.random() * (masterList.length - 1));
    // push random character to a password
      password += masterList[index];
  }

  console.log(password);
  return password;

}

const checkValue = (promptStr) => {
  let i = 0;
  while (i < 1) {
      let answer = window.prompt(`Would you like to include ${promptStr} in your password? Enter 'Y' for YES and 'N' for NO`);
      if (answer.toLowerCase() === 'y') return true;
      else if (answer.toLowerCase() === 'n') return false;
      else alert('Invalid input.');
  }
}


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//
