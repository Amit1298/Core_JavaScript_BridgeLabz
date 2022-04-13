const arr = [1,3,6,2,8,4,9];
const obj = arr.find((e)=> e ===2);
console.log(obj);

//foreach loop
arr.forEach((item)=>{
    console.log(item);
});

//map
const arr1 = arr.map((item)=>{
    return item *2;
})
console.log(arr1);

//reduce
const data = arr.reduce((count,item)=>{
    count = count +item;
    return count;
},0);
console.log(data);