const selectionSort = (a) =>{
    for(var i=0;i<a.length;i++){
        var currentMinIndex = i;
        for(var j=i+1;j<a.length;j++){
            if(a[currentMinIndex]>a[j]){
                currentMinIndex=j;
            }
        }
        var temp=a[i];
        a[i]=a[currentMinIndex];
        a[currentMinIndex]=temp;
    } 
    return a;
};

console.log(selectionSort([6,3,8,5,4,1,9]));