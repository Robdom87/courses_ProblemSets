// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function(digits) {
    let i = digits.length-1;
    let cont = true;
    while(cont && digits.length){
        digits[i]++;
        if(digits[i]>9){
            digits[i]-=10;
            if(i===0){    
                digits.unshift(1);
                cont = false;
            } else {
                i--;
            }         
        } else {
            cont = false;
        }
    }
    if(!digits.length){
        digits.push(1);
    }
    return digits;

};
