// 6. This if/else statement does not work. Try to fix it:



// var hour = prompt("Enter your hour")


// if (hour < 12) {
// document.write("Good Day" +"<br>")



// }
// else
//  {document.write("Good evening" +"<br>") 
// }

var hour = prompt("Enter the Hour");
if (hour < 18) {
document.write("Good Day" + "<br><br> ")}
else{
document.write("Good Evenig" +"<br><br>");
}


// . Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

var num  = prompt("Enter the number")

if(num<0){
  document.write("The value is negative" +"<br><br>")

}

else{
  document.write("The value is positive " +"<br><br>")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

var password = "1234567";
var userPassward = prompt("Enter your passward");

if (userPassward===password){
  document.write("Correct! The password you entered matches the original password" +"<br><br>")
}
else{
  document.write("Incorrect password" +"<br><br>")
}



// =======


var time = prompt("Insert Time");

if ( time > 12){
  document.write(time-12 + ":00 Am");
}
else{
  document.write(time + ":00 Pm" );

}

// 4. Write a program that takes a character (i.e. string of 
//   length 1) and returns true if it is a vowel, false otherwise

var kam = prompt("Enter the Alphabate");
if(kam === 'a'||'e'||'i'||'o'||'u' ){
  document.write("This statement is True" );
}
else{
  document.write("This Statement is False ");
}