;(function(){
    window.addEventListener('load', function(){
        var binaryInt, decimalInt, result;
        $('#btn-binary2decimal').click(function(){
            binaryInt = $('#input-binary').val();
            try {
                result = RadixConvertor.NRadix2decimal(binaryInt, 2);
                $('#result').html('binary int: <br>' + binaryInt + '<br> to decimal int: <br>' + result);
            } catch(err) {
                showError(err);
            }
        });
        $('#btn-decimal2binary').click(function(){
            decimalInt = $('#input-decimal').val();
            try {
                result = RadixConvertor.decimal2NRadix(decimalInt, 2);
                $('#result').html('decimal int: <br>' + decimalInt + '<br> to binary int: <br>' + result);
            } catch(err) {
                showError(err);
            }
        });
    });
})();
