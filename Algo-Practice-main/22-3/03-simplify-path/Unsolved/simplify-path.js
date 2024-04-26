// Write a function that takes in an absolute file path and simplifies it
let examples = "/home/";

var simplifyPath = function(path) {
    let noSlash = path.split('/');
    let simpleArr = [];
    for(let path of noSlash){
        // console.log(path);
        if (path==='..'){
            simpleArr.pop();
        } else if(path!=='.'&& path!==''){
            simpleArr.push(path);
        }
    }
    // return simpleArr;
    let simpleJoin = simpleArr.join('/');
    return '/'+simpleJoin;
};

console.log(simplifyPath(examples));