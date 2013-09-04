;(function(){
    var xmlns = 'http://www.w3.org/2000/svg',
        SvgBar = function(options){
        var self       = this;
        this.index     = options.index;
        this.value     = options.value;
        this.height    = options.itemHeight;
        this.ySpace    = this.height + 2;
        this.widthRate = options.widthRate;
        this.width     = this.value * this.widthRate;
        this.rect = options.svgDoc.createElementNS(xmlns, 'rect');
        this.rect.setAttributeNS(null, 'id'     , "svgArrayItem." + this.index);
        this.rect.setAttributeNS(null, 'x'      , 0                           );
        this.rect.setAttributeNS(null, 'y'      , this.index * this.ySpace    );
        this.rect.setAttributeNS(null, 'width'  , this.width                  );
        this.rect.setAttributeNS(null, 'height' , this.height                 );
        this.rect.setAttributeNS(null, 'opacity', 0.9                         );
        this.rect.setAttributeNS(null, 'fill'   , Config.colors.bar           );
        this.text = options.svgDoc.createElementNS(xmlns, 'text');
        this.text.textContent = this.value;
        this.text.setAttribute('fill'        , Config.colors.font);
        this.text.setAttribute('font-family' , 'sans-serif'    );
        this.text.setAttribute('font-size'   , this.height / 2 );
        this.text.setAttribute('transform'   , 'translate('
                                             + this.width
                                             + ' '
                                             + (this.index * this.ySpace + this.height * 3 / 4)
                                             + ')');
        options.svgDoc.documentElement.appendChild(this.rect);
        options.svgDoc.documentElement.appendChild(this.text);
        this.rect.addEventListener('mouseover', function(){
            this.setAttributeNS(null, 'opacity', 1);
            self.text.setAttribute('font-size', self.height);
        });
        this.rect.addEventListener('mouseout', function(){
            this.setAttributeNS(null, 'opacity', 0.9);
            self.text.setAttribute('font-size', self.height / 2);
        });
    };
    SvgBar.prototype = {
        setValue : function(value){
            this.value = value;
            this.width = this.value * this.widthRate;
            this.rect.setAttributeNS(null, 'width', this.width);
            this.text.textContent = this.value;
            this.text.setAttribute('transform', 'translate('
                                              + this.width
                                              + ' '
                                              + (this.index * this.ySpace + this.height * 3 / 4)
                                              + ')');
        },
        setFill : function(color){
            this.rect.setAttributeNS(null, 'fill', color);
        },
    };
    window.SvgBar = SvgBar;
})();
