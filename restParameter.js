function sum(...num){
    console.log(num);
    let total = 0;
    for (const numAdd of num) {          //for of loop 
        total += numAdd
    }
    console.log(`Sum of Numbers is ${total}`);
}
sum(2,4,1,7,3,6,5,8);

function name(a,b,...c){
    console.log(`${a}, ${b}`);
    console.log(`${c}`);
    console.log(c[0]);
    console.log(c[2]);
    console.log(c.length);
    console.log(c.indexOf("Satty"));
}
name("Amit","Krishna","Laxmi","Annu","Satty");