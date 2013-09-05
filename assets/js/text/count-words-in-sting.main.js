;(function(){
    var i,
        $inputString = document.getElementById('input-string'),
        $btnCount    = document.getElementById('btn-count'),
        $result      = document.getElementById('result'),
        wordBreaks   = ['.', ',', ' ', '"', "'", ':', ';', '!', '(', ')'],
        words        = [],
        charList     = [],
        word         = '',
        isInCharList = function(character, list){
            var i;
            for (i = 0; i < list.length; i ++){
                if (character === list[i]){
                    return true;
                }
            }
            return false;
        };
    $btnCount.addEventListener('click', function(){
        inputStr = trim($inputString.value);
        if (Validator.isNull(inputStr)){
            showError('input string is null!');
        } else {
            charList = inputStr.split('');
            for (i = 0; i < charList.length; i ++){
                if (isInCharList(charList[i], wordBreaks)){
                    if (word.length > 0){
                        words.push(word);
                    }
                    word = '';
                } else {
                    word += charList[i];
                }
            }
            if (word.length > 0){
                words.push(word);
            }
        }
        $result.innerHTML  = 'total: ' + words.length + '</br>';
        $result.innerHTML += 'words: ' + words.join(' ');
    });
    $inputString.addEventListener('keydown', function(e){
        if (e.keyCode === 13){
            $btnCount.click();
        }
    });
})();
