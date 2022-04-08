/* Promise states: */

/* - Pending
- Fulfilled
- Rejected */

// How to create the promise

const promise = new Promise((resolve, reject)=> {
    reject('Promise is Rejected');
   });
   
   promise.then((res) => {
   console.log(res);
   }).catch((error) => {
    console.log(error);
   });

   /*
   /* Promise states: */

/* - Pending
- Fulfilled
- Rejected 

// How to create the promise
 const promise = Promise.reject('Its Fail'); 
const asycTask = () => {
    const promise = new Promise((resolve, reject)=> {
    let error = false;
    setTimeout(() => {
    if(error) {
     reject('Promise is Rejected');
    } else {
    resolve({message: 'Promise is Completed'});
    }
    
    }, 2000);
    });
    return promise;
    }
    
    
    asycTask().then((res) => {
    console.log(res);
    }).catch((error) => {
     console.log(error);
    });




    /* Promise states: */

/* - Pending
- Fulfilled
- Rejected */

// How to create the promise
/* const promise = Promise.reject('Its Fail'); 
const asycTask = () => {
    const promise = new Promise((resolve, reject)=> {
    let error = false;
    setTimeout(() => {
    if(error) {
     reject('Promise is Rejected');
    } else {
    resolve({message: 'Promise is Completed'});
    }
    
    }, 2000);
    });
    return promise;
    }
    
    
    asycTask().then((res) => {
    console.log(res);
    }).catch((error) => {
     console.log(error);
    });
    krishna bhamare9:55 AM
     const promis1 = Promise.resolve('Its Resolve'); 
     const promis2 = Promise.resolve('Its Resolved'); 
    Promise.all([promis1, promis2]).then((res) => {
    console.log(res);
    }).catch((error) => {
     console.log(error);
    }).finally(() => {
    console.log('FINALLY CALLED:');
    });
   */