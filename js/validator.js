
!function ($) {
    var Validator = {
        isNumber : function(value){
            return (!isNaN(parseFloat(value)) && isFinite(value));
        },
        isNegative : function(value){
            return (value < 0);
        },
        isBinaryInt : function(value){
            return (!isNaN(parseInt(value, 2)) && isFinite(value));
        },
        isNotNull : function(value){
            if (value !== undefined){
                value = value.replace(/(^\s*)|(\s*$)/g, '');
            }
            return !(value === undefined || value === '');
        },
        isDateTime : function(dateTime){
            var parms  = dateTime.split(/[\.\-\/\ \:T]/);
            var year   = parseInt(parms[0],10);
            var month  = parseInt(parms[1],10);
            var day    = parseInt(parms[2],10);
            var hour   = parseInt(parms[3],10);
            var minute = parseInt(parms[4],10);
            var dt     = new Date(year, month - 1, day, hour, minute);

            return (month  === (dt.getMonth() + 1)
                 && day    === dt.getDate()
                 && year   === dt.getFullYear()
                 && hour   === dt.getHours()
                 && minute === dt.getMinutes()
                );
        }
    };

    window.Validator = Validator;
}(window.jQuery);

