const interviewQuestion = (name)=>{
    if(name === "Amit"){
        return function(topic){
            console.log(`Hi ${name}, What is ${topic}? Please explain us`);
        }
    }if(name === "Krishna"){
        return function(topic){
            console.log(`Hi ${name}, What is ${topic}? Please explain us`);
        }
    }if(name === "Lala"){
        return function(topic){
            console.log(`Hi ${name}, What is ${topic}? Please explain us`);
        }
    }
    else{
        return function(topic){
        console.log(`Welcome to Interview Mr/Mrs ${name}. And you know about ${topic}`);
        }
    }
}

interviewQuestion("Lala")("Closer");
interviewQuestion("Krishna")("callBack function");
interviewQuestion("Amit")("UI");
interviewQuestion("Gella")("Shoes");
