
// const {user,show} = require('./Regex');
// const { firstName } = require('./Regex');
// const user = require('./Regex');
// console.log(user);

//  show();


// UC1-valid first name


// const {firstName} = require('./Regex'); 
//const firstName = new RegExp (/^([A-Z]){1}(a-z){2,}$/);
const { fName } = require('./Regex');
const FirstName = require('./Regex');
console.log(FirstName);

if (FirstName.regex1(fName)) {
    console.log("First name is : ", fName);
} else{
    console.log(" Invalid first name ");
}

/*
module.exports = {
user,
}
module.exports = {
user,
user1
}
const {user, user1 }= require ('./Regex');
console.log(user);
user1();
*/