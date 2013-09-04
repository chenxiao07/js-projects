;(function(){
    var $inputSentence = document.getElementById('input-sentence'),
        $btnConvert    = document.getElementById('btn-convert'),
        $result        = document.getElementById('result'),
        pigLatin       = new PigLatin();
    $btnConvert.addEventListener('click', function(){
        if (Validator.isNull(trim($inputSentence.value))){
            showError('please input a setence!');
        } else {
            $result.innerHTML = pigLatin.convert($inputSentence.value);
        }
    });
})();
