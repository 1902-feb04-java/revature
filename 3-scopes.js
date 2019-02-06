"use strict"

function f(x){
    // variables declared with var anywhere in a function have the scope of only that function
    var n = 3;
    return x + n;
}

f(4);
console.log(n); // (n is out of scope)

function f(x){

    // this is not an error, only undefined
    console.log(n);
    
    // we say that the declaration ("var n") is hoisted to the top of the function
    if(true){
        var n = 3;
    }
    else{
        var n = 8;
    }

    // without strict mode, you can set global variables so long as you dont declare them (you leave out var)
    asdf = 5;
    // becomes a ReferenceError with strict mode

    return x + n;
    // with function scope, we can still see that n even though we are ouside its braces
}

// in general, strict mode turns silently thrown-away errors into "real" console errors
// if assignments fail, strict mode will throw an error


// throw error -> try/catch -- exception handling
// JavaScript does have exception throwing and handling
// in js you can throw anything and you can catch it later
function bad(){
    throw 'an error happened';
};

try{
    // code that might throw an error goes in the try block
    bad();
} catch(error){
    // code to catch/correct the error goes in the catch block
    // the catch block does not run unless there was an error
    console.log(error);
}


// ES6 added block scope to JavaScript with two new ways to declare a variable - let and const
// not all browsers support ES6 but all browsers support block scope

// "var" is function scope (or global)
// let or const are block scope (or global)

if(true){
    let asdf = 5;
}
console.log(asdf);

// with let, this is a ReferenceError


// always use let or const, not var

if(true){
    // you can never reassign to a const variable (constant)
    const asdf = 5;
    asdf = 6;
    // becomes an invalid assignment error
}

console.log(asdf); // error - block scope


const obj = {
    name: 'Nick'
};
obj = {}; // error - can't reassign const
obj.age = 26; // not an error because you can modify the content of the array (nested layer); 
// you just cannot modify the actual array (surface layer)


let name = 'Bill';
let age = 50;

let bill = {
    name: name,
    age: age
};

// ES6 introduced "shorthand property initializer"
// this does the exact same as the previous 
bill = {name, age};