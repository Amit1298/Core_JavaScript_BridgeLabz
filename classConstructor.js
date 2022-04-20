/*
function mobile(modelName,sellingPrice){
    this.mName = modelName;
    this.sPrice = sellingPrice;
}

var samsung = new mobile("abh12",3000);
console.log(samsung.mName);
*/

/*
function Mobile(){
    this.model = "3310",
    this.price = function(){
        console.log(this.model, "Price Rs 3000");
    }
}

var samsung = new Mobile();
samsung.price();

var lg = new Mobile();
lg.price();
*/

function Mobile(model){
    this.model = model,
    this.price = function(price){
        console.log(this.model, " Price Rs ",price);
    }
}

var samsung = new Mobile("Samsung");
samsung.price(3000);
