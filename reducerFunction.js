let arr = [4,7,2,9,1,37,12];
let sum = arr.reduce((accum,curr)=>{
    return accum + curr
})

console.log(sum);