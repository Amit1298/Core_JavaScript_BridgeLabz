function threeNumberSumCloseToNumber(arr,sum){
    if(arr!==null&&arr.length>=2){
        let closeSum=arr[0]+arr[1]+arr[2];
        for(let i=0;i<arr.length-2;i++){
            for(let j=0;j<arr.length;j++){
                for(let k=0;k<arr.length;k++){
                    let tempSum = arr[i]+arr[j]+arr[k];
                    if(arr[i]+arr[j]+arr[k]===sum){
                        return [i,j,k];
                    }
                    if(Math.abs(sum - tempSum)<Math.abs(sum-closeSum)){
                        closeSum = tempSum;
                    }
                    
                    else{
                        continue;
                    }
                }
            }
        }
        console.log("Close Sum is : ",closeSum);
        return closeSum;
    }else{
        return null;
    }
}

console.log(threeNumberSumCloseToNumber([1,-1,2,4,12,4,9],11));