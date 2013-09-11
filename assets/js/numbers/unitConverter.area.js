;(function(){
    UnitConverter.properties.area = {
        // SI basic unit
        'squareMetre': {
            'symbol'    : 'm2',
            'fromBasic' : function(value){ return value; },
            'toBasic'   : function(value){ return value; }
        },
        'squareDecimetre': {
            'symbol'    : 'dm2',
            'fromBasic' : function(value){ return value * 1E2; },
            'toBasic'   : function(value){ return value / 1E2; }
        },
        'squareCentmetre': {
            'symbol'    : 'cm2',
            'fromBasic' : function(value){ return value * 1E4; },
            'toBasic'   : function(value){ return value / 1E4; }
        },
        'squareMillimetre': {
            'symbol'    : 'mm2',
            'fromBasic' : function(value){ return value * 1E6; },
            'toBasic'   : function(value){ return value / 1E6; }
        },
        'are': {
            'symbol'    : 'a',
            'fromBasic' : function(value){ return value / 1E2; },
            'toBasic'   : function(value){ return value * 1E2; }
        },
        'hectare': {
            'symbol'    : 'ha',
            'fromBasic' : function(value){ return value / 1E4; },
            'toBasic'   : function(value){ return value * 1E4; }
        },
        'squareKilometre': {
            'symbol'    : 'km2',
            'fromBasic' : function(value){ return value / 1E6; },
            'toBasic'   : function(value){ return value * 1E6; }
        },
        'acreInternational': {
            'symbol'    : 'ac-international',
            'fromBasic' : function(value){ return value / 4046.8564224; },
            'toBasic'   : function(value){ return value * 4046.8564224; }
        },
        'acreUS': {
            'symbol'    : 'ac-us',
            'fromBasic' : function(value){ return value / 4046.873; },
            'toBasic'   : function(value){ return value * 4046.873; }
        },
        'squareChainInternational': {
            'symbol'    : 'sq-ch-international',
            'fromBasic' : function(value){ return value / 404.68564224; },
            'toBasic'   : function(value){ return value * 404.68564224; }
        },
        'squareChainUS': {
            'symbol'    : 'ch2-us',
            'fromBasic' : function(value){ return value / 404.6873; },
            'toBasic'   : function(value){ return value * 404.6873; }
        },
        'squareFootInternational': {
            'symbol'    : 'ft2-international',
            'fromBasic' : function(value){ return value / (9.290304 * 1E-2); },
            'toBasic'   : function(value){ return value * (9.290304 * 1E-2); }
        },
        'squareFootUS': {
            'symbol'    : 'ft2-us',
            'fromBasic' : function(value){ return value / (9.29034116132749 * 1E-2); },
            'toBasic'   : function(value){ return value * (9.29034116132749 * 1E-2); }
        },
        'squareLinkInternational': {
            'symbol'    : 'lnk2-international',
            'fromBasic' : function(value){ return value / (4.0468564224 * 1E-2); },
            'toBasic'   : function(value){ return value * (4.0468564224 * 1E-2); }
        },
        'squareLinkUS': {
            'symbol'    : 'lnk2-us',
            'fromBasic' : function(value){ return value / (4.046872 * 1E-2); },
            'toBasic'   : function(value){ return value * (4.046872 * 1E-2); }
        },
        'squareMileInternational': {
            'symbol'    : 'mi2-international',
            'fromBasic' : function(value){ return value / (2.589988110336 * 1E6); },
            'toBasic'   : function(value){ return value * (2.589988110336 * 1E6); }
        },
        'squareMileUS': {
            'symbol'    : 'mi2-us',
            'fromBasic' : function(value){ return value / (2.58999847 * 1E6); },
            'toBasic'   : function(value){ return value * (2.58999847 * 1E6); }
        },
        'squareYard': {
            'symbol'    : 'yd2',
            'fromBasic' : function(value){ return value / 0.83612736; },
            'toBasic'   : function(value){ return value * 0.83612736; }
        },
    };
})();
