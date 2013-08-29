;(function(){
    var Clock = function(options){
        if (!options.canvas || (options.canvas.nodeType !== 1) || (options.canvas.tagName !== 'CANVAS')){
            console.log('AT LEAST give me a CANVAS, OK?');
            return;
        }
        this.piX2   = Math.PI * 2                     ;
        this.resetX = options.canvas.width  / 2       ;
        this.resetY = options.canvas.height / 2       ;
        this.canvas = options.canvas.getContext('2d') ;
        this.canvas.translate(this.resetX, this.resetY);
        this.r = (options.r !== undefined)
               ? options.r
               : (options.canvas.width > options.canvas.height)
               ? options.canvas.height / 2
               : options.canvas.width  / 2;
        this.intervalId      = ''                                   ;
        this.intervalTime    = options.intervalTime    || 100       ;
        this.faceColor       = options.faceColor       || '#EEEEEE' ;
        this.frameColor      = options.frameColor      || '#333333' ;
        this.scaleColor      = options.scaleColor      || '#FFFFFF' ;
        this.secondHandColor = options.secondHandColor || '#FF0000' ;
        this.minuteHandColor = options.minuteHandColor || '#666666' ;
        this.hourHandColor   = options.hourHandColor   || '#333333' ;
        this.strokeStyle     = options.strokeStyle     || "#DDDDDD" ;
        return this;
    };
    Clock.prototype = {
        clearInterval : function(){
            this.canvas.clearRect(-this.resetX, -this.resetY, this.width, this.height);
            clearInterval(this.intervalId);
        },
        draw : function(){
            this.drawClock();
            var obj = this;
            this.intervalId = setInterval(function(){
                var now = new Date();
                obj.drawHands(now);
            }, obj.intervalTime);
        },
        drawClock : function(){
            var circleOptions = {
                x           : 0                ,
                y           : 0                ,
                r           : this.r           ,
                fromAngle   : 0                ,
                toAngle     : this.piX2        ,
                direction   : true             ,
                color       : this.frameColor  ,
                isFill      : true             ,
                strokeStyle : this.strokeStyle ,
                lineWidth   : 1
            };
            _drawCircle(this.canvas, circleOptions);
            circleOptions.r     = this.r * 0.95   ;
            circleOptions.color = this.scaleColor ;
            _drawCircle(this.canvas, circleOptions);
            circleOptions.r         = this.r * 0.85   ;
            circleOptions.color     = this.scaleColor ;
            circleOptions.isFill    = false           ;
            circleOptions.lineWidth = this.r * 0.005  ;
            _drawCircle(this.canvas, circleOptions);
            var scaleOptions = {
                fromX      : -this.r          ,
                fromY      : 0                ,
                toX        : -(this.r * 0.80) ,
                toY        : 0                ,
                color      : this.frameColor  ,
                lineWidth  : this.r * 0.005   ,
                scaleCount : 12
            };
            _drawScale(this.canvas, scaleOptions);
            scaleOptions.toX        = -(this.r * 0.85) ;
            scaleOptions.scaleCount = 60               ;
            _drawScale(this.canvas, scaleOptions);
        },
        drawHands : function(time){
            var sAngle = Math.PI * (time.getSeconds() / 30)               ;
            var mAngle = Math.PI * (time.getMinutes() / 30)               ;
            var hAngle = Math.PI * (time.getHours()   / 6 ) + mAngle / 12 ;
            var circleOptions = {
                x           : 0                ,
                y           : 0                ,
                r           : this.r * 0.78    ,
                fromAngle   : 0                ,
                toAngle     : this.piX2        ,
                direction   : true             ,
                color       : this.faceColor   ,
                isFill      : true             ,
                lineWidth   : 1                ,
                strokeStyle : this.strokeStyle
            };
            _drawCircle(this.canvas, circleOptions);
            var scaleOptions = {
                fromX      :  (this.r * 0.50) * Math.sin(hAngle) ,
                fromY      : -(this.r * 0.50) * Math.cos(hAngle) ,
                toX        : 0                                   ,
                toY        : 0                                   ,
                color      : this.hourHandColor                  ,
                lineWidth  : this.r * 0.040                      ,
                scaleCount : 1
            };
            _drawScale(this.canvas, scaleOptions);
            scaleOptions.fromX     =  (this.r * 0.60) * Math.sin(mAngle) ;
            scaleOptions.fromY     = -(this.r * 0.60) * Math.cos(mAngle) ;
            scaleOptions.color     = this.minuteHandColor                ;
            scaleOptions.lineWidth = this.r * 0.040                      ;
            _drawScale(this.canvas, scaleOptions);
            scaleOptions.fromX     =  (this.r * 0.70) * Math.sin(sAngle) ;
            scaleOptions.fromY     = -(this.r * 0.70) * Math.cos(sAngle) ;
            scaleOptions.color     = this.secondHandColor                ;
            scaleOptions.lineWidth = this.r * 0.010                      ;
            _drawScale(this.canvas, scaleOptions);
            circleOptions.r     = (this.r * 0.04)      ;
            circleOptions.color = this.secondHandColor ;
            _drawCircle(this.canvas, circleOptions);
        }
    };
    function _drawCircle(canvas, options){
        canvas.beginPath();
        canvas.arc(options.x, options.y, options.r, options.fromAngle, options.toAngle, options.direction);
        canvas.lineWidth   = options.lineWidth   ;
        canvas.strokeStyle = options.strokeStyle ;
        if (options.isFill === true) {
            canvas.fillStyle = options.color;
            canvas.fill();
        } else {
            canvas.stroke();
        }
    }
    function _drawScale(canvas, options){
        canvas.lineWidth   = options.lineWidth ;
        canvas.strokeStyle = options.color     ;
        var angle = Math.PI * 2 / options.scaleCount;
        var i = 0;
        for (i = 0; i < options.scaleCount; i ++) {
            canvas.beginPath();
            canvas.moveTo(options.fromX , options.fromY);
            canvas.lineTo(options.toX   , options.toY  );
            canvas.stroke();
            canvas.rotate(angle);
        }
    }
    window.Clock = Clock;
})();
