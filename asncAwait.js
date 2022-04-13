/* Async & await */

const resolveFun = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
       resolve('Successfully resolve');
       }, 2000);
    });
   }
   
   async function asynCall() {
   try {
   const data = await resolveFun();
   console.log('asynCall Function', data);
   } catch(error){
     console.log('error:---', error);
   } finally {
   console.log('Finally:---');
   }
   }
   
   asynCall();