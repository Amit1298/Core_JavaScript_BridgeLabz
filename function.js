/*
function fname(){
return "Amit";
}

const lastName =()=>{
return "Kumar";
}

const sum =(a,b)=>{
    return a+b;
}

const FirstName =(arg)=>{
    return arg + " Kumar";
}

const multi =(...rest)=>{
    console.log(typeof(rest));
    console.log(rest);
}

function myFunc(a,b,...arg){
    console.log("a",a, typeof a);
    console.log("b",b, typeof b );
    console.log("Many Args: ", arg , typeof arg);
}



console.log("Print name: "+ fname());
console.log("Print Lastname: "+ typeof(lastName()));
console.log("Sum of two number is : "+ sum(4,2));
console.log("Full name is : "+ FirstName("Amit "+ typeof(FirstName)));
console.log("Multiple of number is : "+ multi(2,5,2,2));
console.log(2,5,1,"One","Two");

(function(arg,arg2){
    console.log("Print : ",arg," My age is : ",arg2);
})("How are you",12);

function norFun(){
    let name = "bridgelabz";
    console.log(name);
}
*/

const car = {
    name: "Maruti",
    modal: "VXI",
    arr:[1,4,2,6,9],
    commitCar: {
        first: "I am car",
        second: "I am maruti"
    }
}
console.log(typeof car.arr);
console.log(car.commitCar.first);

 /* let user = {
 name: 'krishna',
 lastName: 'bhamare',
 locations: {
 first: 'banglore',
 second: 'mumbai'
 },
 arr: [1,2,3,4,5],
 method: function () {
 return this.name;
 }
 }; 
 console.log(user.method()); */
/* const user  = Object.create( {
name: 'krishna',
lastName: 'bhamare'

}); */

/* const user = new Object({name: 'krishna',
lastName: 'bhamare'});
console.log(user) */


/* const bird = {
  size: 'small',
};
const a = bird;
a.canFly = true;
console.log(a)  */


