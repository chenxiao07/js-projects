
;(function(exports){
    "use strict";

    var CONST = {
        valOfDigit : {
            '0' : 0,
            '1' : 1,
            '2' : 2,
            '3' : 3,
            '4' : 4,
            '5' : 5,
            '6' : 6,
            '7' : 7,
            '8' : 8,
            '9' : 9,
            'A' : 10,
            'B' : 11,
            'C' : 12,
            'D' : 13,
            'E' : 14,
            'F' : 15,
            'G' : 16,
            'H' : 17,
            'I' : 18,
            'J' : 19,
            'K' : 20,
            'L' : 21,
            'M' : 22,
            'N' : 23,
            'O' : 24,
            'P' : 25,
            'Q' : 26,
            'R' : 27,
            'S' : 28,
            'T' : 29,
            'U' : 30,
            'V' : 31,
            'W' : 32,
            'X' : 33,
            'Y' : 34,
            'Z' : 35
        } // max 36-radix numbers
    };
    CONST.digitOfVal = {};
    var key;
    for (key in CONST.valOfDigit){
        if (CONST.valOfDigit.hasOwnProperty(key)){
            CONST.digitOfVal[CONST.valOfDigit[key]] = key;
        }
    }

    function _checkRadix(radix){
        return (radix > 1 && radix < 36);
    }
    function _checkNumberOfRadix(number, radix){
        var isLegal = true, i, digit;
        for (i = 0; i < number.length; i ++){
            digit = number.charAt(i);
            if (!CONST.valOfDigit.hasOwnProperty(digit)
                || CONST.valOfDigit[digit] >= CONST.valOfDigit[radix]){
                isLegal = false;
                break;
            }
        }
        return isLegal;
    }

    var RadixConvertor = {
        decimal2NRadix : function(number, radix){
            if (!_checkRadix(radix) || !_checkNumberOfRadix(number, 10)){
                throw new Error('radix or number is wrong');
            }
            number = parseInt(number, 10);
            var resultArray = [], val;
            while(true){
                if ((number / radix) !== 0){
                    val = number % radix;
                    resultArray.push(CONST.digitOfVal[val]);
                    number = Math.floor(number / radix);
                } else {
                    break;
                }
            }
            resultArray = resultArray.reverse();
            return resultArray.join('');
        },
        NRadix2decimal : function(number, radix){
            if (!_checkRadix(radix) || !_checkNumberOfRadix(number, radix)){
                throw new Error('radix or number is wrong');
            }
            var currentExponentiation = 1 , result = 0 , i;
            for (i = number.length - 1; i >= 0; i --){
                result += CONST.valOfDigit[number.charAt(i)] * currentExponentiation;
                currentExponentiation *= radix;
            }
            return result;
        }
    };

    exports.RadixConvertor = RadixConvertor;
})(typeof exports !== 'undefined' ? exports : this);

