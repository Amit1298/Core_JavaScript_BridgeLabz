//basic example
/*
const promiseObj = new Promise((resolve,reject)=>{
    let req = false;
    if(req == true){
        resolve("Request Success");
    }else{
        reject("Request Rejected");
    }
}).then(
    (value) => {console.log(value);},
    // (error) => {console.log(error);},
).catch(
    (error) => {console.log(error);},
)



const promiseObj = new Promise((resolve,reject)=>{
    let num = 10;
    resolve(num);
}).then(
    (value) =>{
        console.log(value);
        return value+10;
    }
).then(
    (value) => {console.log(value);}
)

*/

//const asycTask = () => {
    const promise = new Promise((resolve, reject)=> {
    let error = true;
    setTimeout(() => {
    if(error == false) {
     reject('Promise is Rejected');
    } else {
    resolve({message: 'Promise is Completed'});
    }
    
    }, 2000);
    }).then(
        (value) =>{
            console.log(value);
        }
    ).catch(
        (error) => {console.log(error);}
    )
    //return promise;
 //   }
    
    //asycTask();
    // asycTask().then((res) => {
    // console.log(res);
    // }).catch((error) => {
    //  console.log(error);
    // });
