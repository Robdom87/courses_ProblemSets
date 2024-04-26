// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

// [1,2,3,4]
// [2]
// [3,4,1,2]
let arr = [0, 1, 3, 1, 8]; 
let positions = 4;
// [8, 0, 1, 3, 1]
// [3, 1, 8, 0, 1] 

const leftRotation = (arr, positions) => {
  if (arr.length === 0) {
    return;
  }

  while (positions > 0) {
    const first = arr.shift();

    arr.push(first);

    positions--;
  }
};

leftRotation(arr, positions);
console.log(arr);

