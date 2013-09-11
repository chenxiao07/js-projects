;(function(){
    UnitConverter.properties.mass = {
        // SI basic unit
        'kilogram': {
            'symbol'    : 'kg',
            'fromBasic' : function(value){ return value; },
            'toBasic'   : function(value){ return value; }
        },
        'gram': {
            'symbol'    : 'g',
            'fromBasic' : function(value){ return value * 1E3; },
            'toBasic'   : function(value){ return value / 1E3; }
        },
        'milligram': {
            'symbol'    : 'mg',
            'fromBasic' : function(value){ return value * 1E6; },
            'toBasic'   : function(value){ return value / 1E6; }
        },
        'microgram': {
            'symbol'    : 'μg',
            'fromBasic' : function(value){ return value * 1E9; },
            'toBasic'   : function(value){ return value / 1E9; }
        },
        'nanogram': {
            'symbol'    : 'ng',
            'fromBasic' : function(value){ return value * 1E12; },
            'toBasic'   : function(value){ return value / 1E12; }
        },
        'megagram': {
            'symbol'    : 'T',
            'fromBasic' : function(value){ return value / 1E3; },
            'toBasic'   : function(value){ return value * 1E3; }
        },
        'danCn': {
            'symbol'    : '担',
            'fromBasic' : function(value){ return value / 50; },
            'toBasic'   : function(value){ return value * 50; }
        },
        'jinCn': {
            'symbol'    : '斤',
            'fromBasic' : function(value){ return value / 0.5; },
            'toBasic'   : function(value){ return value * 0.5; }
        },
        'liangCn': {
            'symbol'    : '两',
            'fromBasic' : function(value){ return value / 0.03125; },
            'toBasic'   : function(value){ return value * 0.03125; }
        },
        'qianCn': {
            'symbol'    : '钱',
            'fromBasic' : function(value){ return value / 0.003125; },
            'toBasic'   : function(value){ return value * 0.003125; }
        },
    };
})();
