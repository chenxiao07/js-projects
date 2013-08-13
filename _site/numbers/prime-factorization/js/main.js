;(function(){
    window.addEventListener('load', function(){
        function isPrime(n){
            var i;
            for (i = 2; i * i < (n + 1); i ++){
                if (n % i === 0){
                    return 0;
                }
            }
            return 1;
        }
        function findPrimeFactorsOf(n){
            n = Math.round(n);
            if (n < 2){
                throw new Error('wrong number');
            }
            var resultArray = [], i;
            for (i = 2; i <= Math.floor(n / 2); i ++){
                if (n % i === 0 && isPrime(i) === 1){
                    resultArray.push(i);
                }
            }
            if (isPrime(n) === 1){
                resultArray.push(n);
            }
            return resultArray;
        }
        document.getElementById('compute').addEventListener('click', function(){
            var length = document.getElementById('length').value;
            document.getElementById('result').innerHTML = '';
            document.getElementById('result').innerHTML = (findPrimeFactorsOf(length).join(', '));
        });
    });
})();
