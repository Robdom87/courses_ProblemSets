// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

let string = 'aabcccccaaa';
let string2 = 'FFFFflttttT'; //capital and lowecase
let string3 = 'abcdefg'; //length the same as without compression


function strCompression (str){
    let letters = str.split('');
    let lettersCountArr = [];
    let letterCountArr = [];
    for (let i = 0; i < letters.length; i++){
        if (letters[i]===letters[i-1]){
            letterCountArr[1]++;
        } else {
            if (i!==0){
                lettersCountArr.push(letterCountArr);
                letterCountArr = [];
            }
            letterCountArr.push(letters[i]);
            letterCountArr.push(1);
            
        }
        if (i===letters.length-1){
            lettersCountArr.push(letterCountArr); 
        }
    }
    for (let e = 0; e < lettersCountArr.length; e++){
        lettersCountArr[e] = lettersCountArr[e].join('');
    }
    let compressedStr = lettersCountArr.join('');
    if (compressedStr.length>=letters.length){
        return str;
    }
    return compressedStr;
}

//tests 
console.log(strCompression(string),'a2blc5a3');
console.log(strCompression(string2),'F4f1l1t4T1');
console.log(strCompression(string3),'abcdefg');