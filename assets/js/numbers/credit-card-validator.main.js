;(function(){
    var $inputCardNumber = document.getElementById('input-card-number'),
        $form            = document.getElementById('form-validate-credit-card');
    $inputCardNumber.focus();
    $form.onsubmit = function(){
        if (Validator.isLuhnNumber(this.cardNumber.value)){
            showInfo('This is a valid credit card number: ' + this.cardNumber.value, 'VALIDATION SUCCESS', 'alert-success');
        } else {
            showError('This is an invalid credit card number: ' + this.cardNumber.value, 'VALIDATION FAILED');
        }
        return false;
    };
})();
