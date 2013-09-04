;(function(exports){
    "use strict";
    var CharCounter = function(){
        this.targetChars = [];
        this.resultJSON  = {};
        this.resultCount = 0;
    };
    CharCounter.prototype = {
        'isInCharList': function(character, list){
            var i;
            for (i = 0; i < list.length; i ++){
                if (character === list[i]){
                    return true;
                }
            }
            return false;
        },
        'setTargetChars': function(chars){
            this.targetChars = chars;
            this.resultJSON  = {};
            this.resultCount = 0;
            var i;
            for (i = 0; i < chars.length; i ++){
                this.resultJSON[chars[i]] = 0;
            }
        },
        'count': function(string){
            var charList = string.split(''), i;
            for (i = 0; i < charList.length; i ++){
                if (this.isInCharList(charList[i], this.targetChars)){
                    this.resultJSON[charList[i]] += 1;
                    this.resultCount += 1;
                }
            }
        }
    };
    exports.CharCounter = CharCounter;
})(typeof exports !== 'undefined' ? exports : this);
