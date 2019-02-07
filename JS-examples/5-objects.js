"using strict"

let name = "Nick";
let obj = {
    name
};
console.log(obj);


let x = (
    name: "Bob"
};


// object-oriented idea: encapsulate data and behavior together
let obj = {
    name: "Nick",
    sayName: function(){
        console.log("Nick");
    }
}
obj.sayName();


sayName2: function(){
    // "this" refers to the object before the dot when this function is called
    console.log(this);
    console.log(this.name);
}
obj.sayName2;


let obj2 = {
    name: 'Bob',
    sayName2: obj.sayName2
}
obj2.sayName2();


// reminder on functions as values
// dont confuse these
function returns3(){
    return 3;
}

let theFunctionItself = returns3; // a function
let theFunctionsReturnValue = returns3(); // 3

// ESS has no classes, but it does have constructors
// we've used Boolean, String

// new constructors with capital letter
function Person(name, age, fingers){
    // define data properties of a new Person
    this.name = name;
    this.age = age;
    this.fingers = fingers;

    // define methods/functions of a new Person
    this.sayName = function(){
        console.log(this.name);
    }
}

// we call constructors with the "new" keyword
let nick = new Person("Nick", 26, 10);
console.log(nick);
nick.sayName();

// all that "new" does is...
// 1. make a new empty object ({})
// 2. then call the function you put after
//    the "new" with "this" set to that new object

// ES5 uses prototypal inheritance to have something LIKE a "class hierarchy" without classes.

// a "Student" will have everything a Person has, and also a "school" property
function Student(name, age, fingers, school){
    this.school = school;
    this.__proto__ = new Person(name, age, fingers);
    // two underscores before and after
}

// the way property access works in JS is, if we try to access
// a property on an object, and its not defined on that object

// ... we fall back tot hat object's prototype, and on and on
// until we hit Object (which has no prototype)

let student = new Student('Bill', 50, 10, 'UW');
student.fingers = 12;
console.log(student);
console.log(student.name);

// even empty objects have a prototype
console.log({});
console.log([].toString());

function NineFingerGuy(name, age){
    this.__proto__ = new Person(name, age, 9);
}

// in ES6, we can use classes instead of old-fashioned constructors and prototypes
// 1. define a class 2. class has a constructor 3. properties still use this

// define methods/functions of a new Person
// this is called "method" syntax for a adding a function property to an object
sayName(){
    console.log(this.name);
}

// (method syntax works on objects too)
let x = {
    add(){  // new in ES6 (i think)
        return 3;
    }
}

// PersonClass will be the parent class of StudentClass
class StudentClass extends PersonClass{
    constructor(name, age, fingers, school){
        // "super" means, the parent class's constructor
        super(name, age, fingers);

        this.school = school;
    }
}

let student2 = new StudentClass("Mehrab", 90, 5, "UH");
console.log(student2);

// ES6 classes are essentially just syntactic sugar around prototypal inheritance;
// they are less flexible / more restrictive; have no shared prototypes; 
// however, classes are a more structured way of programming (good development)




// basic bubble class example

class Bubble {

    // constructor for a bubble class
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

// instances of a bubble class
let bubble = new Bubble(200, 150, 40);
let bubble2 = new Bubble(150, 100, 20);
