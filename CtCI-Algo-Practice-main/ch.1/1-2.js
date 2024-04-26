//Check Permutation: Given two strings, write a method to decide if one is a permutation of the
//other

//two strings, can be different sizes, return boolean
//example

let strW1 = 'theJoshhair';
let strW2 = 'whoKnows12 ';
let strR1 = 'racecar';
let strR2 = 'carcare';

function isPermutation (str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    let str2copy = str2.split('');
    for (let i = 0; i < str1.length; i++){
        let current = str1[i];
        for( let e = 0; e < str2copy.length; e++){
            if(current===str2copy[e]){
                // console.log(str2copy);
                str2copy.splice(e,1);
                break;
            } else if(e===str2copy.length-1){
                    return false;
            }
        }
    }
    return true;
}
//analysis 
//time O(n^2) maybe n(n-1) but not much better
//space 0(1)


function isPermutation2 (str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    let str1arr = str1.split('');
    let str1Obj = {};
    let str1Unique = [];
    for(let i = 0; i < str1arr.length; i++){
        if (str1Obj[str1arr[i]]){
            str1Obj[str1arr[i]]+=1;    
        } else {
            str1Obj[str1arr[i]]=1;
        }
        if(!str1Unique.includes(str1[i])){
            str1Unique.push(str1arr[i]);
        }
    }
    let str2Obj = {};
    for(let e = 0; e < str2.length; e++){
        if (str2Obj[str2[e]]){
            str2Obj[str2[e]]+=1;    
        } else {
            str2Obj[str2[e]]=1;
        }
    }
    for(let y = 0; y < str1Unique.length; y++){
        if (str1Obj[str1Unique[y]]!==str2Obj[str1Unique[y]]){
            return false;
        }
    }
    return true;
}
//analysis 
//time O(N) maybe 3N but not much better
//space 0(N) or O(N)

//if you do the cheat sheet way, know what it does
//there is a more streamlined way of doing this code wise, but Im not sure it would increase time big O to O(n log N)
function isPermutation3(str1,str2){
    let str1sorted = str1.split('').sort().join('');
    let str2sorted = str2.split('').sort().join('');
    console.log(str1sorted);
    console.log(str2sorted);
    if (str1sorted===str2sorted){
        return true;
    }
    return false;
}

//tests
console.log(isPermutation3(strW1,strW2),'false');
console.log(isPermutation3(strR1,strR2),'true');
