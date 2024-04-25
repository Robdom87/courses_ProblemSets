

// var reverseWords = function(s) {
//     let left = 0;
//     let right = 0; 
//     let holder; 
//     for(let i = 0; i < 6; i++){
//         //in this section we do the switch within the word
//         if(s[i]===" "){
//             right=i-1;
//             //right 4, left 0
//             while(right>left){
//                 console.log(s[left],s[right],holder)
//                 holder = s[left];
//                 s[left]=s[right];
//                 s[right]=holder;
//                 right--;
//                 left++;
//             }
//         }
//     }
//     return s;   

// };

// let s = "Let's take LeetCode contest";
// console.log(reverseWords(s));

let nums = [[3], [2], [3], [1], [2], [4], [5], [5], [6], [7], [7], [8], [2], [3], [1], [1], [1], [10], [11], [5], [6], [2], [4], [7], [8], [5], [6]];
function compare(a, b) {
    return a - b;
}
let sorted = [-10, 1, 3, 1, 4, 10, 3, 9, 4, 5, 1].sort(compare);
let kthSorted = [];
// console.log(sorted);
for (let e = sorted.length - 1; sorted.length - 1 - e < 7; e--) {
    kthSorted.unshift(sorted[e]);
}
// console.log(kthSorted)


function sortAndKth(array, num, kth) {
    if (array.length < kth) {
        array.push(num[0]);
        array.sort(compare);
    } else if (array[0] < num[0]) {
        array[0] = num[0];
        array.sort(compare);
    }
    console.log(array, array[0]);
}

for (let i = 0; i < nums.length; i++) {
    sortAndKth(kthSorted, nums[i], 7);
}

1[-10]
2[-10, 1]
3[-10, 1, 3]
4[-10, 1, 3, 1]
5[-10, 1, 3, 1, 4]
6[-10, 1, 3, 1, 4, 10]
7[-10, 1, 3, 1, 4, 10, 3]
8[      9,
    1,       3, 
  3 , 1,   4, 10, 
]
9[
    3, 3, 4, 1,
    4, 10, 9
]
10[
    3, 4, 5, 1,
    4, 10, 9
]
11[
    3, 4, 5, 1,
    4, 10, 9
]
12[
    3, 4, 5, 1,
    4, 10, 9
]
13[
    3, 4, 5, 1,
    4, 10, 9
]
14[
    3, 4, 5, 1,
    4, 10, 9
]
15[
    3, 4, 5, 1,
    4, 10, 9
]
16[
    3, 4, 5, 1,
    4, 10, 9
]
17[
    4, 4, 5, 1,
    4, 10, 9
]
18[
    4, 1, 5, 4,
    5, 10, 9
]
[
    1, 4, 5, 5,
    5, 10, 9
]
[
    4, 5, 6, 5,
    5, 10, 9
]
[
    5, 6, 7, 5,
    5, 10, 9
]
[
    6, 5, 7, 5,
    7, 10, 9
]
[
    5, 7, 8, 5,
    7, 10, 9
]
[
    5, 7, 8, 5,
    7, 10, 9
]
[
    5, 7, 8, 5,
    7, 10, 9
]
[
    5, 7, 8, 5,
    7, 10, 9
]
[
    5, 7, 8, 5,
    7, 10, 9
]
[
    5, 7, 8, 5,
    7, 10, 9
]
[
    7, 8, 9, 5,
    7, 10, 10
]
[
    8, 9, 10, 5,
    7, 10, 11
]
[
    8, 9, 10, 5,
    7, 10, 11
]
[
    8, 9, 10, 5,
    7, 10, 11
]
[
    8, 9, 10, 5,
    7, 10, 11
]
[
    8, 9, 10, 5,
    7, 10, 11
]
[
    8, 9, 10, 5,
    7, 10, 11
]
[
    8, 9, 10, 5,
    7, 10, 11
]
[
    8, 9, 10, 5,
    7, 10, 11
]
[
    8, 9, 10, 5,
    7, 10, 11
]




