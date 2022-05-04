/**
 * Find All Duplicates in an Array
 *
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 *
 * Find all the elements that appear twice in this array.
 *
 * Could you do it without extra space and in O(n) runtime?
 *
 * Example:
 *
 * Input:
 * [4,3,2,7,8,2,3,1]
 *
 * Output:
 * [2,3]
 */

 function removeDuplicateArray(data){
    if(!data.length){
       return []
    }
    let resultArray = [data[0]];
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
}

removeDuplicateArray([1,1,2,3,3]);