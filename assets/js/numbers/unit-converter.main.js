;(function(){
    var $property = document.getElementById('select-property'),
        $unitA    = document.getElementById('select-unitA'),
        $unitB    = document.getElementById('select-unitB'),
        $numberA  = document.getElementById('input-numberA'),
        $numberB  = document.getElementById('input-numberB'),
        $btnA2B   = document.getElementById('btn-A2B'),
        $btnB2A   = document.getElementById('btn-B2A'),
        insertSelectOption = function($select, option){
            var addHTML    = '<option value="' + option.value + '">' + option.html + '</option>',
                originHTML = $select.innerHTML || '';
            $select.innerHTML = originHTML + addHTML;
        },
        insertPropertyOptions = function($select, properties){
            var key;
            for (key in properties){
                if (properties.hasOwnProperty(key)){
                    insertSelectOption($select, {
                        value: key,
                        html : key
                    });
                }
            }
        }, insertUnitsOptions  = function($select, units){
            var key;
            for (key in units){
                if (units.hasOwnProperty(key)){
                    insertSelectOption($select, {
                        value: key,
                        html : units[key].symbol
                    });
                }
            }
        }, initUnits = function(){
            $unitA.innerHTML = '';
            $unitB.innerHTML = '';
            insertUnitsOptions($unitA, UnitConverter.properties[$property.value]);
            insertUnitsOptions($unitB, UnitConverter.properties[$property.value]);
        }, convertUnit = function(property, fromUnit, toUnit, $fromInput, $toInput){
            var toValue = UnitConverter.convert(property, fromUnit, toUnit, $fromInput.value);
            $toInput.value = toValue;
        };

    insertPropertyOptions($property, UnitConverter.properties);
    initUnits();
    $property.onchange = function(){
        initUnits();
    };
    $btnA2B.onclick = function(){
        convertUnit($property.value, $unitA.value, $unitB.value, $numberA, $numberB);
    };
    $numberA.onkeyup = function(e){
        if (e.keyCode === 13){
            $btnA2B.click();
        }
    };
    $btnB2A.onclick = function(){
        convertUnit($property.value, $unitB.value, $unitA.value, $numberB, $numberA);
    };
    $numberB.onkeyup = function(e){
        if (e.keyCode === 13){
            $btnB2A.click();
        }
    };
})();
