"use strict"

// callback functions

function add(a, b, onSuccess){
    let result = a + b;
    onSuccess(result);

    // instead of returning the result, ill pass it to a function
    // given to me by the caller
}

add(1, 2, function(result){
    console.log(result);
});

// my "add" function allows me to inject any behavior I want into it,
// for it to apply to the result

// that third parameter is called a callback function
// because the add function "calls back" to the calling code

// callback (example) is when the library code calls back to my code
// why use callbacks? callbacks allow for asynchronous programming


// pseudo-code function below:
makeHTTPRequest(url, function(){
    // when operation is done, run this function
});
// but not yet, i can still run code in the meantime down here


// in ES6, we got a new syntax for function expressions called "arrow functions"
add(1,2,result => console.log(result));
// we can do zero-arg arrow functions like this:
let func = () => 3; // takes zero parameters and returns 3
// we can do many arguments like this:
let multiply = (x,y) => x * y; // takes two params, returns product
// can also do "block body" arrow functions
let max = (x,y) => {
    if(x > y) return x;
    return y;
};
// with "block body" (i.e. braces {}), use statements separated by semicolons
// without braces, provide one expression which is the return value

// the way "this" works is different with arrow functions
// regular functions, "this" always refers to whatever object to the left of the dot
// when the function is being called

let obj = {
    name: 'bob',
    func1: function(){
        console.log(this.name);
    },
    func2: () => console.log(this.name)
}

let obj2 = {
    name: 'bill',
    func1: obj.func1,
    func2: obj.func2
}

obj2.func1();
obj2.func2();

// for arrow functions, it copies "this" from the surrounding context
// in this case, the surrounding context is nothing / no "this" 
// so nothing appears in the console

function newCounter(){
    let x = 0;
    return function(){
        x++;
        return x;
    }
}

let counter = newCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// if you restart the counter
let counter2 = newCounter();

console.log(counter2());
console.log(counter2());

// makes use of a feature or behavior called "closure"

// i have no ability to directly acess "x" from out here;
// yet the variable is kept alive anyways

// the inner function (that newCounter returns) "closes over"
// all the variables it references (i.e. it closes over "x")

// why when it calls the function does it reset x to 0?
// line 71 only runs when we call the function

// sometimes we call the inner (anonymous) functions themselves "closures"

// IIFE (immediately invoked function expressions)

// write the function and then immediately invoke the function
let library = (function(){
    let  privateData = 0;

    function privateFunction = function(){
        return privateDate;
    };

    return{
        libraryMethod(){
            return privateFunction() * 1;
        }
    };
})();

library.libraryMethod();
// why use? helps keep the global namespace clean and clear

// anonymous function that we call as soon as we write it
(function() { console.log('immediately'); })();
