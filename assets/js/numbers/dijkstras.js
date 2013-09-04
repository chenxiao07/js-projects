;(function(exports){
    "use strict";
    var _spliceNode = function(nodes, node){
        var i = nodes.indexOf(node);
        nodes.splice(i, 1);
    };
    var _extractMinNode = function(paths, nodes){
        var minNode, minDistance = Number.POSITIVE_INFINITY, i, currentNode;
        for (i = 0; i < nodes.length; i ++){
            currentNode = nodes[i];
            if (minDistance > paths[currentNode].distance){
                minDistance = paths[currentNode].distance;
                minNode = currentNode;
            }
        }
        return minNode;
    };
    var _updatePaths = function(map, paths, unfinishNodes, minNode){
        var distance, totalDistance, i;
        for (i = 0; i < unfinishNodes.length; i ++){
            distance = map[minNode][unfinishNodes[i]];
            if (distance){
                totalDistance = paths[minNode].distance + distance;
                if (totalDistance < paths[unfinishNodes[i]].distance){
                    paths[unfinishNodes[i]].merge(paths[minNode], totalDistance);
                }
            }
        }
    };
    var Path = function(startNode, endNode){
        this.startNode   = startNode;
        this.endNode     = endNode;
        this.orderVector = [];
        this.distance    = Number.POSITIVE_INFINITY;
    };
    Path.prototype = {
        'merge': function(that, distance){
            if (this.startNode !== that.startNode){
                throw new Error('cannot merge two paths with different start nodes.');
            }
            this.orderVector = that.orderVector.slice(0);
            this.orderVector.push(this.endNode);
            this.distance = distance;
        },
    };
    var Dijkstra = function(){
        this.map   = {};
        this.paths = {};
    };
    Dijkstra.prototype = {
        'loadMap': function(map){
            if (!this.checkMap(map)){
                throw new Error('invalid map data');
            }
            this.map   = map;
            this.paths = {};
        },
        'checkMap': function(map){
            return true;
        },
        'findAllPaths': function(node){
            var unfinishNodes = [], key;
            this.paths[node] = {};
            for (key in this.map){
                if (this.map.hasOwnProperty(key)){
                    this.paths[node][key] = new Path(node, key);
                    unfinishNodes.push(key);
                }
            }
            this.paths[node][node].orderVector.push(node);
            this.paths[node][node].distance = 0;
            while (unfinishNodes.length > 0){
                var minNode = _extractMinNode(this.paths[node], unfinishNodes);
                _spliceNode(unfinishNodes, minNode);
                _updatePaths(this.map, this.paths[node], unfinishNodes, minNode);
            }
        },
        'findShortestPath': function(nodeA, nodeB){
            if (!this.map.hasOwnProperty(nodeA) || !this.map.hasOwnProperty(nodeB)){
                throw new Error('invalid node pairs');
            }
            if (!this.paths.hasOwnProperty(nodeA)){
                this.findAllPaths(nodeA);
            }
            return this.paths[nodeA][nodeB];
        }
    };
    exports.Dijkstra = Dijkstra;
})(typeof exports !== 'undefined' ? exports : this);
