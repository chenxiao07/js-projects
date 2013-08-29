;(function(){
    window.addEventListener('load', function(){
        var operators1, operators2, str1, str2, resultInt,
            $resultArea = document.getElementById('result');

        var init = function(){
            str1 = document.getElementById('operator1').value;
            str2 = document.getElementById('operator2').value;
            operators1 = new BigInt(str1);
            operators2 = new BigInt(str2);
        };

        document.getElementById('plus').addEventListener('click', function(){
            try {
                init();
                resultInt = operators1.plus(operators2);
                $resultArea.value = resultInt.originStr;
            } catch(err) {
                showError(err);
            }
        });
        document.getElementById('minus').addEventListener('click', function(){
            try {
                init();
                resultInt = operators1.minus(operators2);
                $resultArea.value = resultInt.originStr;
            } catch(err) {
                showError(err);
            }
        });
        document.getElementById('multiply').addEventListener('click', function(){
            try {
                init();
                resultInt = operators1.multiply(operators2);
                $resultArea.value = resultInt.originStr;
            } catch(err) {
                showError(err);
            }
        });
        document.getElementById('quotient').addEventListener('click', function(){
            try {
                init();
                resultInt = operators1.quotient(operators2);
                $resultArea.value = resultInt.originStr;
            } catch(err) {
                showError(err);
            }
        });
        document.getElementById('mod').addEventListener('click', function(){
            try {
                init();
                resultInt = operators1.mod(operators2);
                $resultArea.value = resultInt.originStr;
            } catch(err) {
                showError(err);
            }
        });
        document.getElementsByTagName('form')[0].onsubmit = function(){ return false; };
    });
})();
