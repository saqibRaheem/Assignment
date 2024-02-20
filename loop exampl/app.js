// ***********  PRINT NUMBER WITH EVEN ODD ******************

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//       console.log(i + ' (Even)');
//     } else {
//       console.log(i + ' (Odd)');
//     }
//   }

// ***********  PRINT NUMBER PATTREN ******************
// for (i = 1; i <= 10; i++) {
//   var line = " ";
//   for (j = 1; j <= i; j++) {
//     line += j + " ";
//   }
//   console.log(line);
// }
// ***********  PRINT STAR PATTREN ******************
// for (let i = 1; i <= 20; i++) {
//   let stars = '';
//   for (let j = 1; j <= i; j++) {
//     stars += '*';
//   }
//   console.log(stars);
// }

// // ***********  PRINT STAR PATTREN DIFFERENT SHAPE******************
// var rows = 23;

// if (rows % 2 === 0) {
  //   rows++; // Ensure an odd number of rows for a symmetrical diamond
// }

// const midpoint = Math.floor(rows / 2);

// for (let i = 1; i <= rows; i++) {
  //   let stars = "";
//   const spaces = Math.abs(midpoint - i);
  
//   // Add leading spaces
//   for (let j = 0; j < spaces; j++) {
  //     stars += " ";
  //   }
  
//   // Add stars
//   for (let k = 0; k < rows - 2 * spaces; k++) {
  //     stars += "*";
  //   }
  
  //   console.log(stars);
// }

// for (i = 1; i <= 20; i += 2) {
  //   console.log(i);
// }



// // *********** Finding element occurance in array******************

// var arrys = [2,0,1,1,1,1,1,9,7,5,4,34,1,1,1,2,2,3,3,4,2,3,3,4,0,2,2,2,]
// var change = {}
// for(const i of arrys){
//       if(change[i]){
//           change[i] += 1 
//         }else{
//       change[i] = 1
//     }
// }
// console.log(change);


  // // *********** Remove Duplicate Items Of Arrays ******************
  
  // var arr = [0,1,2,3,4,1,2,0]
  // const arr2 = []
  // // console.log( ">>>>  1", arr2);
  // // console.log(arr2.indexOf(2));
  
  // for(i=0 ; i<arr.length;i++){
  //   console.log(arr[i]);
  //   if(arr2.indexOf(arr[i]) == -1){
  //     arr2.push(arr[i])
  //     // console.log(">>>>>  2",arr2);
  //   }
  // }
  // console.log(">>>>> 3",arr2);

  // // *********** Remove Duplicate Items Of Arrays using filter method ******************
  
  //  const a = [1,2, 3, 4, 2, 1];

// const filt = a.filter((data, i) =>  data === i+1);

// console.log(filt);

// // *********** Find Character And Add  ******************

// var str = "A1B2C3"
// var newStr = "";
// for(i=0;i<str.length;i++){
// //  console.log(str[i]);  
//     const char = str.charAt(i);
//     console.log(char)
//     if (/[a-zA-Z]/.test(char)) {
//       // If the character is an alphabet, add it twice to the result
//       newStr += char + char;
//     } else {
  //       // If it's not an alphabet, add it as is
  //       newStr += char;
  //       // console.log(result)
  //     }
  // }
  
  //       console.log(newStr)

  // // *********** add , with each words and numbers  ******************
  
  
  
  // var num = "1234566754"
  // var nums = num.split()
  // let addNum = "";
  // console.log(nums.length);
  // for(i=0; i<nums.length ; i++){
    //   addNum += nums[i]+ ","
    // }
    // console.log(nums);
    
    // console.log("hello");
    
    // // *********** add , with each words and numbers  ******************



//     var num = [1,3,4,5,6,7,8,9,10,2]
 
//     var result =  num.filter((item, key)=> item > 6)
// console.log(result);


// var res2 = num.map((data)=> data = 6)
// console.log(res2);