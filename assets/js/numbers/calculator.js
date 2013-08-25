;(function(document){
    "use strict";

    var Calculator = {
        // attributes
        display : document.getElementById('display'),
        btns : {
            // numbers
            additiveInverseBtn : document.getElementById('btn-additive-inverse'),
            digitBtns          : document.getElementsByClassName('btn-num'),
            // operators
            equalBtn : document.getElementById('btn-equal'),
            moptBtns : document.getElementsByClassName('btn-mopt'),
            optBtns  : document.getElementsByClassName('btn-opt'),
            // functional buttons
            clearBtn : document.getElementById('btn-c'),
        },
        variables : {
            displayNum   : '0',
            memoryNum    : 0,
            operandNum   : 0,
            resultNum    : 0,
            currentOpt   : '',
            isContinuous : true
        },

        // functions
        appendDisplay : function(digit){
            if (this.variables.displayNum === '0' && digit !== '.'){
                this.variables.displayNum = '';
            }
            this.variables.displayNum = this.variables.displayNum + digit;
            this.syncDisplay();
        },
        syncDisplay : function(){
            this.display.value = this.variables.displayNum;
        },
        displayResult : function(){
            this.display.value = this.variables.resultNum;
        },
        clearVariables : function(){
            this.variables.displayNum = '0';
            this.variables.operandNum = 0;
            this.variables.resultNum  = 0;
            this.variables.currentOpt = '';
        },
        calculate : function(){
            switch (this.variables.currentOpt){
                case '+':
                    this.variables.resultNum += this.variables.operandNum;
                    break;
                case '-':
                    this.variables.resultNum -= this.variables.operandNum;
                    break;
                case 'x':
                    this.variables.resultNum *= this.variables.operandNum;
                    break;
                case '/':
                    this.variables.resultNum  = this.variables.resultNum / this.variables.operandNum;
                    break;
            }
        }
    };

    // MARK this HACK: use forEach for Nodelist
    // (Nodelist cannot use forEach directly, and cannot bind click event directly, too.)
    var forEach = Array.prototype.forEach;
    // handle click event of digit buttons
    forEach.call(Calculator.btns.digitBtns, function(item){
        item.addEventListener('click', function(){
            Calculator.appendDisplay(this.value);
        });
    });
    // handle click event of operator buttons
    forEach.call(Calculator.btns.optBtns, function(item){
        item.addEventListener('click', function(){
            Calculator.variables.operandNum = parseFloat(Calculator.variables.displayNum);
            if (Calculator.variables.currentOpt === ''){
                Calculator.variables.resultNum = Calculator.variables.operandNum;
            } else {
                if (Calculator.variables.isContinuous){
                    Calculator.calculate();
                }
                Calculator.variables.isContinuous = true;
            }
            Calculator.variables.currentOpt = this.value;
            Calculator.variables.displayNum = '0';
        });
    });
    Calculator.btns.equalBtn.addEventListener('click', function(){
        Calculator.variables.operandNum = parseFloat(Calculator.variables.displayNum);
        Calculator.calculate();
        Calculator.displayResult();
        Calculator.variables.isContinuous = false;
    });
    Calculator.btns.clearBtn.addEventListener('click', function(){
        Calculator.clearVariables();
        Calculator.syncDisplay();
    });

})(document);
