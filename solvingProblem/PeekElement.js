/**
 * Find Peak Element
 *
 * A peak element is an element that is greater than its neighbors.
 *
 * Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
 *
 * The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
 *
 * You may imagine that num[-1] = num[n] = -∞.
 *
 * For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 */


var PeakElement = (num)=>{
    for(let i=0;i<num.length-1;i++){
        if(num[i]>num[i+1]){
            return i;
        }
    }
}
console.log(PeakElement([1,2,3,1,5,1]));

/*
num[0]>num[1]  =>  1>2    false
num[1]>num[2]  =>  2>3     false
num[2]>num[3]  =>  5>3     true
*/


// var PeakElement1 = (num)=>{
//     let left = 0;
//     let right = num.length - 1;
//     while(left<right){
//         let mid = Math.floor((left+right)/2);
//         if(num[mid]>num[mid+1]){
//             right = mid;
//         }else{
//             left = mid + 1;
//         }
//     }
//     return left;
// }

// console.log(PeakElement1([1,2,5,3,1,7,3]));