// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
//  browser:

var saq=("result");
var saq1=("The value of a is: 10");
document.write(saq +"<br>"+saq1); 


// required arithmetic to display the following result in your


var s=("...........................");
document.write ( "<br>"+ s);


var a1=("The value of a++ is : 11");
var a2=("Now the value of a is: 11");
document.write("<br><br>"+a1+"<br>"+a2);


var a1=("The value of ++a is : 11");
var a2=("Now the value of a is: 12");
document.write("<br><br>"+a1+"<br>"+a2);

var a1=("The value of --a is : 11");
var a2=("Now the value of a is: 11");
document.write("<br><br>"+a1+"<br>"+a2);

var a1=("The value of a-- is : 11");
var a2=("Now the value of a is: 10");
document.write("<br><br>"+a1+"<br>"+a2);

// 2. What will be the output in variables a, b & result after
// execution of the following script:

var a=2,b=1;
var results=--a - --b + ++b + b--;
document.write("<br><br>"+ "a is=2" +"<br>"+ "b is=1"+"<br>"+"results is ="+results );


// 3. Write a program that takes input a name from user &
// greet the user.

var name1 = prompt("Enter the name ","your here")
alert(name1)

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


var num=prompt("enter a number of table");
var table = 5;
// var reult= i * num;
if(num === ""){
    for(var i=1; i<=10 ; i++){
        var result=(table+"*" +i+"="+(i*table)+"<br/>")
        document.write(result)
    }
}else{
for(var i = 1; i <=10; i++ ){
   
    var result=(num+"*"+i+"="+(i*num)+"<br/>")
    
    document.write(result + "<br><br>")
}

}
// var a= prompt("Enter the value a " , "your here")
// var b= prompt("Enter the value b " , "your here")
// var result= a * b
// document.write(" <br><br>The value of : " + result)

var sub1= prompt("Enter 1st sub name:")
//  document.write("<br>" + sub1 )
var sub2= prompt("Enter 2nd sub name:")
// document.write("<br>" + sub2)
var sub3= prompt("Enter 3rd sub name:")
// document.write("<br>" + sub3)
// var val1=100;
// var val2=100;
// var val3=100;

// var total = 300

// var sub1mark = parseInt(prompt("Enter 1st sub mark") )

// document.write(sub1 +  + sub1mark + "<br>")

// var sub2mark = parseInt(prompt("Enter 2nd sub mark")) 
// document.write(sub2 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + sub2mark + "<br>")
// var sub3mark = parseInt(prompt("Enter 3rd sub mark") )
// document.write(sub3 +  + sub3mark + "<br>")


// var result = ((   sub1mark+sub2mark+sub3mark)/total)*100;
// document.write("The percentage is : " , result)