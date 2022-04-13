/* Callback */

const fun = (name, callBackFun) => {
    console.log('My Name Is:', name);
    callBackFun();
    };
    
    const callBackFun = () => {
    console.log('This is callback Fun');
    }
    
    fun('Krishna', callBackFun); 
    const callBack = () => {
    console.log('calling settimeout');
    }
    setTimeout(callBack, 100);