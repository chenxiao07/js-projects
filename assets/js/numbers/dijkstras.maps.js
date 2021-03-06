;(function(){
    var dijkstraMaps = {
        '3nodes': {
            'a': { 'lt': [0.50, 0.25], 'b': 3, 'c': 4 },
            'b': { 'lt': [0.25, 0.75], 'a': 3, 'c': 5 },
            'c': { 'lt': [0.75, 0.75], 'a': 4, 'b': 5 }
        },
        '4nodes': {
            'a': { 'lt': [0.25, 0.25], 'b': 3, 'c': 4         },
            'b': { 'lt': [0.75, 0.25], 'a': 3, 'c': 5, 'd': 2 },
            'c': { 'lt': [0.75, 0.75], 'a': 4, 'b': 5, 'd': 3 },
            'd': { 'lt': [0.25, 0.75], 'b': 2, 'c': 3         }
        },
        '5nodes': {
            'a': { 'lt': [0.50, 0.25], 'b': 3, 'c': 4 },
            'b': { 'lt': [0.25, 0.50], 'a': 3, 'e': 5 },
            'c': { 'lt': [0.75, 0.50], 'a': 4, 'd': 4 },
            'd': { 'lt': [0.75, 0.75], 'c': 4, 'e': 1 },
            'e': { 'lt': [0.25, 0.75], 'b': 5, 'd': 1 }
        },
        '6nodes': {
            'a': { 'lt': [0.50, 0.20], 'b': 6, 'c': 3 },
            'b': { 'lt': [0.75, 0.40], 'a': 6, 'c': 2, 'd': 5 },
            'c': { 'lt': [0.25, 0.40], 'a': 3, 'b': 2, 'd': 3, 'e': 4 },
            'd': { 'lt': [0.50, 0.60], 'b': 5, 'c': 3, 'e': 2, 'f': 3 },
            'e': { 'lt': [0.25, 0.80], 'c': 4, 'd': 2, 'f': 5 },
            'f': { 'lt': [0.75, 0.80], 'd': 3, 'e': 5 }
        },
    };
    window.dijkstraMaps = dijkstraMaps;
})();
