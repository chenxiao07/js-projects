;(function(){
    window.addEventListener('load', function(){
        var nameForAmounts = {
            10000: '100元',
            5000 : '50元 ',
            2000 : '20元 ',
            1000 : '10元 ',
            500  : '5元  ',
            200  : '2元  ',
            100  : '1元  ',
            50   : '5角  ',
            20   : '2角  ',
            10   : '1角  ',
            5    : '5分  ',
            2    : '2分  ',
            1    : '1分  '
        };
        var initValues = {}, key, defaultValue = 10;
        for (key in nameForAmounts){
            if (nameForAmounts.hasOwnProperty(key)){
                initValues[key] = defaultValue;
            }
        }
        var $initForm   = $('#init-form'  ),
            $paidForm   = $('#paid-form'  ),
            $statusForm = $('#status-form');
        _initForm(nameForAmounts, $initForm  );
        _initForm(nameForAmounts, $paidForm  );
        _initForm(nameForAmounts, $statusForm);
        _setFormValues($initForm, initValues);
        var changeGiver = new ChangeGiver();
        var price, paid, plan;
        $('#initChangeGiver').click(function(){
            try {
                var money = _getFormValues($initForm);
                changeGiver.init(money, nameForAmounts);
                $('#getChangeGiverStatus').click();
            } catch(err) {
                showError(err);
            }
        });
        $('#computeChange').click(function(){
            price = $('#price').val();
            paid  = _getFormValues($('#paid-form'));
            try {
                plan = changeGiver.getChangePlan(price, paid);
                changeGiver.putMoney(paid);
                changeGiver.takeMoney(plan);
                $('#result-plan').html('plan: ' + changeGiver.stringifyMoney(plan));
                $('#getChangeGiverStatus').click();
            } catch(err) {
                showError(err);
            }
        });
        $('#getChangeGiverStatus').click(function(){
            _setFormValues($statusForm, changeGiver.availableMoney);
            $('#total-money').val(
                changeGiver.totalMoneyAmount()
            );
        });
        $("input[type='number']").on('change', function(){
            _changeFormGroup(
                (Validator.isNumber($(this).val()) && !Validator.isNegative($(this).val())),
                $(this)
            );
        });
        $("input[type='number']").on('keyup', function(){
            _changeFormGroup(
                (Validator.isNumber($(this).val()) && !Validator.isNegative($(this).val())),
                $(this)
            );
        });
    });
    function _changeFormGroup(isSuccess, $obj){
        if (isSuccess){
            _setFormGroupStat($obj.parent().parent(), 'has-success');
        } else {
            _setFormGroupStat($obj.parent().parent(), 'has-error');
        }
    }
    function _setFormGroupStat($obj, stat){
        $obj.attr('class', 'form-group');
        $obj.addClass(stat);
    }
    function _initForm(dataHash, $form){
        var prefix = $form.data('prefix');
        var keys, key, i, id, addHtml;
        keys = Object.keys(dataHash).sort(function(a,b){return a-b;}).reverse();
        for (i = 0; i < keys.length; i ++){
            key = keys[i];
            if (dataHash.hasOwnProperty(key)){
                id = prefix + '-' + key;
                addHtml = '<div class="form-group">'
                        + '  <label for="' + id + '" class="col-lg-3 control-label">' + dataHash[key] + '</label>'
                        + '  <div class="col-lg-9">'
                        + '    <input id="' + id + '" class="form-control" type="number" data-key="' + key + '" placeholder="' + dataHash[key] + '" value="0" />'
                        + '  </div>'
                        + '</div>';
                $form.html($form.html() + addHtml);
            }
        }
    }
    function _getFormValues($form){
        var resultHash = {}, i;
        var $inputs = $form.children('.form-group')
                           .children('.col-lg-9')
                           .children('input');
        for (i = 0; i < $inputs.length; i ++){
            var key = $($inputs[i]).data('key');
            if (key){
                resultHash[key] = $($inputs[i]).val();
            }
        }
        return resultHash;
    }
    function _setFormValues($form, dataHash){
        var key, id;
        for (key in dataHash){
            if (dataHash.hasOwnProperty(key)){
                id = $form.data('prefix') + '-' + key;
                $('#' + id).val(dataHash[key]);
            }
        }
    }
})();
