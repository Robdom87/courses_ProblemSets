// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    let reversed = [];
    let strArr = str.split('');
    for (let i = strArr.length -1; i >= 0; i--){
        reversed.push(strArr[i]);
    }
    return reversed.join('');
};
