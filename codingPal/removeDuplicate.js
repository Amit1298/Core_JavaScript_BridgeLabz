function removeDuplicateArray(data){
    if(data!==null){
        var resultArray = [data[0]];
        for(let i=0;i<data.length;i++){
            let tempValue = data[i];
            for(let j=0;j<data.length;j++){
                if(resultArray[j]===tempValue){
                    break;
                }
                if(j===resultArray.length-1){
                    resultArray.push(tempValue);
                }
            }
        }
        console.log(resultArray);
        return resultArray;
    }else{
        return [];
    }
}

removeDuplicateArray([1,1,2,3,3]);