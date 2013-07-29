
;(function(exports){
"use strict";

    // faster than 'array.reverse()', 'for swap', 'XOR swap'...
    // for more detail: http://jsperf.com/js-array-reverse-vs-while-loop/5
    function _reverse(array){
        var length = array.length;
        for (length -= 2; length >= 0; length --){
            array.push(array[length]);
            array.splice(length, 1);
        }
        return array;
    }
    function _removeFirstZeros(array){
        while (true){
            if (array[0] === 0){
                array.shift();
            } else {
                break;
            }
        }
    }
    function _compareArray(array1, array2){
        var i, result = 0;
        if (array1.length === array2.length){
            for (i = 0; i < array1.length; i ++){
                if (array1[i] > array2[i]){
                    result = 1;
                    break;
                } else if (array1[i] < array2[i]){
                    result = -1;
                    break;
                }
            }
        } else {
            result = (array1.length > array2.length) ? 1 : -1;
        }
        return result;
    }
    function _add(array1, array2){
        var resultDigits = [],
            carray       = 0,
            operators1   = (array1.length > array2.length) ? array1 : array2,
            operators2   = (array1.length > array2.length) ? array2 : array1,
            currentDigit, i, j;
        for (i = operators1.length - 1, j = operators2.length - 1; i > -1; i --, j --){
            var operator = (j > -1) ? operators2[j] : 0;
            currentDigit = operators1[i] + operator + carray;
            carray       = Math.floor(currentDigit / 10);
            resultDigits.push(currentDigit % 10);
        }
        if (carray === 1){
            resultDigits.push(carray);
        }
        return _reverse(resultDigits);
    }
    function _minus(array1, array2){
        var resultDigits = [],
            borrowed     = 0,
            currentDigit, i, j, operator;
        for (i = array1.length - 1, j = array2.length - 1; i > -1; i --, j --){
            array1[i] -= borrowed;
            operator   = (j > -1) ? array2[j] : 0;
            borrowed   = 0;
            if (array1[i] < operator){
                borrowed   = 1;
                array1[i] += 10;
            }
            resultDigits.push(array1[i] - operator);
        }
        return _reverse(resultDigits);
    }
    function _multiply(array1, array2){
        var resultDigits        = [],
            currentResultDigits = [],
            operators1          = (array1.length > array2.length) ? array1 : array2,
            operators2          = (array1.length > array2.length) ? array2 : array1,
            temp, currentDigit, carray, i, j;
        for (i = operators2.length - 1; i > -1; i --){
            carray = 0;
            currentResultDigits = [];
            for (j = i; j < operators2.length - 1; j ++){
                currentResultDigits.push(0);
            }
            for (j = operators1.length - 1; j > -1; j --){
                temp         = operators2[i] * operators1[j] + carray;
                currentDigit = temp % 10;
                carray       = Math.floor(temp / 10);
                currentResultDigits.push(currentDigit);
            }
            if (carray !== 0){
                currentResultDigits.push(carray);
            }
            resultDigits = _add(resultDigits, _reverse(currentResultDigits));
        }
        return resultDigits;
    }
    function _divide(array1, array2){
        var result  = {
                quotientDigits  : [],
                remainderDigits : []
            },
            length1 = array1.length,
            length2 = array2.length,
            tempArray, i, currentDigit;
        tempArray = array1.slice(0, length2 - 1);
        for (i = length2 - 1; i < length1; i ++){
            currentDigit = 0;
            tempArray.push(array1[i]);
            while (_compareArray(tempArray, array2) >= 0){
                _removeFirstZeros(tempArray);
                currentDigit += 1;
                tempArray     = _minus(tempArray, array2);
            }
            result.quotientDigits.push(currentDigit);
        }
        result.remainderDigits = (tempArray.length === 0) ? [0] : tempArray;
        return result;
    }

    var BigInt = function(str){
        this.digits     = []     ;
        this.isNegative = 0      ;
        this.version    = '0.01' ;
        this.originStr  = ''     ;

        if (!str || !str.match(/^-?[0-9]\d*$/)){
            throw new Error('BigInt Error: Format not currect: ' + str);
        }

        if (str.charAt(0) === '-'){
            this.isNegative = 1;
            str = str.slice(1);
        }

        str = str.replace(/^0+/g, '');
        str = (str.length === 0) ? '0' : str;
        var i;
        for (i = 0; i < str.length; i ++){
            this.digits.push(Math.round(str.charAt(i)));
        }
        this.originStr = this.isNegative ? '-' + str : str;
    };

    BigInt.prototype = {
        clone : function(){
            return new BigInt(this.originStr);
        },
        // - this
        complement : function(){
            return (this.isNegative === 1)
                 ? new BigInt(this.originStr.slice(1))
                 : new BigInt('-' + this.originStr);
        },

        compare : function(that){
            if (this.isNegative !== that.isNegative){
                return this.isNegative ? -1 : 1;
            }
            var result = this.compareDigits(that);
            if (this.isNegative){
                result = -result;
            }
            return result;
        },
        compareDigits : function(that){
            return _compareArray(this.digits, that.digits);
        },

        // this / that
        // TODO use faster algrithm
        divide : function(that){
            var result = {
                    quotientDigits  : [],
                    remainderDigits : []
                },
                isNegative          = (this.isNegative === that.isNegative) ? 0 : 1,
                compareDigitsResult = this.compareDigits(that);
            if (that.digits.length === 1 && that.digits[0] === 0){
                throw new Error('BigInt Error: Cannot be divided by ZERO');
            }
            if (compareDigitsResult === 0){
                result.quotientDigits.push(1);
                result.remainderDigits.push(0);
            } else if (compareDigitsResult < 0){
                result.quotientDigits.push(0);
                result.remainderDigits = this.digits;
            } else {
                result = _divide(this.digits, that.digits);
            }
            return {
                quotient  : isNegative ? new BigInt('-' + result.quotientDigits.join(''))
                                       : new BigInt(result.quotientDigits.join('')),
                remainder : this.isNegative ? new BigInt('-' + result.remainderDigits.join(''))
                                            : new BigInt(result.remainderDigits.join(''))
            };
        },
        // this - that
        minus : function(that){
            if (this.isNegative !== that.isNegative){
                return this.plus(that.complement());
            }
            var compareResult       = this.compare(that),
                compareDigitsResult = this.compareDigits(that);
            if (compareResult === 0){
                return new BigInt('0');
            }
            var isNegative   = (compareResult === 1) ? 0 : 1,
                resultDigits = (compareDigitsResult === 1)
                             ? _minus(this.digits, that.digits)
                             : _minus(that.digits, this.digits);

            return isNegative
                 ? new BigInt('-' + resultDigits.join(''))
                 : new BigInt(resultDigits.join(''));
        },
        // this % that
        mod : function(that){
            var resultDigits = [],
                isNegative;
            _reverse(resultDigits);
            return isNegative
                 ? new BigInt('-' + resultDigits.join(''))
                 : new BigInt(resultDigits.join(''));
        },
        // this * that
        // TODO use faster algrithm, like FFT.
        multiply : function(that){
            var resultDigits = [],
                isNegative   = (this.isNegative === that.isNegative) ? 0 : 1;
            resultDigits = _multiply(this.digits, that.digits);
            return isNegative
                 ? new BigInt('-' + resultDigits.join(''))
                 : new BigInt(resultDigits.join(''));
        },
        // this + that
        plus : function(that){
            if (this.isNegative !== that.isNegative){
                return (this.isNegative)
                     ? that.minus(this.complement())
                     : this.minus(that.complement());
            }
            var isNegative   = this.isNegative,
                resultDigits = _add(this.digits, that.digits);
            return isNegative
                 ? new BigInt('-' + resultDigits.join(''))
                 : new BigInt(resultDigits.join(''));
        }
    };

    exports.BigInt = BigInt;
})(typeof exports !== 'undefined' ? exports : this);

