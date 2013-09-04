;(function(){
    var $inputString = document.getElementById('input-string'),
        $btnReverse  = document.getElementById('btn-reverse'),
        $result      = document.getElementById('result'),
        inputStr;
    $btnReverse.addEventListener('click', function(){
        inputStr = trim($inputString.value);
        if (Validator.isNull(inputStr)){
            showError('input string is null!');
        } else {
            $result.innerHTML = '';
            $result.innerHTML += inputStr.split('').reverse().join('');
        }
    });
    $inputString.addEventListener('keydown', function(e){
        if (e.keyCode === 13){
            $btnReverse.click();
        }
    });
})();
