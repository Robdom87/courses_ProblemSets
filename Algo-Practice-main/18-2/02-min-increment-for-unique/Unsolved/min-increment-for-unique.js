// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function (nums) {
    let count = 0;
    let numMap = {};
    // nums.sort(function (a, b) {
    //     return a - b;
    // })
    // for (let i = 0; i < nums.length - 1;i++){
    //     while(nums[i]>=nums[i+1]){
    //         nums[i+1]++;
    //         count++;
    //     }   
    // }
    for (let i = 0; i < nums.length;i++){
        while(numMap[nums[i]]===true){
            nums[i]++;
            count++;
        }  
        numMap[nums[i]]=true; 
    }

    return count;

};
