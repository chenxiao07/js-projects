;(function(){

    window.addEventListener('load', function(){
        var nameForAmounts = {
            1     : '1分  ',
            2     : '2分  ',
            5     : '5分  ',
            10    : '1角  ',
            20    : '2角  ',
            50    : '5角  ',
            100   : '1元  ',
            200   : '2元  ',
            500   : '5元  ',
            1000  : '10元 ',
            2000  : '20元 ',
            5000  : '50元 ',
            10000 : '100元'
        };

        var $initForm   = $('#init-form'  ),
            $paidForm   = $('#paid-form'  ),
            $resultForm = $('#result-form');
        _initForm(nameForAmounts, $initForm  );
        _initForm(nameForAmounts, $paidForm  );
        _initForm(nameForAmounts, $resultForm);

        var changeGiver = new ChangeGiver();
        var price, paid;

        document.getElementById('compute').addEventListener('click', function(){
        });
    });
    function _initForm(dataHash, $form){
    }

})();
