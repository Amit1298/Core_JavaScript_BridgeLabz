const set1 = new Set([1,1,'hello', {name: 'krishna'}]);
// console.log(set1);

const set2 = new Set([1,2]);
// set2.add(3);
// set2.delete(2);
//  set2.clear();
// console.log(set2);
// console.log(set2.values());

for(let val of set2){
    // console.log(val);
}

// console.log(set2.has(3));

// weak set:  it work in Console window

const weakSet = new WeakSet();
let obj = {name:"Amit"};
weakSet.add(obj);
console.log(weakSet);

//TypeError: weakSet is not iterable
// for(let val of weakSet){
//     console.log(val);
// }