// Apple function - prototyping

function Apple(color, weight){
    this.color = color;
    this.weight = weight;
};

var apple1 = new Apple("red", "5oz");
var apple2 = new Apple("green", "4oz");

Apple.prototype.eat = function(){
    console.log("eaten " + this.color);
}

Apple.prototype.chop = function(){
    console.log("chopped " + this.weight);
}

apple1.eat();
apple2.chop();