// Write a function that takes in two sorted arrays and returns a pair of numbers
// (one from each array) with the smallest difference.

// TODO: Solve the function below:

let arr1 =  [4, 8, 15, 16, 23, 42];
let arr2 = [108, 112, 112, 155, 156, 170];

var smallestDifference = function (arr1, arr2) {
    let lowest = Infinity;
    let diffNumbers = [];
    let index1 = 0;
    let index2 = 0; 
    while(index1 < arr1.length && index2 < arr2.length){
        let diff = Math.abs(arr1[index1]-arr2[index2]);
    
        if(lowest > diff){
            lowest = diff;
            diffNumbers = [arr1[index1],arr2[index2]];
        } 

        if (lowest===0){
            return diffNumbers;
        } 

        if(arr1[index1]<arr2[index2]){
            index1++;
        } else if (arr1[index1]>arr2[index2]) {
            index2++;
        } 
    }
    return diffNumbers;
};

smallestDifference(arr1,arr2);

