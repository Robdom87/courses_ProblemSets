// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays
//return an array of all the instances of a number appearing in both arrays, a number can appear in both multiple times
//return does not need to be sorted

var arr1 = [8, 88, 8, 90, 91, 8];
var arr2 = [90, 8, 8, 15, 3];

var arrayIntersection = function(arr1, arr2) {
    let copy1 = arr1;
    let copy2 = arr2;
    let inter = [];
    for (let i = 0; i < copy1.length; i++){
        for (let e = 0; e < copy2.length; e++){
            if (copy1[i]===copy2[e]){
                inter.push(copy1[i]);
                copy2.splice(e,1);
                break;
            }
        }
    }
    return inter;
};

//analysis
//time complexity big O (nm)
//space complexity would be O(n)

//best possible outcome O (n+m)
//space complexity O (1)

var arrayIntersection2 = function(arr1, arr2) {
    let copy1 = arr1.sort((a,b)=> a-b);
    let copy2 = arr2.sort((a,b)=> a-b);
    let inter = [];
    let index1 = 0;
    let index2 = 0;
    while(index1 < copy1.length || index2 < copy2.length){
        if(copy1[index1]===copy2[index2]){
            inter.push(copy1[index1]);
            index1++;
            index2++;
        } else if (copy1[index1]>copy2[index2]) {
            index2++;
        } else {
            index1++;
        }
    }
    return inter;
};

//analysis
//time complexity big O (n+m+nlogn)
//space complexity would be O(n)

//test
console.log(arrayIntersection2(arr1, arr2), '[90, 8, 8]')