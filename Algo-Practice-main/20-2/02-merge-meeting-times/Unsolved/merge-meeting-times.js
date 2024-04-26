// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function(arr) {
    let sorted = arr.sort(function(a,b){
        return a[0] - b[0];
    });
    let mergedSlots = [];
    let currentSlot = arr[0];
    for(let i = 1; i < sorted.length; i++){
        if(sorted[i][0]<=currentSlot[1] && sorted[i][1]>currentSlot[1]){
            currentSlot[1]=sorted[i][1];
        } else if (sorted[i][0]>currentSlot[1]){
            mergedSlots.push(currentSlot);
            currentSlot=sorted[i];
        }
        if(i===sorted.length-1){
            mergedSlots.push(currentSlot);
        }
    }
    return mergedSlots;
};
