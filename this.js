

// console.log(this);

// function sum(){
//     var add = 2+2;
//     console.log("Sum of two number is: ",add);
//     console.log(this);
// }
// sum();

function sayMyNAme(name){
    console.log("My name is : ",name);
}
// sayMyNAme("Amit");

//implicit binding
const person = {
    name: "Amit",
    sayMyName: function (){
        console.log("My name is: ", this.name);
    }
};
// person.sayMyName();


//Explicit binding
function sayMyName(){
    console.log("My name is: ",this.name);
}
// sayMyName.call(person);


//new binding
function sayMyName(name){
    this.name = name;
}
const p1 = new sayMyName("Amit");
// console.log("My name is : ", p1.name);


// default binding
globalThis.name = "Krishna";
sayMyName();