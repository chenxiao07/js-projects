;(function(){
    var $btnCompute  = document.getElementById('btn-compute'),
        $inputPrice  = document.getElementById('input-price'),
        $inputRate   = document.getElementById('input-rate'),
        $resultTax   = document.getElementById('result-tax'),
        $resultTotal = document.getElementById('result-total'),
        price, rate;
    $btnCompute.addEventListener('click', function(){
        price = parseFloat($inputPrice.value);
        rate  = parseFloat($inputRate.value) / 100;
        $resultTax.innerHTML   = 'tax: '   + price * rate;
        $resultTotal.innerHTML = 'total: ' + price * (1 + rate);
    });
})();
