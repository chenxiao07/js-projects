;(function(){
    var $inputString = document.getElementById('input-string'),
        $btnCount    = document.getElementById('btn-count'),
        $result      = document.getElementById('result'),
        charCounter  = new CharCounter();
        vowels       = ['a', 'e', 'i', 'o', 'u'];
    charCounter.setTargetChars(vowels);
    $btnCount.addEventListener('click', function(){
        inputStr = trim($inputString.value);
        if (Validator.isNull(inputStr)){
            showError('input string is null!');
        } else {
            charCounter.count(inputStr);
            $result.innerHTML = '';
            $result.innerHTML += 'total: ' + charCounter.resultCount + '<br>';
            $result.innerHTML += json2html(charCounter.resultJSON);
        }
    });
    $inputString.addEventListener('keydown', function(e){
        if (e.keyCode === 13){
            $btnCount.click();
        }
    });
})();
