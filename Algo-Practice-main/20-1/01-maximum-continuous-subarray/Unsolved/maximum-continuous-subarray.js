const maxSumArray = function (numbers) {
  // Write your solution here

  // if(numbers.length===1){
  //   return numbers[0];
  // }
  // let max = -Infinity;
  // for (let i = 0; i < numbers.length; i++){
  //   let sum = numbers[i];
  //   for ( let e = i+1; e < numbers.length; e++){
  //     sum+=numbers[e];
  //     max = Math.max(max,sum);
  //   }
  // }
  // return max;
  if(numbers.length === 1) {
    return numbers[0];
  }
  if(numbers.length === 2 || numbers.every((num)=> num > 0)){
    return numbers.reduce((total,current)=>total+=current,0);
  }
  let currentMax = numbers[0];
  let overallMax = numbers[0];
  for ( let i = 1; i < numbers.length; i++){
    let currentNum = numbers[i];
    //essentially checks if current max+max is greater than the current num, 
    //if it is then that should be the new current max as the running max is increasing
    //if its not, then the current max will not be the biggest and is just holding the rest back
    currentMax = Math.max(currentNum, currentNum+currentMax);
    overallMax = Math.max(overallMax,currentMax);
    //we can have a dynamic variable that pulls the current max througought the array to track all the possible maxes
    //but then have a seperate variable to check it overall. very smart
  }
  return overallMax;

};
