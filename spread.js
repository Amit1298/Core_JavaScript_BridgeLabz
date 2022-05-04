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
/*
let a = {
    fName:"Amit",
    lName:"Kumar"
}
// let b = a;
let b = {...a};
a.fName="Krishna";
console.log(a);
console.log(b);

*/

/*
radius = '10';
const obj = {
    radius: 10,
    diameter(){
         return 'Diameter is' + this.radius;
    },
    perameter: () => {return 'this is parameter '+ this.radius}
};
console.log(obj.radius);
console.log(obj.diameter());
console.log(obj.perameter());

let val = 4;
console.log(JSON.stringify(val), typeof val);

*/
// const car = {
//     size: "small"
// }

// const newCAr = {
//     name: 'maruti',
//     small: true
// }
// console.log(newCAr[car['size']]);

// let a = {
//     name:'hi'
// };
// let b;
// let c = JSON.stringify(a);
// b = JSON.parse(c);

// a.name = "Amit";
// console.log(b);

// let a = [1,2,3];
// let b = [1,2,3];
// let c = a;
// console.log(a==b);
// console.log(c==a);

// function person (fname,lname){
//         this.fname = fname;
//         this.lname = lname;
// }

// let amit = new person("Amit","Kumar");
// let cheten = person("chect","kumar");

// console.log(amit);
// console.log(cheten);

// function sum(a,b){
//     return a+b;
// }

// console.log(sum("4",2));

// let num = 0;
// console.log(num++);
// console.log(++num);
// console.log();



let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        star += " ";
      }
  for (let k = 0; k < 2 * i - 1; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);




let n1 = 5;
let star1 = "";
// External loop
for (let i = 0; i < n1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    star1 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n1-i) - 1; k++) {
    star1 += "*";
  }
  star1 += "\n";
}
console.log(star1);