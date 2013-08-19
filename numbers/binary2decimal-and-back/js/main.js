;(function(){
    window.addEventListener('load', function(){
        var binaryInt, decimalInt, result;
        $('#btn-binary2decimal').click(function(){
            binaryInt = $('#input-binary').val();
            try {
                result = RadixConvertor.NRadix2decimal(binaryInt, 2);
                $('#result').text('binary int: ' + binaryInt + ' to decimal int: ' + result);
            } catch(err) {
                Logger.log(err, 'alert-danger');
                Logger.show();
            }
        });
        $('#btn-decimal2binary').click(function(){
            decimalInt = $('#input-decimal').val();
            try {
                result = RadixConvertor.decimal2NRadix(decimalInt, 2);
                $('#result').text('decimal int: ' + decimalInt + ' to binary int: ' + result);
            } catch(err) {
                Logger.log(err, 'alert-danger');
                Logger.show();
            }
        });
    });
})();
