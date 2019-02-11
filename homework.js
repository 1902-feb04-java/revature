var homework = {};
// module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/

homework.fibonacci = function(n){
  return n < 2 ? n : homework.fibonacci(n-1) + homework.fibonacci(n-2);
};

console.log(homework.fibonacci(6));

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/


var array = [2, 1, 3, 2, 3, 5];

homework.sort = function(array) {

  // Bubble sort
  let og = array.slice();  // the original array values
  let len = og.length - 1; // the array length

  do{ // run loop at least once
    var swap = false;

    for(let i = 0; i < len; i++)
      if(og[i] > og[i+1]){
        let temp = og[i];
        og[i] = og[i+1];
        og[i+1] = temp;
        swap = true;
      }
  } while(swap === true)

  return og;
};

console.log(homework.sort(array));

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){

  // Using recursion
  let f = [];

  if(n === 0 || n == 1)
    return 1;
  if(f[n] > 0)
    return f[n];
  return f[n] = homework.factorial(n-1) * n;
};

console.log(homework.factorial(8));

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {

  let temp = array.splice(0); // starting element

  for(let i = 0; i < n-1; i++){
    let initial = temp.shift(); // removed element
    temp.push(initial); // place removed element at the end of the array
  }
  return temp;
};

console.log(homework.rotateLeft(array, 2));

/*
  Bonus: Balanced Brackets

  A bracket is any one of the following: (, ), {, }, [, or ]

  The following are balanced brackets:
    ()
    ()()
    (())
    ({[]})

  The following are NOT balanced brackets:
  (
  )
  (()
  ([)]

  Return true if balanced
  Return false if not balanced
*/
homework.balancedBrackets = function(bracketsString){

  let stack = {};
  let size = 0;
  let start = ['(', '[', '{']; // possible opening marks
  let stop = [')', ']', '}'];  // possible closing marks

  for(let i=0; i < bracketsString.length; i++)
    if(start.indexOf(bracketsString[i]) !== -1){
      stack[size] = bracketsString[i];
      size+=1;
    }
    else if(stop.indexOf(bracketsString[i]) !== -1){
      if(size === 0)
        return false; // stop if not a match
      let index = stop.indexOf(bracketsString[i]);
      if(stack[size-1] === start[index])
        size-=1;
      else
        return false; // stop if not a match
    }
    return size === 0;
};

var inputString = "{{[]}}";
var inputString1 = "{{[}}";
var inputString2 = "{{[}]}";

console.log(homework.balancedBrackets(inputString));
console.log(homework.balancedBrackets(inputString1));
console.log(homework.balancedBrackets(inputString2));