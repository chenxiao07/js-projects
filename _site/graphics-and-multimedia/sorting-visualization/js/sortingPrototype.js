
;(function(){
    Sorting.prototype = {
        change : function(array, id, value){
            this.steps.change ++;
            this.actionsQueue.push({
                id        : id      ,
                value     : value   ,
                operation : 'change'
            });
            array[id] = value;
        },
        compare : function(array, id1, id2){
            this.steps.compare ++;
            this.actionsQueue.push({
                ids       : [id1, id2],
                operation : 'compare'
            });
            return (array[id1] === array[id2])
                 ? '='
                 : (array[id1]  >  array[id2])
                 ? '>'
                 : '<';
        },
        insertTo : function(array, insertIndex, toIndex){
            var i, temp;
            for (i = insertIndex; i > toIndex; i --){
                temp               = array[i].value;
                array[i].value     = array[i - 1].value;
                array[i - 1].value = temp;
                this.actionsQueue.push({
                    ids       : [i, i - 1],
                    operation : 'swap'
                });
            }
        },
        isOrdered : function(array, compareResult){ // for bogo sort
            var i;
            for (i = 0; i < (array.length - 1); i ++){
                if (this.compare(array, i, i + 1) !== compareResult){
                    return false;
                }
            }
            return true;
        },
        swap : function(array, id1, id2){
            this.steps.swap ++;
            var tmp = array[id1];
            array[id1] = array[id2];
            array[id2] = tmp;
            this.actionsQueue.push({
                ids       : [id1, id2],
                operation : 'swap'
            });
        },
        use : function(array, id){
            this.steps.use ++;
            this.actionsQueue.push({
                id        : id,
                operation : 'use'
            });
        },

        clear : function(){
            while (this.svgDoc.documentElement.lastChild){
                this.svgDoc.documentElement.removeChild(this.svgDoc.documentElement.lastChild);
            }
            this.arrayToSort  = [];
            this.svgBarArray  = [];
            this.actionsQueue = [];
        },
        init : function(){
            this.clear();
            var array = [] ,
                i          ,
                key;
            for (i = 0; i < this.arrayLength; i ++){
                array.push(Math.floor(Math.random() * (this.range.max - this.range.min) + this.range.min));
            }
            if (this.isPreSorted){
                array.sort(function(a, b){
                    return a - b;
                });
            }
            var widthRate = this.windowWidth / (this.range.max - this.range.min);
            for (i = 0; i < this.arrayLength; i ++){
                this.arrayToSort.push(array[i]);
                this.svgBarArray.push(
                    new SvgBar({
                        svgDoc     : this.svgDoc     ,
                        index      : i               ,
                        value      : array[i]        ,
                        itemHeight : this.itemHeight ,
                        widthRate  : widthRate
                    })
                );
            }
            for (key in this.steps){
                if(this.steps.hasOwnProperty(key)) {
                    this.steps[key] = 0;
                }
            }
            for (key in this.time){
                if(this.time.hasOwnProperty(key)) {
                    this.time[key] = 0;
                }
            }
            // need to store origin index for merge
            if (this.method === 'merge'){
                var resultArray = [];
                for (i = 0; i < this.arrayToSort.length; i ++){
                    resultArray.push({ index: i, value: this.arrayToSort[i] });
                }
                this.arrayToSort = resultArray;
            }
        },
        sort : function(){
            Sorting.methodMap[this.method](this, this.arrayToSort);
        },
        show : function(){
            var self = this;
            this.animateIntervalId = setInterval(function(){
                var action  = self.actionsQueue.shift();
                if (action){
                    self.recoverSvgBar();
                    var i       ,
                        svgBar  ,
                        svgBar1 ,
                        svgBar2;
                    switch (action.operation){
                        case 'change':
                            svgBar = self.svgBarArray[action.id];
                            self.svgBarChangedIdQueue.push(svgBar);
                            svgBar.setFill(Config.colors.barChanged);
                            svgBar.setValue(action.value);
                            break;
                        case 'compare':
                            for (i = 0; i < action.ids.length; i ++){
                                svgBar = self.svgBarArray[action.ids[i]];
                                self.svgBarChangedIdQueue.push(svgBar);
                                svgBar.setFill(Config.colors.barCompared);
                            }
                            break;
                        case 'swap':
                            svgBar1 = self.svgBarArray[action.ids[0]];
                            svgBar2 = self.svgBarArray[action.ids[1]];
                            self.svgBarChangedIdQueue.push(svgBar1, svgBar2);
                            svgBar1.setFill(Config.colors.barSwapped);
                            svgBar2.setFill(Config.colors.barSwapped);
                            var tmp = svgBar1.value;
                            svgBar1.setValue(svgBar2.value);
                            svgBar2.setValue(tmp);
                            break;
                        case 'use':
                            svgBar = self.svgBarArray[action.id];
                            self.svgBarChangedIdQueue.push(svgBar);
                            svgBar.setFill(Config.colors.barUsed);
                            break;
                    }
                } else {
                    if (self.svgBarChangedIdQueue.length !== 0){
                        self.recoverSvgBar();
                    } else {
                        self.pauseAnimate();
                    }
                }
            }, self.intervalTime);
        },
        recoverSvgBar : function(){
            var i,
                svgBar;
            for (i = 0; i < this.svgBarChangedIdQueue.length; i ++){
                svgBar = this.svgBarChangedIdQueue.shift();
                svgBar.setFill(Config.colors.bar);
            }
        },
        pauseAnimate : function(){
            clearInterval(this.animateIntervalId);
            clearInterval(this.sortingIntervalId);
        },
    };
})();

