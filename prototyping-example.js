// Apple function - prototyping

function apple(color, weight){
    
}

apple.prototype = {
    eat() {console.log("eat"); return;},
    toss() {console.log("eat"); return;}
}

let apple1 = {
    color: "red",
    weigth: "5oz"
}


let apple2 = {
    color: "green",
    weigth: "4oz"
}


let apple3 = {
    color: "yellow",
    weigth: "5oz"
}

apple1.eat();
apple2.color = "blue";
apple3.weight = "1lb";

console.log(apple1.eat());
console.log(apple2.color);
console.log(apple3.weight);