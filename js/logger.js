
!function ($) {
    var Logger = function(){
        this.trigger = $('#show-modal-log');
        this.content = $('#modal-log-content');
    };

    Logger.prototype = {
        show : function(){
            this.trigger.click();
        },
        clear : function(){
            this.content.html('');
            this.content.attr('class', 'alert margin0');
        },
        log : function(content, contentClass){
            this.clear();
            this.content.attr('class', contentClass);
            this.content.html(content);
        }
    };

    window.Logger = new Logger();
}(window.jQuery);

