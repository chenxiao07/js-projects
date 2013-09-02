;(function(){
    var graphMaps = {
        '3nodes': {
            'a': { 'b': 3, 'c': 4 },
            'b': { 'a': 3, 'c': 5 },
            'c': { 'a': 4, 'b': 5 }
        },
        '4nodes': {
            'a': { 'b': 3, 'c': 4 },
            'b': { 'a': 3, 'c': 5, 'd': 2 },
            'c': { 'a': 4, 'b': 5, 'd': 3 },
            'd': { 'b': 2, 'c': 3 }
        },
        '5nodes': {
            'a': { 'b': 3, 'c': 4 },
            'b': { 'a': 3, 'e': 5 },
            'c': { 'a': 4, 'd': 4 },
            'd': { 'c': 4, 'e': 1 },
            'e': { 'b': 5, 'd': 1 }
        },
    };
    window.graphMaps = graphMaps;
})();
