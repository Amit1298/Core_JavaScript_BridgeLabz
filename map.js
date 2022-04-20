// Map

/*
const obj = new Map();

//console.log(typeof obj);
obj.set('name', 'krishna');                   //set is method which is used to enter data
obj.set('location', 'banglore');
obj.set('designation', 'developer');
//console.log(obj.get('name'))                    //get is function of showing data
const interator = obj.keys();                       //store the iterator variable into keys
console.log(interator.next().value);                 //next method is show the key 
console.log(interator.next().value); 
// obj.delete('designation');                      // delete method is deleted the existed key value

// console.log(obj.has('designation'))             // has method is show the present or not it gives the boolean output
//console.log(obj.size)                              // size method is gives the size of array

*/

var arr = [10,20,30,40,50];
var newArr = arr.map(function(value){
    value++;
   return value;
});

 console.log(arr);
 console.log(newArr);


var arr1 = [
    {price:"100", product:"Mobile"},
    {price:"200", product:"Lappy"},
    {price:"300", product:"MIC"},
    {price:"400", product:"PC"},
]

var newArr1 = arr1.map(function(value){
     return value.price;
}); 

console.log(arr1);
console.log(newArr1);