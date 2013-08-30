;(function(){
    UnitConverter.properties.volume = {
        // SI basic unit
        'cubicMetre': {
            'symbol'    : 'm3',
            'fromBasic' : function(value){ return value; },
            'toBasic'   : function(value){ return value; }
        },
        'litre': {
            'symbol'    : 'l',
            'fromBasic' : function(value){ return value * Math.pow(10, 3); },
            'toBasic'   : function(value){ return value / Math.pow(10, 3); }
        },
        'millilitre': {
            'symbol'    : 'ml',
            'fromBasic' : function(value){ return value * Math.pow(10, 6); },
            'toBasic'   : function(value){ return value / Math.pow(10, 6); }
        },
        'lambda': {
            'symbol'    : 'λ',
            'fromBasic' : function(value){ return value * Math.pow(10, 9); },
            'toBasic'   : function(value){ return value / Math.pow(10, 9); }
        },
        'acreFoot': {
            'symbol'    : 'ac-ft',
            'fromBasic' : function(value){ return value / 1233.48183754752; },
            'toBasic'   : function(value){ return value * 1233.48183754752; }
        },
        'acreInch': {
            'symbol'    : 'ac-in',
            'fromBasic' : function(value){ return value / 102.79015312896; },
            'toBasic'   : function(value){ return value * 102.79015312896; }
        },
        'barrelEngland': {
            'symbol'    : 'bl-en',
            'fromBasic' : function(value){ return value / 0.16365924; },
            'toBasic'   : function(value){ return value * 0.16365924; }
        },
        'barrelDryUS': {
            'symbol'    : 'bl-dry-us',
            'fromBasic' : function(value){ return value / 0.115628198985075; },
            'toBasic'   : function(value){ return value * 0.115628198985075; }
        },
        'barrelFluidUS': {
            'symbol'    : 'bl-fl-us',
            'fromBasic' : function(value){ return value / 0.119240471196; },
            'toBasic'   : function(value){ return value * 0.119240471196; }
        },
        'boardFoot': {
            'symbol'    : 'fbm',
            'fromBasic' : function(value){ return (value * Math.pow(10, 3)) / 2.359737216; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 3)) * 2.359737216; }
        },
        'bucket': {
            'symbol'    : 'bkt',
            'fromBasic' : function(value){ return value / 0.01818436; },
            'toBasic'   : function(value){ return value * 0.01818436; }
        },
        'bushelEngland': {
            'symbol'    : 'bu-en',
            'fromBasic' : function(value){ return value / 0.03636872; },
            'toBasic'   : function(value){ return value * 0.03636872; }
        },
        'bushelDryHeapedUS': {
            'symbol'    : 'bu-dry-heaped-us',
            'fromBasic' : function(value){ return value / 0.0440488377086; },
            'toBasic'   : function(value){ return value * 0.0440488377086; }
        },
        'bushelDryLevelUS': {
            'symbol'    : 'bu-dry-level-us',
            'fromBasic' : function(value){ return value / 0.03523907016688; },
            'toBasic'   : function(value){ return value * 0.03523907016688; }
        },
        'cubicFathom': {
            'symbol'    : 'fm3',
            'fromBasic' : function(value){ return value / 6.116438863872; },
            'toBasic'   : function(value){ return value * 6.116438863872; }
        },
        'cubicFoot': {
            'symbol'    : 'ft3',
            'fromBasic' : function(value){ return value / 0.028316846592; },
            'toBasic'   : function(value){ return value * 0.028316846592; }
        },
        'cubicInch': {
            'symbol'    : 'in3',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 16.387064; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 16.387064; }
        },
        'cubicMile': {
            'symbol'    : 'mi3',
            'fromBasic' : function(value){ return value / 4168181825.440579584; },
            'toBasic'   : function(value){ return value * 4168181825.440579584; }
        },
        'cubicYard': {
            'symbol'    : 'yd3',
            'fromBasic' : function(value){ return value / 0.764554857984; },
            'toBasic'   : function(value){ return value * 0.764554857984; }
        },
        'cup': {
            'symbol'    : 'c',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 250; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 250; }
        },
        'gallonBeer': {
            'symbol'    : 'gal-beer',
            'fromBasic' : function(value){ return (value * Math.pow(10, 3)) / 4.621152048; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 3)) * 4.621152048; }
        },
        'gallonEngland': {
            'symbol'    : 'gal-en',
            'fromBasic' : function(value){ return (value * Math.pow(10, 3)) / 4.54609; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 3)) * 4.54609; }
        },
        'gallonDryUS': {
            'symbol'    : 'gal-dry-us',
            'fromBasic' : function(value){ return (value * Math.pow(10, 3)) / 4.40488377086; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 3)) * 4.40488377086; }
        },
        'gallonFluidUS': {
            'symbol'    : 'gal-fluid-us',
            'fromBasic' : function(value){ return (value * Math.pow(10, 3)) / 3.785411784; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 3)) * 3.785411784; }
        },
        'gillEngland': {
            'symbol'    : 'gi-en',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 142.0653125; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 142.0653125; }
        },
        'gillUS': {
            'symbol'    : 'gi-us',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 118.29411825; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 118.29411825; }
        },
        'ounceFluidImperial': {
            'symbol'    : 'oz-fl-imp',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 28.4130625; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 28.4130625; }
        },
        'ounceFluidUSCustomary': {
            'symbol'    : 'oz-fl-us-ct',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 29.5735295625; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 29.5735295625; }
        },
        'ounceFluidUSFood': {
            'symbol'    : 'oz-fl-us-fd',
            'fromBasic' : function(value){ return (value * Math.pow(10, 5)) / 3; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 5)) * 3; }
        },
        'pintImp': {
            'symbol'    : 'pt-imp',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 568.26125; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 568.26125; }
        },
        'pintDryUS': {
            'symbol'    : 'pt-dry-us',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 550.6104713575; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 550.6104713575; }
        },
        'pintFluidUS': {
            'symbol'    : 'pt-fl-us',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 473.176473; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 473.176473; }
        },
        'quartImp': {
            'symbol'    : 'qt-imp',
            'fromBasic' : function(value){ return (value * Math.pow(10, 3)) / 1.1365225; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 3)) * 1.1365225; }
        },
        'quartDryUS': {
            'symbol'    : 'qt-dry-us',
            'fromBasic' : function(value){ return (value * Math.pow(10, 3)) / 1.101220942715; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 3)) * 1.101220942715; }
        },
        'quartFluidUS': {
            'symbol'    : 'qt-fl-us',
            'fromBasic' : function(value){ return (value * Math.pow(10, 6)) / 946.352946; },
            'toBasic'   : function(value){ return (value / Math.pow(10, 6)) * 946.352946; }
        }
    };
})();
