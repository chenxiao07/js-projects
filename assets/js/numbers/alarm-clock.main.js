;(function(){
    var $ring         = document.getElementById('ring'        ),
        $inputHour    = document.getElementById('input-hour'  ),
        $inputMinute  = document.getElementById('input-minute'),
        $inputSecond  = document.getElementById('input-second'),
        $btnCountdown = document.getElementById('countdown'   ),
        $btnReset     = document.getElementById('reset'       ),
        intervalId;
    // sync input and value
    function syncInput($input){
        var valueId = $input.id.replace('input-', ''), $value = document.getElementById(valueId);
        $value.value = $input.value;
    }
    function countdown(){
        $ring.pause();
        intervalId = setInterval(function(){
            if ($inputSecond.value === '0'){
                if ($inputMinute.value === '0' && $inputHour.value === '0'){
                    $ring.play();
                    clearInterval(intervalId);
                } else if ($inputMinute.value === '0'){
                    $inputHour.value   = $inputHour.value - 1;
                    $inputMinute.value = 59;
                    $inputSecond.value = 60;
                    syncInput($inputHour);
                    syncInput($inputMinute);
                    syncInput($inputSecond);
                } else {
                    $inputMinute.value = $inputMinute.value - 1;
                    $inputSecond.value = 60;
                    syncInput($inputMinute);
                    syncInput($inputSecond);
                }
            }
            $inputSecond.value -= 1;
            syncInput($inputSecond);
        }, 1000);
    }
    function reset(){
        $ring.pause();
        clearInterval(intervalId);
        $inputHour.value   = 0;
        $inputMinute.value = 1;
        $inputSecond.value = 1;
        syncInput($inputHour  );
        syncInput($inputMinute);
        syncInput($inputSecond);
    }
    reset();
    $inputHour.onchange   = function(){ syncInput(this); };
    $inputMinute.onchange = function(){ syncInput(this); };
    $inputSecond.onchange = function(){ syncInput(this); };
    $btnCountdown.onclick = function(){ countdown(); };
    $btnReset.onclick     = function(){ reset();     };
})();
