// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order
//input in asceindinbg order already
//return in ascending orderas well map
var arr1 = [-4, -1, 0, 3, 10];
var arr2 = [-7, -3, 2, 3, 11];

// var sortedSquares = function(arr) {
//     let array = arr;
//     for (let i = 0; i < array.length; i++){
//         let currentNum = array[i];
//         array[i] = currentNum * currentNum;
//     }
//     array.sort(function (a,b){return a - b});
//     return array;
// };

//analysis
//time O(n log n);
//space O(n);

//bcr time O(n)

var sortedSquares = function(arr) {
   let sqrdArray = new Array(arr.length);
   let rightIndex = arr.length - 1;
   let leftIndex = 0;
   let sqrdIndex = sqrdArray.length - 1;
   while (leftIndex <= rightIndex){
    let leftVal = arr[leftIndex];
    let rightVal = arr[rightIndex];
    if (Math.abs(leftVal) >= Math.abs(rightVal)){
        sqrdArray[sqrdIndex] = leftVal ** 2;
        // console.log(sqrdArray);
        leftIndex++;
    } else {
        sqrdArray[sqrdIndex] = rightVal ** 2;
        rightIndex--;
    }
    sqrdIndex--;
   }
   return sqrdArray;
};


//test
console.log(sortedSquares(arr1),'[0, 1, 9, 16, 100]');
console.log(sortedSquares(arr2),'[4, 9, 9, 49, 121]');
