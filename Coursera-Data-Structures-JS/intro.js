//linear search
function linearSearch(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===num){
            return i;
        }
    }
    return -1;   
}
//binary search
function binarySearch(arr, num){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((end + start)/2);
    while(start<=end && arr[mid]!==num){
        if (arr[mid]>num) end=mid-1;
        else start=mid+1;
        //gives the lower bound
        mid = Math.floor((end + start)/2);
    }
    return arr[mid]===num?mid:-1;    
}