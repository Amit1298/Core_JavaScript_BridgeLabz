/**
 * Majority Elements
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears
 * more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 * Example 1:
 *
 * Input: [3,2,3]
 * Output: 3
 *
 * Example 2:
 *
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 *Thank you for your business! We look forward to working with you again.
 */

 
 function findMajority(arr, n)
{
    let maxCount = 0;
    let index = 0;
     
    for(let i = 0; i < n; i++)
    {
        let count = 0;
        for(let j = 0; j < n; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
 
        if (count > maxCount)
        {
            maxCount = count;
            index = i;
        }
    }
 
    if (maxCount > n / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
}
 
let arr = [ 1, 1, 2, 2, 3, 5, 2, 2, 2,5 ,5,5,5 ];
let n = arr.length;
 
findMajority(arr, n);
 



/*
let arr1 = [1,2,3,4,4,5];
let maxArray = arr1.reduce((obj, el)=>{
    if(obj[el]){
        obj[el]++;
    }else{
        obj[el] = 1;
    }
    return obj;
}, {});
console.log("Elements comes no. of time: "+maxArray[4]); 
*/