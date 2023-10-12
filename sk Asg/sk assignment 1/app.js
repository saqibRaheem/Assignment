// QUESTION NO 1
// Write a JavaScript conditional statement to sort three numbers. Display an
// alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
var x = 0
var y = -1
var z = 4 

if (x>y && x>z){
    if(y>x){
        alert(x + " " + y + " " + z )
    }else{
        alert(x + " " + z + " " + y)
    }

}
else if(y>x && y>z){
    if(x>z){
        alert(y + " " + x + " " + z)
    }else{
        alert(y + " " + z +" " + x )
    }
}

else if(z>x && z>y){
    if(x>y){
        alert(z + " " + x + " " + y)
    }else{
        alert(z + " " + y +" " + x )
    }
}

// QUESTION NO 2
// Write a JavaScript conditional statement to find the largest of five
// numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
var a = -5
var b = -2
var c = -6
var d = 0
var e = -1
if (a>b && a>c && a>d && a>e)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>e)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>e)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>e)
{
    console.log(d);
}
else
{
    console.log(e);
}

// QUESTION NO 3
// Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it
// checks if the current number is odd or even, and displays a message on
// the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

//   QUESTION NO 4
// Write a JavaScript program that iterates integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for multiples of five
// print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

//   QUESTION NO 5
// write a javascript program to find and print the first 5 happy numbers
function isHappyNumber(number) {
    let sum = 0;
    let num = number;
  
    while (num !== 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
  
    if (sum === 1) {
      return true;
    } else if (sum === 4) {
      return false;
    } else {
      return isHappyNumber(sum);
    }
  }
  
  function getHappyNumbers(count) {
    const happyNumbers = [];
    let number = 1;
  
    while (happyNumbers.length < count) {
      if (isHappyNumber(number)) {
        happyNumbers.push(number);
      }
      number++;
    }
  
    return happyNumbers;
  }
  
  const happyNumbers = getHappyNumbers(5);
  console.log("First 5 happy numbers:");
  console.log(happyNumbers);
  
// QUESTION NO 6
//write a javascript program to construct the following pattern, using a
// nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

  const numRows = 5;

for (let i = 1; i <= numRows; i++) {
  let row = '';

  for (let j = 1; j <= i; j++) {
    row += '* ';
  }

  console.log(row);
}

// QUESTION NO 7
// Write a JavaScript program to sum 3 and 5 multiples under 1000,
function sumMultiples() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  const result = sumMultiples();
  console.log(result);


//   QUESTION NO 8

function happy_number(num) 
{
    var m, n ;
    var c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}
 
var cnt = 5;
var num = 1;
var f5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
f5 = f5+(num + ", ") ;

    num++ ;
}
console.log('First 5 happy numbers are : '+f5);

// ***************************   //

var tab = prompt("Enter a number to jenerate tabel")

for (var i = 2 ; i <= tab ; i++){
  for(var j = 1; j <=10 ; j++){
    console.log(i + " * " + j + " = " + (i*j));
  }
  // if(i !== tab){

  //   console.log(i=1 + " * " + i + " = " + (i*i) ) ;
  //   // console.log(tab + " * " + i + " = " + (i*tab) ) ;
  // }else if(i == tab){
  //   // console.log(i=1 + " * " + i + " = " + (i*i) ) ;
  //   console.log(tab + " * " + i + " = " + (i*tab) ) ;

  // }
}

// ////////////////////////////

  // var number = parseInt(prompt("Enter number " + (i + 1) + ":"));

  // console .log(number); // Add an empty line between tables

// for (var i = 0; i < number; i++) {

  // for (var j = 2; j <= number; j++) {
  //   var row = "";
  //   for (var k = 1; k <= 10; k++) {
  //     row += (j * k) + "# ";
  //   }
  //   console.log(" " + j + " |" + row);
  // }
  
// }
