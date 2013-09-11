;(function(){
    UnitConverter.properties.length = {
        // SI basic unit
        'metre': {
            'symbol'    : 'm',
            'fromBasic' : function(value){ return value; },
            'toBasic'   : function(value){ return value; }
        },
        'decimetre': {
            'symbol'    : 'dm',
            'fromBasic' : function(value){ return value * 1E1; },
            'toBasic'   : function(value){ return value / 1E1; }
        },
        'centimetre': {
            'symbol'    : 'cm',
            'fromBasic' : function(value){ return value * 1E2; },
            'toBasic'   : function(value){ return value / 1E2; }
        },
        'millimetre': {
            'symbol'    : 'mm',
            'fromBasic' : function(value){ return value * 1E3; },
            'toBasic'   : function(value){ return value / 1E3; }
        },
        'micrometre': {
            'symbol'    : 'µm',
            'fromBasic' : function(value){ return value * 1E6; },
            'toBasic'   : function(value){ return value / 1E6; }
        },
        'nanometre': {
            'symbol'    : 'nm',
            'fromBasic' : function(value){ return value * 1E9; },
            'toBasic'   : function(value){ return value / 1E9; }
        },
        'decametre': {
            'symbol'    : 'dam',
            'fromBasic' : function(value){ return value / 1E1; },
            'toBasic'   : function(value){ return value * 1E1; }
        },
        'hectometre': {
            'symbol'    : 'hm',
            'fromBasic' : function(value){ return value / 1E2; },
            'toBasic'   : function(value){ return value * 1E2; }
        },
        'kilometre': {
            'symbol'    : 'km',
            'fromBasic' : function(value){ return value / 1E3; },
            'toBasic'   : function(value){ return value * 1E3; }
        },
        'cnLi3': {
            'symbol'    : '里',
            'fromBasic' : function(value){ return value / (1E2 * 5); },
            'toBasic'   : function(value){ return value * (1E2 * 5); }
        },
        'cnYin': {
            'symbol'    : '引',
            'fromBasic' : function(value){ return (value / 1E2) * 3; },
            'toBasic'   : function(value){ return (value * 1E2) / 3; }
        },
        'cnZhang': {
            'symbol'    : '丈',
            'fromBasic' : function(value){ return (value / 1E1) * 3; },
            'toBasic'   : function(value){ return (value * 1E1) / 3; }
        },
        'cnChi': {
            'symbol'    : '尺',
            'fromBasic' : function(value){ return value * 3; },
            'toBasic'   : function(value){ return value / 3; }
        },
        'cnCun': {
            'symbol'    : '寸',
            'fromBasic' : function(value){ return value * (1E1 * 3); },
            'toBasic'   : function(value){ return value / (1E1 * 3); }
        },
        'cnFen': {
            'symbol'    : '分',
            'fromBasic' : function(value){ return value * (1E2 * 3); },
            'toBasic'   : function(value){ return value / (1E2 * 3); }
        },
        'cnLi2': {
            'symbol'    : '厘',
            'fromBasic' : function(value){ return value * (1E3 * 3); },
            'toBasic'   : function(value){ return value / (1E3 * 3); }
        },
        'cnHao': {
            'symbol'    : '毫',
            'fromBasic' : function(value){ return value * (1E4 * 3); },
            'toBasic'   : function(value){ return value / (1E4 * 3); }
        },
        'mile': {
            'symbol'    : 'mi',
            'fromBasic' : function(value){ return value / 1609.344; },
            'toBasic'   : function(value){ return value * 1609.344; }
        },
        'furlong': {
            'symbol'    : 'furlong',
            'fromBasic' : function(value){ return value / 201.168; },
            'toBasic'   : function(value){ return value * 201.168; }
        },
        'chain': {
            'symbol'    : 'chain',
            'fromBasic' : function(value){ return value / 20.1168; },
            'toBasic'   : function(value){ return value * 20.1168; }
        },
        'yard': {
            'symbol'    : 'yard',
            'fromBasic' : function(value){ return value / 0.9144; },
            'toBasic'   : function(value){ return value * 0.9144; }
        },
        'foot': {
            'symbol'    : 'ft',
            'fromBasic' : function(value){ return value / 0.3048; },
            'toBasic'   : function(value){ return value * 0.3048; }
        },
        'inch': {
            'symbol'    : 'in',
            'fromBasic' : function(value){ return value / 0.0254; },
            'toBasic'   : function(value){ return value * 0.0254; }
        }
    };
})();
