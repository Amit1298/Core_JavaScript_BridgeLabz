function twoSumNumber(data,sum){
    if(data !== null&&data.length >=2){
        for(let i = 0;i<data.length;i++){
            for(let j=i+1;j<data.length;j++){
                if(data[i]+data[j] === sum){
                    console.log("Two number sum exists and here are the number: ",data[i],data[j]);
                    return [data[i],data[j]]
                }else{
                    continue;
                }
            }
        }
    }
}
console.log(twoSumNumber([1,2,3,4],5));