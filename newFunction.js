/* Hosting
myFun(26);

function myFun(arg){
    console.log("Print Function: ",arg);
}


console.log("Print name: ",fname);          // undefined
var fname = "Amit";
console.log("Print name: ",fname);          // code run line by line

//fun();       //=> code run line by line
var fun = function print(){
    console.log("Print Function");
}
fun();
console.log(typeof fun);                    


var fun = "bridgelabz";
console.log("Print:- ", fun);

//arrowFun();                          // it work line by line
const arrowFun = () => {
    console.log("Print arrow Function");
}
arrowFun();

normalFun();
function normalFun(){
    console.log("Normal Function");
}
normalFun();

//IIFE
(()=>{
    console.log("Print IIFE function");
})();

(function(){
    console.log("Print without Arrow");
})();

((age,ageWord)=>{
    console.log("Print Age: ",age,ageWord);
})(25,"Two Five");
*/

//Object
/*
const user = Object.create({
    firstName: "Amit",
    lastName: "Kumar"
});
console.log(user.firstName);
console.log(user.lastName);

let user1 = {
    fName : "Krishna",
    lName : "Amit"
}
console.log(user1);

let user3 = {
    fname: "Amit",
    lname: "Krishna"
}
user3.a = "Kumar";
console.log(user3);

const user4 = new Object({
    city:"Agra",
    pincode: 282001
});
console.log(user4);

var user5 = {
    fname:"Amit",
    lname: "Kumar",
    location: {
        first:"Agra",
        second: "Hathras"
    },
    arr:[4,7,1,3,9],
    method:()=>{
        console.log("Function inside function");
        return this.fName;
    }
}
console.log(user5);
console.log(user5.location);
console.log(user5.method());
*/

// Example
/*
const bird = {
    size: 'Small',
};
console.log(bird);
console.log(typeof bird);
console.log(bird.canFly);
bird.canFly = true;
console.log(bird.canFly);
console.log(bird);

const a = bird;
console.log(typeof a,a);
*/

function user(fname,lname){
     this.fname = fname;
     this.lname = lname;
}
const user1 = new user("Amit","Kumar");               //object created
console.log(user1);
console.log(typeof user);
console.log(typeof user1);
