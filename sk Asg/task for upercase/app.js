var text = prompt("enter your name")
// var result;
// for(i=0;i<text.length;i++){
//     if(i === 0){
//        result =  text.slice(i,i+1).toUpperCase()
//     }else if(i > 0 ){
//         result += text[i]
//     }
// }
// console.log(result);

// **** new logic **********
var firstLatter = text.slice(0,1).toUpperCase();
var getAll = text.slice(1).toLowerCase();
var concat = firstLatter + getAll
var result;
// console.log(concat);
for(i = 0; i<concat.length;i++){
    if(concat.slice(i,i+1) === " "){
        // console.log(concat);
        concat = concat.slice(0,i+1) + concat.slice(i+1,i+2).toUpperCase() + concat.slice(i+2).toLowerCase() 
        // result = concat.slice(0,1).toUpperCase() + concat.slice(1,i+1) + concat.slice(i+1,i+2).toUpperCase() + concat.slice(i+2).toLowerCase() 
        // result += concat.slice(i+1,i+2).toUpperCase() /
    }
}

console.log(concat);

// for (i=0;i<concat.length;i++){

// }