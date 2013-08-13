;(function(){
    window.addEventListener('load', function(){
        function fibonacciSequenceNonRecursion(n){
            if (n === 0){
                return [0];
            }
            if (n === 1){
                return [0, 1];
            }
            var result = [0, 1], i;
            for (i = 2; i <= n; i ++){
                result.push(result[i - 1] + result[i - 2]);
            }
            return result;
        }
        function fibonacciSequenceRecursion(n){
            if (n === 0){
                return 0;
            }
            if (n === 1){
                return 1;
            }
            return fibonacciSequenceRecursion(n - 1)
                 + fibonacciSequenceRecursion(n - 2);
        }

        function fibonacciSequence(n, type){
            if (n < 0){
                throw new Error('wrong length');
            }
            // normal
            if (type === 1){
                return fibonacciSequenceNonRecursion(n);
            }
            if (type === 2){
                var resultArray = [], i;
                for (i = 0; i <= n; i ++){
                    resultArray[i] = fibonacciSequenceRecursion(i);
                }
                return resultArray;
            }
            throw new Error('wrong type');
        }

        document.getElementById('compute-normal').addEventListener('click', function(){
            var length = document.getElementById('length').value;
            document.getElementById('result').innerHTML = '';
            document.getElementById('result').innerHTML = (fibonacciSequence(length, 1).join(', '));
        });
        document.getElementById('compute-recursion').addEventListener('click', function(){
            var length = document.getElementById('length').value;
            document.getElementById('result').innerHTML = '';
            document.getElementById('result').innerHTML = (fibonacciSequence(length, 2).join(', '));
        });
    });
})();
