// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13
// Output: "Mr%20John%20Smith"

let input = "Mr John Smith ";

//all spaces into '%20", true length of the string?, return updated string

function URLify(str){
    let strCopy = str.trim().split('');
    // console.log(strCopy);
    for(let i = 0; i < strCopy.length; i++){
        if (strCopy[i]===' '){
            strCopy[i]='%20';
        }
    }
    return strCopy.join('');
}
//analysis 
//time O(N) just depends on size of string
//space 0(1) 

//test
console.log(URLify(input),"Mr%20John%20Smith");