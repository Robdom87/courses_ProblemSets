const peakFinder = function (nums) {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
  // let sortedNums = nums.sort(function (a,b){
  //   return b-a;
  // })
  // return sortedNums[0];
  // let highest = nums[0];
  // for(let num of nums){
  //   if(highest<num){
  //     highest = num;
  //   }
  // }
  //   return highest;
  // return Math.max(...nums);

  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    //be careful with add check if concatenate, console log response
    let mid = Math.round(parseInt((start + end)/ 2));
    if (nums[mid] > nums[mid + 1]) {
      end = mid;
    } else {
      start = mid+1;
    }
  }
  return nums[start];
};

let arr = [1,2,3,4,5,6,5,4,3];
console.log(peakFinder(arr));
