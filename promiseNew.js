//Producing code
const promiseObj = new Promise((resolve,reject)=>{
    let req = false;
    if(req == true){
        resolve("Request Sccess");
    }else{
        reject("Request Reject");
    }
}).then(
    (value) => {console.log(value);}
).then(
    ()=>{throw new Error("Error is Found")}
).catch(
    (anything) => {console.log(anything);}
)

