function removeElement(data,num){
    if(data !=null){
        var resultArray = [];              // NEW ARRAY STORE HERE
        for(let i=0;i<data.length;i++){
            if(data[i]!==num){
                resultArray.push(data[i]);
            }else{
                continue;
            }
        }return resultArray;
    }else{
        return[];
    }
}
console.log(removeElement([1,2,3,4,5,6],4));

function removeChar(arr,str){
    if(arr !== null){
        let newArray = [];
        for(let i=0;i<arr.length;i++){
            if(arr[i]===str){
                continue;
            }else{
                newArray.push(arr[i]);
            }
        }return newArray;
    }else{
        return [];
    }
}

console.log(removeChar(['s','a','q','j','m'],'a'));