// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var caesarCipher = function(str, offset) {
    let letterCase = (charCode)=>{
        if(charCode >64&& charCode<91){
            return 'uppercase';
        } else if (charCode>96&&charCode<123){
            return 'lowercase';
        } else {
            return false;
        }
    };
    let letterBounds = {
        uppercase:{
            upperBound:90,
            lowerBound:64
        },
        lowercase:{
            upperBound:122,
            lowerBound:96
        }
    };
    let ofAdjusted = offset%26;
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++){
        let code = arr[i].charCodeAt();
        let adjusted = code+ofAdjusted;
        let charCase = letterCase(code);
        if(charCase){
            let upper = letterBounds[charCase].upperBound;
            let lower = letterBounds[charCase].lowerBound;
            if(adjusted>upper){
                adjusted=(adjusted-upper)+lower;
            } else if(adjusted<=lower){
                adjusted=(adjusted+upper)-lower;
            }
            arr[i]=String.fromCharCode(adjusted);
        }  
    }
    return arr.join('');
};
