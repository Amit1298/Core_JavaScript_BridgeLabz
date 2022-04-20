// class User{
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//         console.log("Adding of Two number: ",a+b);
//     }
    
// }

// const user1 = new User(3,6);

// classes


// class User {
//     constructor(name) {
//     this.name = name;
//     }
    
//     set setName(x) { // setter
//     this.name = x;
//     }
    
//     get getName() { // getter
//      return this.name;
//     }
    
    
//    }
   
//    const user1 = new User();
//    user1.setName = 'superman';
   
//    console.log(user1.name, user1.getName);

class Mobile{
    constructor(model,sPrice){
        this.model = model,
        this.color = "White",
        this.price = 3000,
        this.sPrice = sPrice
    }
    show(){
        return this.price+ this.sPrice;
    }
}

var samsung = new Mobile("3310",1000);
console.log("Selling Price is: ",samsung.show(),"\nMOdel number is: ",samsung.model);