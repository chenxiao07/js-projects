;(function(exports){
    "use strict";
    var PigLatin = function(){
        this.vowels         = ['a', 'e', 'i', 'o', 'u'];
        this.wordBreaks     = ['.', ',', ' ', '"', "'", ':', ';', '!', '(', ')'];
        this.suffix         = 'ay';
        this.suffixForVowel = 'way';
    };
    PigLatin.prototype = {
        'isInCharList': function(character, list){
            // for performance, do not use regexp
            var i;
            for (i = 0; i < list.length; i ++){
                if (character === list[i]){
                    return true;
                }
            }
            return false;
        },
        'segmentation': function(sentence){
            var charList = sentence.split(''), resultWords = [], tempStr = '', i;
            for (i = 0; i < charList.length; i ++){
                if (this.isInCharList(charList[i], this.wordBreaks)){
                    if (tempStr !== ''){
                        resultWords.push(tempStr);
                    }
                    tempStr = '';
                    resultWords.push(charList[i]);
                } else {
                    tempStr += charList[i];
                }
            }
            if (tempStr !== ''){
                resultWords.push(tempStr);
            }
            return resultWords;
        },
        'convertWord': function(word){
            if (word.length < 2){ // for punctuations or one-char words
                return word;
            }
            if (this.isInCharList(word.charAt(0), this.vowels)){
                return word + this.suffixForVowel;
            }
            var charList   = word.split(''),
                suffixList = [charList[0]],
                prefixList = [],
                vowelList  = this.vowels.slice(0),
                i;
            vowelList.push('y');
            for (i = 1; i < charList.length; i ++){
                if (this.isInCharList(charList[i], vowelList)){
                    prefixList = charList.slice(i);
                    break;
                }
                suffixList.push(charList[i]);
            }
            return prefixList.concat(suffixList).join('') + this.suffix;
        },
        'convert': function(sentence){
            var words = this.segmentation(sentence),
                resultSentence = '', i;
            for (i = 0; i < words.length; i ++){
                resultSentence += this.convertWord(words[i]);
            }
            return resultSentence;
        }
    };
    exports.PigLatin = PigLatin;
})(typeof exports !== 'undefined' ? exports : this);
