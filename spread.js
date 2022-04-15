/*
//array is non-primitive type(reference type)
let a = [10,20,30];
let b = [5,...a,40,60];        //b = [10,20,30]
let c= [...a,...b];
a[0]=50;
//b[0]=80;
console.log(a);
console.log(b);
console.log(c);
*/

//object is also a non-primitive type
let a = {
    fName:"Amit",
    lName:"Kumar"
}
// let b = a;
let b = {...a};
a.fName="Krishna";
console.log(a);
console.log(b);