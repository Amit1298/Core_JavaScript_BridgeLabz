function threeNumberSum(data,sum){
    for(let i=0;i<data.length;i++){
        for(let j=i+1;j<data.length;j++){
            for(let k=j+1;k<data.length;k++){
                if(data[i]+data[j]+data[k]===sum){
                    return [i,j,k];
                }
            }
        }
    }
}

console.log(threeNumberSum([1,2,3,4],7));