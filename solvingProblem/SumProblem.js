/**
 * Subset Sum Problem
 *
 * Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.
 *
 * Examples: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
 * Output:  True  //There is a subset (4, 5) with sum 9.
 *Thank you for your business! We look forward to working with you again.
 */

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
console.log(twoSumNumber([3, 34, 4, 12, 5, 2],9));