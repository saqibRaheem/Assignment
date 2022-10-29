// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
var list1 = [
                [0,1,2,3],
                [1,0,1,2],
                [2,1,0,1]
            ];

for(i =0; i < list1.length; i++) {
    for(j =0; j < list1[i].length; j++) { 
        document.write(list1[i][j] + " &nbsp;&nbsp;");
    }
    document.write("<br />");
}

// 3. Write a program to print numeric counting from 1 to 10.


var list = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9] ;
for(i=0; i < 10; i++) {
    document.write(list[i]);
    document.write("<br />");
}


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.


document.write("<br />");
var table = prompt("Enter Table");
var range = 10;

for(i=1; i<=range; i++){
    document.write(table +"*"+ i +"="+  table*i);
    document.write("<br />");
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ['apple','banana','mango','orange','strawbery'];
for(i=0; i<fruits.length; i++ ){
document.write(fruits[i]+"<br>")
}

    var fruits = ['apple','banana','mango','orange','strawbery'];
for(i=0; i<fruits.length; i++ ){
    document.write("Eliments of index " + i +" "+"is" +" "+ fruits[i] + "<br>")
}
document.write("<br>")

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<b> COUNTING:</b>" +"<br>")

for (i=1; i<=15;i++){
    document.write(" "+ i +" ")
}

document.write("<br>")

document.write("<b> REVERSE COUNTING:</b>" +"<br>")

for (i=10; i>=1;i--){
    document.write(" "+ i +" ")
}

document.write("<br>")

document.write("<b> EVEN:</b>" +"<br>")

for (i=0; i<=20; i++){
    if(i% 2==0){
    document.write(" "+ i +" ")
}
}

document.write("<br>")

document.write("<b> ODD:</b>" +"<br>")

for (i=0; i<=19; i++){
    if(i% 2 !==0){
    document.write(" "+ i +" ")
}
}

document.write("<br>")

document.write("<b> EVEN:</b>" +"<br>")

for (i=0; i<=20; i++){
    if(i% 2==0){
    document.write(" "+ i +"k" + " ")
}
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.


document.write("<br>")
var bakery = ['cake','apple','cookie','chips','patties'];
var pro = prompt("enter your items..")
for(i=0; i<bakery.length; i++){
    if(i === pro){
        document.write(pro + " is avalable at index " + i +" "+ "in your bakery")

    }

}



// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

document.write("<br>")
document.write("<b> Find Largest Number:</b>" +"<br>")
var arr =[24,53,78,91,21];
var large = 0;
 
for(i=0; i<=large;i++){
    if(arr[i]>large){
        var large=arr[i]
    }
}document.write(large)



// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
document.write("<br>")
document.write("<b> Find Smallest Number:</b>" +"<br>")
var arr =[24,53,78,91,21];
var smallest = arr[0];
 
for(i=1; i<arr.length;i++){
    if(arr[i]<smallest){
        var smallest=arr[i]
    }
}document.write(smallest)




// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

document.write("<br>")
document.write("<b> Multiple Range:</b>" +"<br>")

var range = 5;
for(i=5;i<=100;i=i+5){
   

    document.write(" " + i + " ")
}









