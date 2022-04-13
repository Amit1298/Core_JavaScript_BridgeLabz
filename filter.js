/* Filter */

const arr = [1,3,2,4,5,3,5,7];
const callback = (e) => {
if(e > 3) {
return e;
}
};
const filteredArr = arr.filter(callback); 

/* const filteredArr = arr.filter((e) => e > 3); */

console.log( filteredArr);