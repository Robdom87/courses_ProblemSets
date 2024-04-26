// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1
let arr = ['great', 'ostrich', 'panther', 'ruby', 'chosen', 'feathers'];

var rotationPoint = function(words) {
    if(words.length<=1){
        return -1;
    }
    let left = 0;
    let right = words.length-1;
    while(left<right){
        let mid = Math.round((left+right)/2);
        console.log('left:',left,'right:',right,'mid:',mid)
        if(words[mid-1]>words[mid]){
            return mid;
        }
        if (words[left]<words[mid]){
            left=mid;
        } else {
            right=mid-1;
        }
    }
    return -1;
};


console.log(rotationPoint(arr));