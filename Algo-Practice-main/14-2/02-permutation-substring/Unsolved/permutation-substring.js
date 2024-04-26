// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false
var str = "smapnuer";
var sub = "super";


var permutationSubstring = function(str, sub) {
    let letterMap = {};
    for( let i = 0; i < str.length; i++){
        if (letterMap[str[i]]){
            letterMap[str[i]] += 1;
        } else {
            letterMap[str[i]] = 1;
        }
    }
    for( let e = 0; e < sub.length; e++){
        if (letterMap[sub[e]]){
            letterMap[sub[e]] -= 1;
            if(letterMap[sub[e]] < 0){
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};


//test
console.log(permutationSubstring(str,sub),'true');
