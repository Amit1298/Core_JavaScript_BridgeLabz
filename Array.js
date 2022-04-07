/*
const arr = [4,76,12,34,8,21];
arr.sort();
console.log("Array: ",arr);
console.log("arr length: ",arr.length);
arr.push("Apple");
arr.push(true);
console.log("Array: ",arr);
//arr.pop();
// arr.unshift("Start");
arr.sort();
arr.indexOf(2);
console.log("Array: ",arr);
*/

const arr = [4,76,12,34,8,21];
// arr.slice(4);

// console.log("Array: ",arr);
// arr.forEach((item,i,data)=>{
//     console.log(item,",",i,",",data);
// });
/*
for(let item in arr){
    console.log(arr[item], item);
}

for(let item in arr){
    let i = item;
    if(i>=3){
        console.log(arr[i]);
    }
    //console.log(arr[item], item);
}
*/

for(var item of arr){
    console.log(item);
}

"use strict";
a = 10;
console.log(a);