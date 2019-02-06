"use strict"

function convertToBool(x){
    let bool = Boolean(x);
    console.log(`${x} as boolean: ${bool}`);
}
    // values are converted to boolean in places like an if-condition
    // if (condition){

    // }

    // most values convert to true, we call those values "truthy"
    // some convert to false, we call them "falsey"

    // falsey values: 
    // 0 (and -0)
    // NaN
    // '' (empty string)
    // false
    // null
    // undefined
    // empty object

    // everything else is truthy, including all objects, functions, arrays, etc.

    // often we use null to indicate the absence of an object
    let object = getTheObject();

    // if this is null, converts to false; if any object, converts to true
    if(object){

    }


    // Sets and Maps

    // Set objects are collections of values. 
    // You can iterate through the elements of a set in insertion order. 
    // A value in the Set may only occur once; it is unique in the Set's collection.
    const set1 = new Set([1, 2, 3, 4, 5]);

    console.log(set1.has(1));
    // expected output: true
    
    console.log(set1.has(5));
    // expected output: true
    
    console.log(set1.has(6));
    // expected output: false



    // map
    var array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]


    // Why use map over set?
        // map would be better for storing countries and capitals (map is best to look up value by key) 

    