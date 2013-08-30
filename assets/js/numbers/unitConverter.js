;(function(exports){
    "use strict";
    var UnitConverter = function(){
        this.properties = {};
    };
    UnitConverter.prototype = {
        convert : function(property, fromUnit, toUnit, fromValue){
            var basicValue, toValue;
            fromValue  = parseFloat(fromValue);
            basicValue = this.properties[property][fromUnit].toBasic(fromValue);
            toValue    = this.properties[property][toUnit].fromBasic(basicValue);
            return toValue;
        }
    };
    exports.UnitConverter = new UnitConverter();
})(typeof exports !== 'undefined' ? exports : this);
