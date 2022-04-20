//in this function inside function and inner function is access the variable and parameter of outer function

const outerFun = (a) =>{
    let b = 10;
    const innerFun = () =>{
        let sum = a+b;
        console.log(`Sum of two number is ${sum}`);
    }
    return innerFun;
}
let inner = outerFun(5);
console.dir(inner);
inner();


/* function outer(name) {
 console.log('Hello Outer function:', name);
  function inner(key) {
   console.log('Hello Inner function:', key);
  }
  inner('lastname');
}

outer('name of fun'); */

/* function outer(name) {
 //console.log('Hello Outer function:', name);
return `Hello Outer function:${name}`;
}
 */
 
/*  function outer() {
 function inner(){
 console.log('Hello inner function:');
 }
 return inner;
 }
 const inner = outer();
 console.log(inner()); */


 function cal(x){
    function add(y){
     return x + y;
    }
    return add;
  };
  
  const adding = cal(5); // x
  const result = adding(5); // y
  console.log(result)