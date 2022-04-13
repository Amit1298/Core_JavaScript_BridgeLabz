let num = 12321;
num = 127;
num = 121;
// num = "ama";
let originalNum = num;
let rev = 0;

while(num !=0){
    rev = (rev*10)+(num%10);
    num = parseInt(num/10);       //721
}
if(originalNum == rev){
    console.log(rev+" is Palindrome Number");
}else{
    console.log(originalNum+" is not Palindrome Number");
}