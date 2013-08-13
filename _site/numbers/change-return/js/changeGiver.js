
;(function(exports){
"use strict";

    function _totalMoneyAmount(money){
        var totalMoneyAmount = 0, amount;
        if (money.length === 0){
            return totalMoneyAmount;
        }
        for (amount in money){
            if (money.hasOwnProperty(amount)){
                totalMoneyAmount += amount * money.amount;
            }
        }
        return totalMoneyAmount;
    }
    function _planToTakeOffChange(amount, money){
        var plan    = {},
            amounts = Object.keys(money).sort().reverse(),
            i, j;
        for (i = 0; i < amounts.length; i ++){
            plan[amounts[i]] = 0;
            for (j = 0; j < money[amounts[i]]; j ++){
                if (amount >= amounts[i]){
                    amount -= amounts[i];
                    plan[amounts[i]] ++;
                }
            }
            if (amount === 0){
                return plan;
            }
        }
        return undefined;
    }
    function _mergeMoney(money1, money2){
        var amount, total = {};
        for (amount in money1){
            if (money1.hasOwnProperty(amount)){
                total.amount = money1 + (money2.amount || 0);
            }
        }
        for (amount in money2){
            if (money2.hasOwnProperty(amount) && !total.hasOwnProperty(amount)){
                total.amount = money2.amount;
            }
        }
        return total;
    }

    var ChangeGiver = function(){
        this.availableMoney = {};
        this.nameForAmounts = {};
    };
    ChangeGiver.prototype = {
        init : function(money, nameForAmounts){
            if (this.validateMoneyAmounts(money)){
                this.availableMoney = money;
                this.nameForAmounts = nameForAmounts;
            } else {
                throw new Error('ChangeGiver Error: illegal format of money');
            }
        },
        clear : function(money){
            this.availableMoney = {};
        },
        availableMoneyAmounts : function(){
            var amounts = Object.keys(this.availableMoney);
            return amounts;
        },
        totalMoneyAmount : function(){
            return _totalMoneyAmount(this.availableMoney);
        },
        takeMoney : function(money){
            var amount;
            for (amount in money){
                if (money.hasOwnProperty(amount)){
                    if (this.availableMoney.hasOwnProperty(amount)){
                        if (this.availableMoney.amount < money.amount){
                            throw new Error('ChangeGiver Error: do not have enough money of this amount: ' + amount);
                        }
                    } else {
                        throw new Error('ChangeGiver Error: do not have this amount of money: ' + amount);
                    }
                }
            }
            for (amount in money){
                if (money.hasOwnProperty(amount)){
                    if (this.availableMoney.hasOwnProperty(amount)){
                        this.availableMoney.amount -= money.amount;
                    }
                }
            }
            return money;
        },
        putMoney : function(money){
            this.availableMoney = _mergeMoney(this.availableMoney, money);
        },
        getChangePlan : function(price, paid){
            var changeAmount = price - _totalMoneyAmount(paid);
            if (changeAmount < 0){
                throw new Error('ChangeGiver Error: paid money amount is not enough');
            } else if (changeAmount === 0){
                throw new Error('ChangeGiver Error: do not need to get change');
            } else if (changeAmount > this.totalMoneyAmount){
                throw new Error('ChangeGiver Error: do not have enough money');
            } else {
                var totalAvailableMoney = _mergeMoney(this.availableMoney, paid);
                var plan = _planToTakeOffChange(changeAmount, totalAvailableMoney);
                if (plan === undefined){
                    throw new Error('ChangeGiver Error: do not have enough money');
                }
                return plan;
            }
        },
        stringifyMoney : function(money){
            var amounts   = Object.keys(money).sort().reverse(),
                resultStr = '',
                i, amountName;
            for (i = 0; i < amounts.length; i ++){
                amountName = this.nameForAmounts[amounts[i]];
                if (amountName === undefined){
                    resultStr += 'undefined: ' + amounts[i] * money[amounts[i]] + '\n';
                } else {
                    resultStr += amountName + ': ' + money[amounts[i]] + '\n';
                }
            }
            return resultStr;
        },
        validateMoneyAmounts : function(money){
            var amount;
            for (amount in money){
                if (money.hasOwnProperty(amount)){
                    if (money.amount < 0){
                        return 0;
                    }
                }
            }
            return 1;
        }
    };

    exports.ChangeGiver = ChangeGiver;
})(typeof exports !== 'undefined' ? exports : this);

