// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

let array = [1,2,3,4,5];
//  arr copy [1, 2, 3, 4, 5]


const reverseInPlace = (arr) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while ( leftIndex <= rightIndex){
        let right = arr[rightIndex];
        arr[rightIndex] = arr[leftIndex];
        arr[leftIndex] = right;
        leftIndex++;
        rightIndex--;
    }
    return arr;
};

console.log(reverseInPlace(array),'54321');


