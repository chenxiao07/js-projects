
;(function(){
    window.addEventListener('load', function(){
        var $svg = document.getElementById('svg-area');
        var svgDoc = $svg.contentDocument;
        var sorting;

        document.getElementById('init').addEventListener('click', function(){
            var $controller  = document.getElementById('controller'),
                arrayLength  = document.getElementById('array-length').value  || 10,
                intervalTime = document.getElementById('interval-time').value || 50;

            var tempHeight   = (window.innerHeight - 70) / arrayLength - 2,
                itemHeight;
            if (tempHeight < 10){
                document.getElementsByTagName("body")[0].className = 'scroll';
                itemHeight = 10;
            } else {
                document.getElementsByTagName("body")[0].className = '';
                itemHeight = tempHeight;
            }

            var $isPreSortedRadios = document.getElementsByName('is-pre-sorted'),
                i, isPreSorted;

            for (i = 0; i < $isPreSortedRadios.length; i ++){
                if ($isPreSortedRadios[i].checked){
                    isPreSorted = ($isPreSortedRadios[i].value === '1')
                                ? true
                                : false;
                }
            }

            var $method = document.getElementById('method');
            var method  = $method.options[$method.selectedIndex].value;

            $svg.height   = arrayLength * (itemHeight + 2) + 'px';
            svgDoc.height = $svg.height;
            $svg.width    = window.innerWidth + 'px';
            svgDoc.width  = $svg.width * 0.7;

            var options = {
                svgDoc        : svgDoc                  ,
                arrayLength   : arrayLength             ,
                intervalTime  : intervalTime            ,
                itemHeight    : itemHeight              ,
                windowWidth   : window.innerWidth * 0.7 ,
                isPreSorted   : isPreSorted             ,
                method        : method
            };

            sorting = new Sorting(options);
            sorting.init();
        });
        document.getElementById('start').addEventListener('click', function(){
            sorting.sort();
            sorting.show();
        });
        document.getElementById('pause').addEventListener('click', function(){
            sorting.pauseAnimate();
        });

    });
})();

