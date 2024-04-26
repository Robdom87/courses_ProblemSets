// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

var str1 = "} )";
var str2 = "{ } [ ( [] ) ]";
var str3 = "( [ ) ]";

//rules
//if theres is a starting ({{ there has to be a }})
//order matters

const validBrackets = function (str) {
    let starting = ['(', '{', '['];
    let ending = [')', '}', ']'];
    let relationObj = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    let arr = str.split('');
    let queue = [];
    for (let bracket of arr) {
        if (ending.includes(bracket)) {
            let queueStart = queue.pop();
            if (relationObj[queueStart] !== bracket) {
                return false;
            }
        } else if (starting.includes(bracket)) {
            queue.push(bracket);
        }
    }
    if (queue.length) {
        return false;
    }
    return true;
};

//didnt need current if already tracking with array

console.log(validBrackets(str1), 'true');
// console.log(validBrackets(str2),'true');
// console.log(validBrackets(str3),'false');

