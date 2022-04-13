function checkAnagram(a,b){
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
        console.log("Invalid Input");
        return
    }
    let str1 = a.split("").sort().join("");
    let str2 = b.split("").sort().join("");
    if(str1 === str2){
        console.log("Anagram string");
    }else{
        console.log("Not Anagram string");
    }
}
checkAnagram("Amit","tmiA");