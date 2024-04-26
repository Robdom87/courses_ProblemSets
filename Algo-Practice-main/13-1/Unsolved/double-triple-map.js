// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

let arr = [1,2,3,4];

var doubleTripleMap = function(arr) {
    let mapArr = arr.map(x => (x%2===0 ? x*=2 : x*=3)); //the returns are implied for the two x*=2 and 3
    return mapArr;
};

doubleTripleMap(arr);



