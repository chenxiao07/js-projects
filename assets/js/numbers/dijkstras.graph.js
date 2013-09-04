;(function(exports){
    'use strict';
    var xmlns = 'http://www.w3.org/2000/svg',
        _clone = function(obj){
            var clone = JSON.parse(JSON.stringify(obj));
            return clone;
        }, _cleanMap = function(map){
            var keys = Object.keys(map), key, i, j;
            for (i = 0; i < keys.length; i ++){
                for (j = i; j < keys.length; j ++){
                    if ( map[keys[i]].hasOwnProperty(keys[j])
                      && map[keys[j]].hasOwnProperty(keys[i])){
                        delete map[keys[j]][keys[i]];
                    }
                }
            }
        }, _drawLine = function(svgDoc, ltPairA, ltPairB, max_width, max_height, color, textContent){
            var startX = max_width  * parseFloat(ltPairA[0]),
                startY = max_height * parseFloat(ltPairA[1]),
                endX   = max_width  * parseFloat(ltPairB[0]),
                endY   = max_height * parseFloat(ltPairB[1]),
                line   = svgDoc.createElementNS(xmlns, 'line');
            line.setAttributeNS(null, 'x1', startX);
            line.setAttributeNS(null, 'y1', startY);
            line.setAttributeNS(null, 'x2', endX);
            line.setAttributeNS(null, 'y2', endY);
            line.setAttributeNS(null, 'stroke', color);
            svgDoc.documentElement.appendChild(line);
            if (textContent){
                var textX  = (startX + endX) / 2,
                    textY  = (startY + endY) / 2,
                    text   = svgDoc.createElementNS(xmlns, 'text');
                text.textContent = textContent;
                text.setAttribute('fill', 'green');
                text.setAttribute('font-size', 12);
                text.setAttribute('transform', 'translate(' + textX + ' ' + textY + ')');
                text.setAttribute('font-family', 'sans-serif');
                svgDoc.documentElement.appendChild(text);
            }
        }, _drawMapLines = function(svgDoc, map, max_width, max_height){
            var startNode, endNode, distance;
            for (startNode in map){
                if (map.hasOwnProperty(startNode)){
                    for (endNode in map[startNode]){
                        if (map[startNode].hasOwnProperty(endNode) && endNode !== 'lt'){
                            _drawLine(
                                    svgDoc,
                                    map[startNode].lt, map[endNode].lt,
                                    max_width, max_height,
                                    'yellow',
                                    map[startNode][endNode]
                                );
                        }
                    }
                }
            }
        }, _drawNode = function(svgDoc, max_width, max_height, ltPair, name){
            var shorterEdge = (max_width < max_height)
                            ?  max_width : max_height,
                x = max_width   * parseFloat(ltPair[0]),
                y = max_height  * parseFloat(ltPair[1]),
                r = shorterEdge * 0.04,
                shape = svgDoc.createElementNS(xmlns, 'circle'),
                text  = svgDoc.createElementNS(xmlns, 'text');
            shape.setAttributeNS(null, 'cx', x);
            shape.setAttributeNS(null, 'cy', y);
            shape.setAttributeNS(null, 'r',  r);
            shape.setAttributeNS(null, 'fill', 'green');
            text.textContent = name;
            text.setAttribute('fill', 'yellow');
            text.setAttribute('font-size', 2 * r);
            text.setAttribute('transform', 'translate(' + (x-r/2) + ' ' + (y+r/2) + ')');
            text.setAttribute('font-family', 'sans-serif');
            svgDoc.documentElement.appendChild(shape);
            svgDoc.documentElement.appendChild(text);
        }, _drawMapNodes = function(svgDoc, max_width, max_height, map){
            var key;
            for (key in map){
                if (map.hasOwnProperty(key)){
                    _drawNode(svgDoc, max_width, max_height, map[key].lt, key);
                }
            }
        }, dijkstraGraph = {
            'clearGraph': function(svgDoc){
                var child;
                while(true){
                    child = svgDoc.documentElement.lastChild;
                    if (!child){ break; }
                    svgDoc.documentElement.removeChild(child);
                }
            },
            'drawMap': function(svgDoc, max_width, max_height, map){
                var mapClone = _clone(map);
                _cleanMap(mapClone);
                _drawMapLines(svgDoc, mapClone, max_width, max_height);
                _drawMapNodes(svgDoc, max_width, max_height, map);
            },
            'drawPath': function(svgDoc, max_width, max_height, map, path){
                var i, startNode, endNode, vector = path.orderVector;
                for (i = 0; i + 1 < vector.length; i ++){
                    startNode = map[vector[i]];
                    endNode   = map[vector[i + 1]];
                    _drawLine(
                            svgDoc,
                            startNode.lt, endNode.lt,
                            max_width, max_height,
                            'green'
                        );
                }
            }
        };
    exports.dijkstraGraph = dijkstraGraph;
})(typeof exports !== 'undefined' ? exports : this);
