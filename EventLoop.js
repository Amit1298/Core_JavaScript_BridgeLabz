setTimeout(()=>{                                           //callback queue
    console.log("Wecome tot setTimeout");
},2000);

let promise = Promise.resolve("Welcome to prompts");          //goes to microtask queue
promise.then((res)=>{
    console.log(res);
}).catch();

setTimeout(()=>{                                           //callback queue
    console.log("Welcome to setTimeout");
},2000);

console.log("End of Code");                                  //call stack=> console