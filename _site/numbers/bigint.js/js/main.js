;(function(){
    window.addEventListener('load', function(){
        var operators1, operators2, str1, str2,
            resultInt;
        var $resultArea = document.getElementById('result');

        document.getElementById('plus').addEventListener('click', function(){
            init();
            resultInt = operators1.plus(operators2);
            $resultArea.value = resultInt.originStr;
        });
        document.getElementById('minus').addEventListener('click', function(){
            init();
            resultInt = operators1.minus(operators2);
            $resultArea.value = resultInt.originStr;
        });
        document.getElementById('multiply').addEventListener('click', function(){
            init();
            resultInt = operators1.multiply(operators2);
            $resultArea.value = resultInt.originStr;
        });
        document.getElementById('quotient').addEventListener('click', function(){
            init();
            resultInt = operators1.quotient(operators2);
            $resultArea.value = resultInt.originStr;
        });
        document.getElementById('mod').addEventListener('click', function(){
            init();
            resultInt = operators1.mod(operators2);
            $resultArea.value = resultInt.originStr;
        });

        document.getElementsByTagName('form')[0].onsubmit = function(){
            return false;
        };

        function init(){
            str1 = document.getElementById('operator1').value;
            str2 = document.getElementById('operator2').value;
            console.log(str1, str2);
            operators1 = new BigInt(str1);
            operators2 = new BigInt(str2);
        }
    });
})();