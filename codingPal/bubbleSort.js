function bubbleSort(data){
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data.length;j++){
            if(data[j-1]>data[j]){
                var tempValue = data[j-1];
                data[j-1] = data[j];
                data[j] = tempValue;
            }
        }
    }
    return data;
}
console.log(bubbleSort([6,2,9,4]));