var num = [12,32,2,56,4,10];
document.write(" simple ====>" + num);

num.sort(function(a, b){return a - b})
document.write("in sort  ====>" + num);
// new work
var a = 10;
var b = 20;

let temp;
temp = a;
a = b;
b = temp;

console.log("==>" +a);
console.log("==>" +b);


// example
   var num = 123456789
   console.log(num);
   var split = num.toString().split(".")
   var join = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
   console.log(split);
   console.log(join);
//    join.join(".")
   console.log("final result " + join);



const numb=213231221;

function separator(numb) {
    var str = numb.toString().split(".");
    console.log(str)
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

console.log(separator(numb))



var arr = [5,4,0,6,4,5,6,2,3,] 

var avg = 0;
var avg2 = 0;
 for (var i = 0; i < arr.length; i++){
     avg += arr[i]
    }
    avg2 = avg / arr.length
    console.log(avg);
    console.log(avg2);

function Sort(){
    var arr2 = [];
    var sort = arr.filter((data,i)=> data != i)
  for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < arr.length; j++){
    console.log(arr[i],arr[j]);
    arr2 = arr[i] != arr[j]
      }
    }
    
    console.log('=1=>', arr2);
  return sort
}
// Sort()
 document.write('sort====>>',Sort()) 