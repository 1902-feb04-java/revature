"use strict"

function compare(a,b){
    //another thing ES6 added, string interpolation
    console.log("a:" + a + ", " + b);

    // or we can write:
    console.log(`a: ${a}, b: ${b};`);
    // you use backticks `` instead of quotes 
    // and put js expression inside ${}

    console.log(`a == b: ${a == b}`);
    console.log(`a === b: ${a === b}`);

    // "double equals" (==) or loose equals (negation: !=)
    // "triple equals" (===) or strict equals (negation: !==)

    // double equals compares value without comparing type
    // triple equals compares both value and type

    compare(1,1); // true
    compare(0,1); // false

    compare(5, '5');
    compare('', 0); 
    
    compare(1,[1]); // true
    compare(1, 1.0); // true
    
}