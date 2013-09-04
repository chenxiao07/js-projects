;(function(exports){
    window.addEventListener('load', function(){
        var $svg         = document.getElementById('svg-area'),
            svgDoc       = $svg.contentDocument,
            dijkstra     = new Dijkstra(),
            max_width    = window.innerWidth  * 0.8,
            max_height   = window.innerHeight * 0.8,
            $selectMap   = document.getElementById('select-map'),
            $selectStart = document.getElementById('select-start-node'),
            $selectEnd   = document.getElementById('select-end-node'),
            $btnShowPath = document.getElementById('btn-show-path'),
            _insertOptions = function($select, keys){
                $select.innerHTML = '';
                var i;
                for (i = 0; i < keys.length; i ++){
                    $select.innerHTML += '<option value="' + keys[i] + '">' + keys[i] + '</option>';
                }
            }, showMap = function(){
                if ($selectMap.value){
                    dijkstraGraph.drawMap(svgDoc, max_width, max_height, dijkstraMaps[$selectMap.value]);
                }
            }, showNodeOptions = function(){
                if ($selectMap.value){
                    var keys = Object.keys(dijkstraMaps[$selectMap.value]);
                    _insertOptions($selectStart, keys);
                    keys.reverse();
                    _insertOptions($selectEnd  , keys);
                }
            }, showResultPath = function(){
                if ($selectMap.value){
                    dijkstra.loadMap(dijkstraMaps[$selectMap.value]);
                    var resultPath = dijkstra.findShortestPath($selectStart.value, $selectEnd.value);
                    dijkstraGraph.drawPath(svgDoc, max_width, max_height, dijkstraMaps[$selectMap.value], resultPath);
                }
            }, init = function(){
                max_width  = window.innerWidth  * 0.8;
                max_height = window.innerHeight * 0.8;
                $svg.height = max_height + 'px';
                $svg.width  = max_width  + 'px';
                dijkstraGraph.clearGraph(svgDoc);
                var keys = Object.keys(dijkstraMaps);
                _insertOptions($selectMap, keys);
                showMap();
                showNodeOptions();
            };
        init();
        $btnShowPath.addEventListener('click', function(){
            dijkstraGraph.clearGraph(svgDoc);
            showMap();
            showResultPath();
        });
        $selectMap.addEventListener('change', function(){
            dijkstraGraph.clearGraph(svgDoc);
            showMap();
            showNodeOptions();
        });
        window.addEventListener('resize', function(){
            init();
        });
    });
})(typeof exports !== 'undefined' ? exports : this);
