const firstName = require('./exportFile');
console.log(firstName.regex);
let fName = "Naincy";

if(firstName.regex.test(fName)){
    console.log("First name is : ", fName);
}else{
    console.log("Invalid Input");
}