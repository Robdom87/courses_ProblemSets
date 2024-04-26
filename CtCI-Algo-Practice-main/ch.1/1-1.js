//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
//cannot use additional data structures?

//no repeat characters in string, return boolean, dont use data structres

//example string: 
//"hey there" FALSE
//"Germain" TRUE
//note space are counted


let str1 = 'germain';
let str2 = 'hey there';

//first attempt
function isUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let e = 0; e < arr.length; e++) {
            if (i !== e) {
                if (arr[i] === arr[e]) {
                    return false;
                }
            }
        }
    }
    return true;
}
// analysis
//time complexity big O(n^2)
//space complexity big O(1)

//first optimize
function isUniqueO(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let e = i + 1; e < arr.length; e++) {
            if (arr[i] === arr[e]) {
                return false;
            }
        }
    }
    return true;
}
// analysis
//time complexity big O(n)(n-1) alittle less than before but not yet solid
//space complexity big O(1)

//BCR is time complexity big O (n)

function isUnique3(arr){
    let lettersObj = {};
    for (let i = 0; i < arr.length; i++){
        if(!lettersObj[arr[i]]){
            lettersObj[arr[i]]=1;
        } else {
            lettersObj[arr[i]]+=1;
        }
        if (lettersObj[arr[i]]>1){
            return false;
        }
         
    }
    console.log(lettersObj);
    return true;
}

//big O (n) for time
// big O (n) for space too, object grows with the algo



//tests
console.log(isUnique3(str1), 'TRUE');
console.log(isUnique3(str2), 'FALSE');