const oneEditAway = function(str1, str2) {
// TODO: Write function that takes in two strings and returns true if one character away, otherwise false
if (Math.abs(str1.length-str2.length)>1){
    return false;
}
let oneEdit = false;
for (let i = 0, e = 0; i<str1.length-1 && e<str2.length-1; i++, e++){
    if(str1[i]!==str2[e]){
        if(oneEdit===false){
            oneEdit=true;
        } else {
            return false;
        }
    }
}
if(oneEdit===false && Math.abs(str1.length-str2.length)===1){
    oneEdit=true;
}
return oneEdit;

}
