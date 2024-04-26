// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)

//letters, providedd a string, same letters forward and backward, return true or false
//exclude blanks, look at only letters
//if n-1 letters are in the string an even amount
//if odd amount of letters then one of the letters has to be a odd amount
// if even all letters need to be an even amount

let str = 'Tact Coa'; //odd 
let str2 = 'htbsiosht'; //wrong
let str3 = 'jjlkmlkmjj'; //even


function palindromeMutate (str){
    let cleanStr = str.trim().toLowerCase();
    let letterMap = {};
    let letterCount = 0;
    for (let i = 0; i < cleanStr.length; i++){
        if (cleanStr[i]!==' '){
            if (letterMap[cleanStr[i]]){
                letterMap[cleanStr[i]] += 1;
                letterCount++;
            } else {
                letterMap[cleanStr[i]] = 1;
                letterCount++;
            }  
        }
    }
    let lettersArr = Object.keys(letterMap);
    let oddCount = 0;
    for (let e = 0; e < lettersArr.length; e++){
        if (letterMap[lettersArr[e]] % 2 !== 0){
            if (letterCount % 2 === 0 ){
                return false;
            } else {
                oddCount++;
                if (oddCount > 1){
                    return false;
                }
            }
        }
    }

    // if (letterCount % 2 === 0 ){
    //     for (let e = 0; e < lettersArr.length; e++){
    //         if (letterMap[lettersArr[e]] % 2 !== 0){
    //             return false;
    //         }
    //     }
    // } else {
    //     let oddCount = 0;
    //     for (let y = 0; y < lettersArr.length; y++){
    //         if (letterMap[lettersArr[y]] % 2 !== 0){
    //             oddCount++;
    //             if (oddCount > 1){
    //                 return false;
    //             }
    //         }
    //     }
    // }
    return true;
}

//analysis
//time big O (n+m)
//space big O (m)

//test
console.log(palindromeMutate(str),'true');
console.log(palindromeMutate(str2),'false');
console.log(palindromeMutate(str3),'true');

//hash table practice

// boolean isPermutationOfPalindrome(String phrase) {
//     int[] table = buildCharFrequencyTable(phrase);
//     return checkMaxOneOdd(table);
// }

//  /* Count how many times each character appears. */
//  int[] buildCharFrequencyTable(String phrase) {
//     int[] table = new int[Character.getNumericValue('z') - Character.getNumericValue('a') + 1]; //new table the length of all lowecase letters
//     for (char c phrase.toCharArray()) { //for loop for all characters in the string
//     int x = getCharNumber(c); //look at function below
//     if (x != -1) { //if not a number
//     table[x]++; //add to the character number
//     }
//     }
//     return table; //return completed table - same as object so far
//    }

//  /* Map each character to a number. a -> 0, b -> 1, c -> 2, etc.
//  * This is case insensitive. Non-letter characters map to -1. */
//  int getCharNumber(Character c) {
//     int a= Character.getNumericValue('a');
//     int z = Character.getNumericValue('z');
//     int val= Character.getNumericValue(c);
//     if (a<= val && val<= z) {
//     return val - a;
//     }
//     return -1;
//     }
// //return character number relatibve to other character codes

// /* Check that no more than one character has an odd count. */
// boolean checkMaxOneOdd(int[] table) {
// boolean foundOdd = false;
// for (int count : table) {//go thru table to see if any odds
//  if (count% 2 == 1) {//if odd exists
//  if (foundOdd) {//if found odd true return true, if more thna one is found it will return false
//  return false; 
//  }
//  foundOdd = true;//and change found odd to true
//  }
//  }
//  return true;
//  }



