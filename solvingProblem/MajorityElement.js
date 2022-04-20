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

 var arNum = [2,2,1,1,1,2,2];
 var occurance = {};
 var crrNumber;
 var maxNumber = arNum[0];

 for(let i=0;i<arNum.length;i++){
     crrNumber = arNum[i];

     if(occurance[crrNumber] != undefined){
         occurance[crrNumber]++;
     }else{
         occurance[crrNumber] = 1;
     }

     if(occurance[crrNumber]>occurance[maxNumber]){
         maxNumber = crrNumber;
     }
 }

 if(occurance[maxNumber]>arNum.length/2){
     console.log("Found the majority element: ",maxNumber);
 }else{
     console.log("Not majority Element found");
 }