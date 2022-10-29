// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var sum1 = 3;
var sum2 = 4;
var result= (sum1 + sum2)
document.write("Sum of 3 and 4 is = "  +  result )

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var sub1 = 3;
var sub2 = 4;
var result= (sub1 - sub2) 
document.write("  <br><br> Sub of 3 and 4 is = " + result)

var mul1 = 3;
var mul2 = 4;
var result= (mul1 * mul2) 
document.write("  <br><br> Sub of 3 and 4 is = " + result)

var div1 = 3;
var div2 = 4;
var result= (div1 / div2) 
document.write("  <br><br> Sub of 3 and 4 is = " + result)

var mod1 = 3;
var mod2 = 4;
var result= (mod1 % mod2) 
document.write("  <br><br> Sub of 3 and 4 is = " + result)


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// storeticket price in a variable & calculate the cost of buying 5
// ticketsto a movie

var ticket= 600 
var ticket1 = 5
var mul=(ticket * ticket1)
document.write("<br><br> Total cost to buy 5 tickets to a movie is " + mul + "PKR <br/><br/><br/>")

// 5. Write a script to display multiplication table of any
// number in your browser.

var i;
var num=prompt("enter a number of table");
// var reult= i * num;
for(i = 1; i <=10; i++ ){
   
    var result=(num+"*"+i+"="+(i*num)+"<br/>")
    
    document.write(result );
}

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var total= 550
var obtained= 400
var percentage= (obtained / total * 100)
document.write(" <br> <br><br> Total marks is: 550 <br> obtained marks is: 400 <br> percentage is: " + percentage) 

// 11. Age Calculator

var current = 2021
var birthday = 1998
var age =(current - 1998)
document.write(" <br><br>Current Year: 2021 <br> Birth Year 1998 : <br> Your Age is : " + age+"<br/><br/><br/>")



// 3. Do the following using JS Mathematic Expressions

var kami;
document.write("show the value of varriable is :"+kami + "<br/><br/><br/>")
kami=2;
document.write("initial value is :" + kami +"<br/><br/><br/>");
kami++
document.write("value after increament is :"+kami +"<br/><br/><br/>")

var ahmer =kami+7;
document.write("ADD is :" + (ahmer + "<br>" ))
ahmer--
document.write("Value after decrement is:" + ahmer + "<br>")
var name1=ahmer/3
document.write("After dividing value is: " +name1+"<br/>")

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.

var Temperature= 42;
var  F = ((Temperature-32) * 5 / 9);
document.write( "Convert in to  Fahrenheit " + F +"<br><br>")

var  Fahrenheit= 39
var C = (Fahrenheit *9/5)+32
document.write("Convert into celius " + C + "<br><br>")

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


var item1 = 50
document.write("Price of item 1 is " + item1 + "<br>")
var quantity1= 2
document.write("Quantity of item 1 is : " + quantity1 +"<br>" )
var cost1 = item1*quantity1
document.write("cost of item 1 with 2 quantity is :" + cost1+ "ruppee" +"<br/><br/>")
var item2 =100
document.write("Price of item 2 is : " + item2 +"<br>")
var quantity2= 3
document.write("Quantity of item 2 is : " + quantity2 + "<br>")
var cost2=quantity2*item2
document.write("Cost of item 2 with 3 quantity is : " + cost2+ "ruppee" +"<br>")
var shipping = 1000
document.write("Shipping charges is : " + shipping  +"<br><br>")
var total=cost1 + cost2
document.write("Total Cost of your order is : " + total +" <br><br>")


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.

var usdollars = prompt("Enter the Value us dollars", " your here")
var PakistaniRupee=usdollars * 104.80
document.write("Convert to Us Dollars in Pakistani Rupee is :" + PakistaniRupee + "<br><br>")

var saudirayal= prompt("Enter the Value Saudirayal" , "your here")
var Pakistani=saudirayal * 28
document.write("Convert to Saudi Rayal in Pakistani Rupee is : " + Pakistani + "<br><br>")



// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


var num= 2
document.write("The number selected is"+num+"<br/><br/>")
document.write("Add  5 is : " + (num+5) +"<br>")
document.write("Multipy by 10 : " + (num*10) + "<br>")
document.write("divide by 2 : " + (num/2) +"<br> <br><br>")


//12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

var radius = 20
document.write("Radius of circle is :" + radius + "<br>")
var Circumference= 2*3.142*radius
document.write("The Circumference is  :" + Circumference + "<br>")
var area = 3.142 * radius*radius
document.write("Area of circle is " + area + " <br><br>")


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of
// your life.

var sanack = "chips";
document.write("Faviourt sanack " + sanack + "<br> <br>");
var age = 22;
document.write("Current Age is " + age + "<br><br>") ;
var maximumAge = 65;
document.write("Estimade Maximum Age is " + maximumAge + "<br><br>");
var quantitySnacks= 3;
document.write("Amount of sanacks is " + quantitySnacks + "<br><br>");
var totalSnacks = quantitySnacks*maximumAge*365;
document.write("Total snacks in my life :"+totalSnacks)

