!function ($) {
    var trim = function(rawStr){
            return rawStr.replace(/(^\s*)|(\s*$)/g, '');
        }, json2html = function(json){
            var result = JSON.stringify(json, undefined, 2);
            result = result.replace(/\n/g, '<br>');
            result = result.replace(/\ /g, '&nbsp');
            return result;
        }, Validator = {
            isDateTime: function(dateTime){
                var parms  = dateTime.split(/[\.\-\/\ \:T]/);
                var year   = parseInt(parms[0],10);
                var month  = parseInt(parms[1],10);
                var day    = parseInt(parms[2],10);
                var hour   = parseInt(parms[3],10);
                var minute = parseInt(parms[4],10);
                var dt     = new Date(year, month - 1, day, hour, minute);
                return (month  === (dt.getMonth() + 1)
                     && day    === dt.getDate()
                     && year   === dt.getFullYear()
                     && hour   === dt.getHours()
                     && minute === dt.getMinutes()
                    );
            },
            isBinaryInt: function(value){
                return (!isNaN(parseInt(value, 2)) && isFinite(value));
            },
            isLuhnNumber: function(value){
                if (!this.isNumber(value)){
                    return false;
                }
                value = trim(value);
                var digitArray = value.split('').reverse(), sum = 0, i;
                for (i = 0; i < digitArray.length; i ++){
                    var temp = (i % 2 !== 0) ? parseInt(digitArray[i] * 2, 10) : parseInt(digitArray[i], 10);
                    if(temp >= 10){
                        temp = (temp % 10) + Math.floor(temp / 10);
                    }
                    sum += temp;
                }
                return (sum % 10 === 0);
            },
            isNegative: function(value){
                return (value < 0);
            },
            isNull: function(value){
                if (value !== undefined){
                    value = trim(value);
                }
                return (value === undefined || value === '');
            },
            isNumber: function(value){
                return (!isNaN(parseFloat(value)) && isFinite(value));
            }
        }, RSLoader = function(){
            this.trigger = $('#show-modal-resource');
            this.title   = $('#modal-resource-title');
            this.content = $('#modal-resource-content');
        };
    RSLoader.prototype = {
        show : function(){
            this.trigger.click();
        },
        clear : function(){
            this.content.html('');
            this.content.attr('class', '');
            this.title.html('resource');
        },
        load : function(content, title, style){
            this.clear();
            this.content.html(content);
            if (title !== undefined){
                this.title.html(title);
            }
            if (style !== undefined){
                this.content.attr('class', style);
            }
        }
    };
    var ModalDialog = new RSLoader(),
        _showModal = function(content, title, style, defaultTitle, defaultStyle){
            title = (title === undefined) ? defaultTitle : title;
            style = (style === undefined) ? defaultStyle : style;
            ModalDialog.load(content, title, style);
            ModalDialog.show();
        },
        showError = function(err, title, style){
            _showModal(err, title, style, 'ERROR', 'alert-danger');
        },
        showInfo = function(info, title, style){
            _showModal(info, title, style, 'INFO', 'alert-info');
        };
    $('.btn-load-resource').on('click', function(){
        showInfo($(this).data('content'), $(this).data('title'), $(this).data('style'));
    });
    /* Objects */
    window.Validator   = Validator;
    window.ModalDialog = ModalDialog;
    /* Methods */
    window.showError   = showError;
    window.showInfo    = showInfo;
    window.trim        = trim;
    window.json2html   = json2html;
}(window.jQuery);
