// Find century from the year
function centuryFromYear(year) {
    var centuryFromYear = (Math.ceil(year / 100));
    console.log(centuryFromYear);
    return centuryFromYear; 
 }


// Check for palindrome
function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}


// Extract kth element from array
function extractEachKth(inputArray, k) {
    for (let i = k - 1; i < inputArray.length; i += k - 1) {
        inputArray.splice(i, 1);
    }
    return inputArray;
}


// Adjacent elements with largest product
function adjacentElementsProduct(inputArray) {
    if (inputArray.length == 1)
        return 0;
    
    var maxProduct = inputArray[0] * inputArray[1];
    
    for(var i = 0; i < inputArray.length - 1; i++) {
        if(inputArray[i] * inputArray[i+1] > maxProduct) {
            maxProduct = inputArray[i] * inputArray[i+1];
        }
    }
    return maxProduct;
}




