// Write a function that takes in an integer and returns it as a Roman numeral string

var intToRoman = function (num) {
    let int = parseInt(`${num}`);
    let roman = '';
    let rpbI = 0;
    let rbpArr = [
        { bp: 1000, numeral: "M" },
        { bp: 900, numeral: "CM" },
        { bp: 500, numeral: "D" },
        { bp: 400, numeral: "CD" },
        { bp: 100, numeral: 'C' },
        { bp: 90, numeral: 'XC' },
        { bp: 50, numeral: 'L' },
        { bp: 40, numeral: 'XL' },
        { bp: 10, numeral: 'X' },
        { bp: 9, numeral: 'IX' },
        { bp: 5, numeral: 'V' },
        { bp: 4, numeral: 'IV' },
        { bp: 1, numeral: 'I' }
    ];
    while(int > 0){
        if((int/rbpArr[rpbI].bp)>=1){
            roman+=rbpArr[rpbI].numeral;
            int-=rbpArr[rpbI].bp;
        } else {
            rpbI++;
        }
    }
    return roman;
};
