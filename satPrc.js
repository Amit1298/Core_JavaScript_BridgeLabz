// let arr = ['first', 'second', 'third']
// out = [{name: 'first'},{name: 'second'}, {name: 'third'}]

let arr = ['first', 'second', 'third']
let [first, second, third] = arr;

let arrMap = arr.map(function(name){

    return {name};
})
console.log(arrMap);


/*
let arr = [1,2,3,4,4,4,5];

let formattedArr = arr.reduce((obj, el) => {
  if(obj[el]) {
    obj[el]++;
  } else {
  obj[el] = 1;
  }
  return obj;
}, {});
 console.log(formattedArr);
 */