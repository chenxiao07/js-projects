
;(function(){

    var clock;
    var options = {};

    options.intervalTime = 50;

    window.addEventListener('load', function(){
        options.canvas = document.getElementById('clock');

        initClock();

        var $controllers = document.querySelectorAll('.controller');
        for (var i = 0, length = $controllers.length; i < length; i++) {
            $controllers[i].addEventListener('click', function(){
                options[this.id] = this.value;
                initClock();
            });
        }
    });

    window.addEventListener('resize', function(){
        initClock();
    });

    function initClock(){
        if (clock){
            clock.clearInterval();
        }

        options.canvas.width  = window.innerHeight > window.innerWidth
                              ? window.innerWidth  * 0.80
                              : window.innerHeight * 0.80;
        options.canvas.height = options.canvas.width;

        clock = new Clock(options);
        clock.draw();
    }

})();

