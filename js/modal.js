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
            this.content.attr('class', '');
        },
        log : function(content, contentClass){
            this.clear();
            this.content.html(content);
            if (contentClass !== undefined){
                this.content.attr('class', contentClass);
            }
        }
    };
    var RSLoader = function(){
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
        load : function(content, title, contentClass){
            this.clear();
            this.content.html(content);
            if (title !== undefined){
                this.title.html(title);
            }
            if (contentClass !== undefined){
                this.content.attr('class', contentClass);
            }
        }
    };
    window.Logger   = new Logger();
    window.RSLoader = new RSLoader();
}(window.jQuery);
