function mobile(modelName,sellingPrice){
    this.mName = modelName;
    this.sPrice = sellingPrice;
}

var samsung = new mobile("abh12",3000);
console.log(samsung.mName);