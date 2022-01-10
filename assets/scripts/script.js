//create all required variables

//create an array storing which type of characters to use.  the results of this array
//will be used in the password generation function.  array is ete up as follows:
//[special characters boolean, numbers boolean, upper case boolean, lower case boolean]
var chartypearray = [];
var password;
var passwordtext; 
var passlength = 8;
var specarray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"];
var lowerc = "abcdefghijklmnopqrstuvwxyz";
var upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var generateBtn = document.querySelector("#generate");


//function password length lets the user input how long they need the password
//to be.  It will reject requests for passwords shorter than 8 characters and
//will reject / limit the password length to 128 characters.
function passLength(){
  passlength = window.prompt("Please select a password length of between 8 and 128 characters.", 8);
  passlength = parseFloat(passlength);
//make sure they entered an integer.
  let passlength2 = Math.round(passlength);

  if ((passlength2 < 8 || passlength2 > 128) ||
      (passlength!==passlength2)
      ){
    //reset password length to minimum and then prompt for a different input
    window.alert("Your password must be an integer between 8 and 128 characters.  Please select a proper password length.");
    passLength();
  }
  return passlength;
}

//asks what type of characters to include in the passwordand stores the response in the
//specialcharacter variable.
function specialChars() {
  let tc = 0;
  chartypearray[0] = window.confirm("Do you want to include Special Characters?");
  chartypearray[1] = window.confirm("Do you want to include Numbers?");
  chartypearray[2] = window.confirm("Do you want to include Upper Case Characters?");
  chartypearray[3] = window.confirm("Do you want to include Lower Case Characters?");
  for (let i = 0; i < chartypearray.length; i++){
    if (chartypearray[i]="true"){
      tc++
    }
  }
  if (tc==0){
    alert("Please select at least one character type")
    specialChars;
  }
  console.log("The character type array is: " + chartypearray);
 
  return chartypearray;
}
//generate password function.  Looks at the Booeleans and then generates a random password
//using only the selected characters.
function generatePassword() {
  password = "";  //resetting a null password.
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
  passLength();
  specialChars();
  passwordtext = document.querySelector("#password");
  passwordtext.value = generatePassword();
}

// Add event listener to generate button to exectue the password generation
//function when the user clicks on the generate button on the website.
generateBtn.addEventListener("click", writePassword);