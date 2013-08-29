!function ($) {
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
    window.RSLoader = new RSLoader();
}(window.jQuery);

!function ($) {
    var _showModal = function(content, title, style, defaultTitle, defaultStyle){
        title = (title === undefined) ? defaultTitle : title;
        style = (style === undefined) ? defaultStyle : style;
        RSLoader.load(content, title, style);
        RSLoader.show();
    };
    var showError = function(err, title, style){
        _showModal(err, title, style, 'ERROR', 'alert-danger');
    };
    var showInfo = function(info, title, style){
        _showModal(info, title, style, 'INFO', 'alert-info');
    };
    $('.btn-load-resource').on('click', function(){
        showInfo($(this).data('content'), $(this).data('title'), $(this).data('style'));
    });
    window.showError = showError;
    window.showInfo  = showInfo;
}(window.jQuery);
