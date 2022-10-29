// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
 

var first = prompt("enter first name");
var last = prompt("enter last name");

var full = first + " "+last;
document.write(full)
document.write("<br>")
document.write("<br>")
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var fav = prompt("enter your mobile name");
var length1 = fav.length
    document.write("My Favorit phone is " +" "+ fav +"<br>");
    document.write("length of string is :" + length1)

    
//     3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
document.write("<br>")
document.write("<br>")


var city = "pakistani";
var find1 = city.indexOf("n")
document.write("String :" + city +"<br>");
document.write("Index of 'n': " + find1);

document.write("<br>")
document.write("<br>")
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var a = "hellow world";
var fin = a.lastIndexOf("l");

document.write("String :" + a +"<br>");
document.write("Index of 'n': " + fin);


document.write("<br>")
document.write("<br>")
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var city = "pakistani";
var find1 = city[3]
document.write("String :" + city +"<br>");
document.write("character at Index 3 : " + find1);


document.write("<br>")
document.write("<br>")
// 6. Repeat Q1 using string concat() method.

var first = prompt("enter first name");
var last = prompt("enter last name");
var final = first.concat(last);

document.write(final)

document.write("<br>")
document.write("<br>")
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


var city = "hyderabad";
var change = city.replace("hyder","islam");
document.write("city :" + city + "<br>" + "After replacement :" + change);


document.write("<br>")
document.write("<br>")
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = 'Ali and Sami are best friends. They play cricket and football together.';
var repl = message.replaceAll("and","&");
document.write(repl);


document.write("<br>")
document.write("<br>")
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var num  =  444;
document.write("Value :" + num + "<br>" + "Type :" + typeof(num.toString()));

document.write("<br>")
document.write("<br>")

var num  =  "444";
document.write("Value :" + num + "<br>" + "Type :" + typeof(Number()));



document.write("<br>")
document.write("<br>")
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.



var inp = prompt("Enter Name");
var chn = inp.toUpperCase();
document.write(chn);


document.write("<br>")
document.write("<br>")
// 11. Write a program that takes user input. Convert and
// show the input in title case.

var first = prompt("Enter your City");
var second = first.slice(0,1);
var third = first.slice(1);
var fourth = second.toUpperCase();
var fifth = third.toLowerCase();
var last = fourth.concat(fifth);
 
document.write(last);



document.write("<br>")
document.write("<br>")

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


 var num = 35.36 ;
var num2 = typeOf(num.toString())
var rem1 = num2.replace("s" , "a");
document.write("NUMBER :" + num +"<br>" + "Result " + rem1);

