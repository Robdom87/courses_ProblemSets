// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var magazine = 'hello world';
var flyer = 'hello';
var magazine2 = 'Whats so amazing that keeps us stargazing';
var flyer2 = 'stargazing whats keeps us so amazing';

var concertFlyer = function (magazine, flyer) {
    let wordsMagArr = magazine.split(' ');
    let wordsFlyArr = flyer.split(' ');
    if (wordsFlyArr.length > wordsMagArr.length){
        return false;
    }
    let wordMap = {};
    for (let magWord of wordsMagArr){
        wordMap[magWord]? wordMap[magWord]+=1:wordMap[magWord]=1
        } 
    for (let flyWord of wordsFlyArr){
        if ( wordMap[flyWord]){
            wordMap[flyWord] -= 1;
            if (wordMap[flyWord]<0){
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};


//test
console.log(concertFlyer(magazine,flyer),'true');
console.log(concertFlyer(magazine2,flyer2),'false');