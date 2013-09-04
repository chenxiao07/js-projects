# dijkstra's algorithm
javascript implement of dijkstra's algorithm

see example in homepage [demo](http://leungwensen.github.io/js-projects/numbers/dijkstras-algorithm/)

## usage
```javascript
    var dijkstra = new Dijkstra(),
        paths, shortestPath;

    dijkstra.loadMap({
        'a' : { 'b' : 5, 'c' : 3 },
        'b' : { 'a' : 5, 'c' : 4 },
        'c' : { 'a' : 3, 'b' : 4 }
    });
    dijkstra.findAllPaths('a');
    paths = dijkstra.paths;
    /*
        {
            'a' : {
                'a' : Path('a', 'a'), // path 'a' to 'a'
                'b' : Path('a', 'b'), // path 'a' to 'b'
                'c' : Path('a', 'c')  // path 'a' to 'c'
            }
        };
    */
    /*
        Path : {
            startNode,
            endNode,
            orderVector, // [node1, node2, ..., ]
            distance
            prototype : {
                merge : function(that, distance){
                    //...
                }
            },
        }
    */
    shortestPath = dijkstra.findShortestPath('a', 'c');
    /*
        Path : { startNode: 'a', endNode: 'c', orderVector: ['a', 'c'] }
    */
```

## download
[download](https://raw.github.com/leungwensen/js-projects/master/assets/js/numbers/dijkstras.js)
