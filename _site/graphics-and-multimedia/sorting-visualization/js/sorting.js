
;(function(){
    var Sorting = function(options){
        this.svgDoc        = options.svgDoc;

        this.method        = options.method        || 'bubble';
        this.arrayLength   = options.arrayLength   || 10;
        this.isPreSorted   = options.isPreSorted   || 0;
        this.intervalTime  = options.intervalTime  || 30;
        this.itemHeight    = options.itemHeight    || 11;
        this.windowWidth   = options.windowWidth   || 500;

        this.arrayToSort          = [];
        this.svgBarArray          = [];
        this.actionsQueue         = [];
        this.svgBarChangedIdQueue = [];

        this.animateIntervalId    = '';
        this.sortingIntervalId    = '';

        this.range = {
            max : 1000,
            min : 5
        };
        this.steps = { // counting steps
            change  : 0,
            compare : 0,
            insert  : 0,
            use     : 0,
            swap    : 0
        };
        this.time = { // counting time
            animate : 0,
            execute : 0
        };

        return this;
    };

    window.Sorting = Sorting;
})();

