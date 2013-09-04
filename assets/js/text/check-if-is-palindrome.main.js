;(function(){
    var $inputString = document.getElementById('input-string'),
        $btnCheck    = document.getElementById('btn-check'),
        $result      = document.getElementById('result'),
        inputStr;
    $btnCheck.addEventListener('click', function(){
        inputStr = trim($inputString.value);
        if (Validator.isNull(inputStr)){
            showError('input string is null!');
        } else {
            var reverseStr = inputStr.split('').reverse().join('');
            $result.innerHTML = (reverseStr === inputStr) ? 'Yes' : 'No';
        }
    });
    $inputString.addEventListener('keydown', function(e){
        if (e.keyCode === 13){
            $btnCheck.click();
        }
    });
})();
