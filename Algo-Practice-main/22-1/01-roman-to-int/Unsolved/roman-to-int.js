// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function(str) {
    let relations = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50, 
        'X': 10,
        'V': 5,
        'I': 1,
        // 'END': -Infinity
    };
    let num = 0;
    let array = str.split('');
    for(let i = 0; i < array.length; i++){
        let currentNumeral = array[i];
        let nextNumeral = array[i+1];
        // if(i===array.length-1){
        //     next = 'END';
        // } 
        let currentValue = relations[currentNumeral];
        let nextValue = relations[nextNumeral];
        if(currentValue<nextValue){
            num-=currentValue;
        } else {
            num+=currentValue;
        } 
    }
    return num;
};
