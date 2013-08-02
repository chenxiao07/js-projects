;(function(){

    window.addEventListener('load', function(){
        var principal, interest, term, i, monthly, paid, $table;
        document.getElementById('mortgage-compute').addEventListener('click', function(){
            principal = parseFloat(document.getElementById('mortgage-principal'     ).value , 10 );
            interest  = parseFloat(document.getElementById('mortgage-interest-rate' ).value , 10 );
            term      = parseFloat(document.getElementById('mortgage-count'         ).value , 10 );
            $table    = document.getElementById('mortgage-result-monthly');
            _initTable($table);
            monthly = _countMortgageMonthly(principal, interest, term);
            for (i = 1; i <= term; i ++){
                _addMonthly(i, monthly, $table);
            }
        });

        document.getElementById('loan-compute').addEventListener('click', function(){
            principal = parseFloat(document.getElementById('loan-principal'     ).value , 10 );
            interest  = parseFloat(document.getElementById('loan-interest-rate' ).value , 10 );
            term      = parseFloat(document.getElementById('loan-count'         ).value , 10 );
            paid      = 0;
            $table    = document.getElementById('loan-result-monthly');
            _initTable($table);
            for (i = 1; i <= term; i ++){
                monthly = _countLoanMonthly(principal, interest, term, paid);
                paid   += monthly;
                _addMonthly(i, monthly, $table);
            }
        });
    });

    /*
     * M = p * i * (1 + i)^n / ((1 + i)^n - 1)  -- mortgage
     * M = (p / n) + (p - total_paid) * i       -- loan
     */
    var _countMortgageMonthly = function(principal, interest, n){
        return principal * interest * (Math.pow((1 + interest), n) / (Math.pow((1 + interest), n) - 1));
    };
    var _countLoanMonthly = function(principal, interest, term, paid){
        return (principal / term) + interest * (principal - paid);
    };

    var _addMonthly = function(n, m, $table){
        $table.innerHTML += '<tr>'
                          +     '<td>' +  n + '</td>'
                          +     '<td>' +  m + '</td>'
                          + '</tr>';
    };
    var _initTable = function($table){
        $table.innerHTML = '<tr>'
                         +     '<td>month</td>'
                         +     '<td>payment</td>'
                         + '</tr>';
    };

})();
