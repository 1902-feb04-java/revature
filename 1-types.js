"use strict";

console.log("Hello JS");

// type undefined
var x; // undefined
x = undefined;
x = {}.name; // undefined object with property

// type number
var y = 10;
y = 10.4;

// in js, integers and decimal numbers have the same type; 
// our internal representation is basically "double" (64-bit-IEEE floating point)

// special number types
x = Infinity;
x = -Infinity;
x = 4/0; // infinity
x = 5 / 'abc'; // NaN (not-a-number)

// type string
x = 'abc';
x = "abc"; // can use single or double quotes
x = "abc[0]"; // can character index into string

// type boolean
x = true;
y = false;

// can use conditional operators in conjunction with boolean
x = x || false;
x = (3 === 3) || false;

// conditional operators

// print to console
console.log("value of x: " + x); // + is for concatenation
console.log("type of y" + y);

// type object
x = {}; // empty object
x = {
        name: 'Bill', // this is a property; properties are separated by a comma
        age: 30
};

x = x.name; // access properties with .
x = x['name']; // access properties with indexing ([]) --- pass string
x.height = 120;

// functions (still type object)
// in js, functions are first-class objects
x = function(n){ return n;}

// function expressions
x = x(x(x('abc')));
x = function(f,x){return f(x);}
x = x(function(n){return n.length;}, 'asdf');

// type null
// (typeof) lies and says its an object
x = null;

// undefined means "non-initalized variable"
// null means "no object here"

// type symbol (new in ES6)
// used for unique identifiers

// if statement
if ('abc'.length > 1){
    console.log("true");
}
else if(!x){

}
else{

}

// switch statement
switch(x){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

// for loop, while loop, do-while loop
for(var i = 0; i <10; i++){
    console.log(i);
}

// arrays (object type)
x = []; // empty array
x = [1,2,3,4, 'abc', null];
console.log(x);

// for each loop
x.forEach(function(e){
    console.log(e);
});

// we've seen function expressions
// we can also declare function variables this way:
function add(a,b,c){
    return a+b+c;
}

// if you dont pass enough parameters, the function is undefined
add(1,2);

// if you pass too many parameters, the extra parameters are ignored
add(1,2,3,4);

// without any return, what will this do?
console.log(print(3));
// returns undefined

// void functions or functions that do not return will result in undefined

