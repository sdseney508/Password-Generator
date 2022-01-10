

//generate password function.  Looks at the Booeleans and then generates a random password
//using only the selected characters.
function generatePassword() {
  //variables
  let chartypearray = [];
  let passlength = 8;
  let specarray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"];
  let lowerc = "abcdefghijklmnopqrstuvwxyz";
  let upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";  //resetting a null password.
  let counters = 0;

  //lets the user input how long they need the password
  //to be.  It will reject requests for passwords shorter than 8 characters and
  //will reject non-integer responses as well.
  passlength = window.prompt("Please select a password length of between 8 and 128 characters.", 8);
  passlength = parseFloat(passlength);
  
  let passlength2 = Math.round(passlength);

  if ((passlength2 < 8 || passlength2 > 128) ||
      (passlength!==passlength2)
      ){
    //reset password length to minimum and then prompt for a different input
    window.alert("Your password must be an integer between 8 and 128 characters.  Please select a proper password length.");
    return;
  }

  //create an array for what types of special characters to use.
  chartypearray[0] = window.confirm("Do you want to include Special Characters?");
  chartypearray[1] = window.confirm("Do you want to include Numbers?");
  chartypearray[2] = window.confirm("Do you want to include Upper Case Characters?");
  chartypearray[3] = window.confirm("Do you want to include Lower Case Characters?");

  //check to ensure at least one character type was selected.
  for (i = 0; i < chartypearray.length; i++){

    if (chartypearray[i] == false){
      counters++;

      if (i === chartypearray.length - 1){
        if (counters === 4){
          password = "Please Try Again."
          window.alert("You must select at least one character type for your password.");
          return password;
        }
      }
    }
  }

  for (let i = 0; i < passlength; i++){

    let chartypecheck = Math.floor(Math.random()*chartypearray.length);

    if (chartypearray[chartypecheck]){
      if (chartypecheck == 0){
        let charnumb = Math.floor(Math.random()*specarray.length);
        pchar = specarray[charnumb];
      }
      else if (chartypecheck == 1){
        pchar = Math.floor(Math.random()*10);
      }
      else if (chartypecheck == 2){
        pchar = lowerc[Math.floor(Math.random()*26)];
      }
      else if (chartypecheck == 3){
        pchar = upperc[Math.floor(Math.random()*26)];
      }      
      password += pchar;
    }

    else {
      i--;
    }

  }
  return password;
}

// Write password to the #password input
function writePassword() {
  passwordtext = document.querySelector("#password");
  //removes the "undefined" if the function kicks an error.
  passwordtext.value = generatePassword();
}

//copy password to be pasted later
function copyPassword(){
  /* Get the text field */
  var copyText = passwordtext.value;

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);
}

// Add event listener to generate button to exectue the password generation
//function when the user clicks on the generate button on the website.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var copypassBtn = document.querySelector("#copypass");
copypassBtn.addEventListener("click", copyPassword);