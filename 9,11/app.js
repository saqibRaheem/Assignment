// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”


var city = prompt("Enter your city Name");
if (city === "karachi"){
    document.write("Wellcome to City of Light " + city + "<br><br>"); 
}
else{
  document.write("Wellcome to City " + city + "<br><br>");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am


var gender  = prompt("Enter your gender ");
if (gender === "mail"){
    document.write("  Good Morning Sir. "  + "<br><br>" ); 
}
else if(gender === "femail"){
    document.write("Good Morning Ma'am "  + "<br><br>")

}

else{
  document.write("wrong gender select "  + "<br><br>");
}



// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:


var signal = prompt("Enter your signal")
if (signal === "red"){
    document.write("MUST STOP "  + "<br><br>" );
    
}
else if ( signal === "green"){
    document.write("MOVE NOW! "  + "<br><br>" );
}
else if ( signal === "yellow"){
    document.write("READY TP MOVE! "  + "<br><br>" );
    }


    // 4. Write a program to take input remaining fuel in car (in 
    //     litres) from user. If the current fuel is less than 0.25litres, 
    //     show the message “Please refill the fuel in your car”


    var fuel = prompt("Enter your fuel")
    if( fuel< 0.25){
        document.write("Please refill the fuel in your car "  +  fuel + "<br><br>")
    }
else{
    document.write("The fuel is alredy your car! "  + "<br><br>");
}


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.



 var a = 4;
if (++a === 5){
alert("given condition for variable a is true"); 
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
}



// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:



var sub1= parseInt(prompt("Enter 1st sub mark:"));
var sub2= parseInt(prompt("Enter 2nd sub mark:"));
var sub3= parseInt(prompt("Enter 3rd sub mark:"));
 var total = 300;
 document.write("Total  mark  is " + total +"<br>")
 var totalMark =  sub1+sub2+sub3  
 document.write("<br /> <br />"+"The total obtained mark is " + totalMark + "<br>")
 var per = (totalMark/300)*100
 document.write( "The percentage is " + per + "%"+ "<br> <br> " )
 if (per>79 || per<100){
     document.write("Congrats! you got first possion and Grade A" + "<br> <br> ")
 }
else if (per>59 || per<79 ){
    document.write("Congrats! you got 2nd possition and Grade B " + "<br> <br> ")
}
else if (per>49 || per<69 ){
    document.write("Congrats! you got 3rd possition and Grade C " + "<br> <br> ")
}
else{
    document.write("FAIL! keep it up" + "<br> <br> ")
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var num = 5;
var scretNum= parseInt(prompt("Enter your desire  number"))
if( scretNum === num ){
    document.write("BINGO ! CORRECT ANSWERE " +  + "<br><br>")
}
else if( scretNum === (num+1)){
    document.write("CLOSE ENOUGH TO CORRECT ANSWERE ")
}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var chk= prompt("Enter the value")
if(chk/2 === 0 ){

    document.write("its EVEN NUMBER ")
}
else{
    document.write("THE ODD NUMBER  " +"<br><br>" )
}



// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature  = prompt("Enter your temperature ");
if (temperature > 40){
    document.write("It is too hot outside."  + "<br><br>" ); 
}
else if(temperature > 30 ){
    document.write("The Weather today is Normal. "  + "<br><br>")}
else if(temperature > 20 ){
    document.write("Today’s Weather is cool. "  + "<br><br>")}
else if(temperature > 10 ){
    document.write("OMG! Today’s weather is so Cool. "  + "<br><br>")

}

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


var num1 = parseFloat (prompt("Enter your 1st  number"))
var num2 =  parseFloat(prompt("Enter your 2nd number"))
var operator =  prompt('Enter operator ( either +, -, * or /  ): ');
let result;
if(operator == '+' ){
    document.write( "ANSWERE IS " + num1 + num2  + "<br><br>")
}
else if  (operator == '-') {
    document.write( "ANSWERE IS " + num1 - num2  + "<br><br>")}
else if  (operator == '*') {
    document.write(  "ANSWERE IS " + num1 * num2  + "<br><br>")}
else if  (operator == '/') {
    document.write( "ANSWERE IS " + num1 / num2 + "<br><br>")
}
