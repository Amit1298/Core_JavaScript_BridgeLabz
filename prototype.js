function Mobile(modelNum){
    // Instance member
    this.model = modelNum;
    this.price = 3000;
}
var samsung = new Mobile("Galaxy");
var nokia = new Mobile("3310");

//Prototype member
Mobile.prototype.color = "White";
 console.log(samsung.color);
 console.log(nokia.color);
 console.log(samsung);
 console.log(Object.keys(samsung));
 for(var key in samsung){
     console.log(key);
 }