;(function(){
    UnitConverter.properties.temperature = {
        // SI basic unit
        'kelvin': {
            'symbol'    : 'K',
            'fromBasic' : function(value){ return value; },
            'toBasic'   : function(value){ return value; }
        },
        'celsius': {
            'symbol'    : 'C',
            'fromBasic' : function(value){ return value - 273.15; },
            'toBasic'   : function(value){ return value + 273.15; }
        },
        'fahrenheit': {
            'symbol'    : 'F',
            'fromBasic' : function(value){ return (value - 273.15) * 9 / 5 + 32; },
            'toBasic'   : function(value){ return (value + 459.67) * 5 / 9;      }
        }
    };
})();
