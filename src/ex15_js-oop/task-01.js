function Product(name, type) {
    this.name = name;
    this.type = type;
}

Product.prototype.toString = function () {
    return 'Its product, name: ' + this.name + ', type: ' + this.type;
};

function SugarProduct(name, type, weight) {
    Product.call(this, name, type);
    this.weight = weight;
}

SugarProduct.prototype = Object.create(Product.prototype);

SugarProduct.prototype.toString = function () {
    return 'Its sweet, name: ' + this.name + ', type: ' + this.type + ", weight: " + this.weight + "g";
};

function CandyBox(holidayName, nameBox) {
    this.holidayName = holidayName;
    this.nameBox = nameBox;
    this.arrayProduct = [];
}

CandyBox.prototype.addItem = function (items) {
    for (var index = 0; index < items.length; index++) {
        this.arrayProduct.push(items[index]);
    }
    console.log("Сладости добавлены!");
};

CandyBox.prototype.displayListCandy = function () {
    for (var i = 0; i < this.arrayProduct.length; i++) {
        console.log(this.arrayProduct[i].toString());
    }
};

CandyBox.prototype.sortingWeight = function () {
    this.arrayProduct.sort(function (a, b) {
        return a.weight - b.weight;
    });
    console.log("Сортировка по весу выполнена");
    this.displayListCandy();
};

CandyBox.prototype.search = function(nameCandy){
    for (var i = 0; i < this.arrayProduct.length; i++) {
        if(this.arrayProduct[i].name === nameCandy){
            return this.arrayProduct[i];
        }
    }
    console.log("В подарке не найдено такого продукта");
};

var candy = new SugarProduct("Коровка", "Конфета", 7);
var jelly = new SugarProduct("Мир желе", "Мир желе", 5);

var box = new CandyBox("Новый год", "Новогодний подарок");

box.addItem([candy, jelly, new SugarProduct("Milky Way", "Шоколадка", 26),
    new SugarProduct("Twix", "Шоколад с карамелью", 40)]);







