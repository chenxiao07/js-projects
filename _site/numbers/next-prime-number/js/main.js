;(function(){

    window.addEventListener('load', function(){
        var NextPrime = function(){
            this.currentPrime = 2;
        };
        NextPrime.prototype = {
            next : function(){
                var nextPrime = this.currentPrime + 1;
                while(true){
                    if (this.isPrime(nextPrime) === 1){
                        this.currentPrime = nextPrime;
                        return this.nextPrime;
                    }
                    nextPrime ++;
                }
            },
            isPrime : function(n){
                var i;
                for (i = 2; i * i < (n + 1); i ++){
                    if (n % i === 0){
                        return 0;
                    }
                }
                return 1;
            }
        };

        var nextPrime,
            intervalId   = '',
            intervalTime = 500,
            $resultObj   = document.getElementById('result');

        function _clear(){
            if (intervalId !== ''){
                clearInterval(intervalId);
                intervalId = '';
            }
        }
        function _init(){
            _clear();
            nextPrime = new NextPrime();
            $resultObj.innerHTML = nextPrime.currentPrime;
        }
        function _show(){
            intervalId = setInterval(function(){
                nextPrime.next();
                $resultObj.innerHTML += ', ' + nextPrime.currentPrime;
            }, intervalTime);
        }

        _init();

        document.getElementById('start').addEventListener('click', function(){
            _show();
        });
        document.getElementById('pause').addEventListener('click', function(){
            _clear();
        });
        document.getElementById('stop').addEventListener('click', function(){
            _init();
        });
    });

})();
