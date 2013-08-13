
;(function(){
    Sorting.methodMap = {
        bogo : function(obj, array){
            var i, j;
            obj.sortingIntervalId = setInterval(function(){
                if (obj.actionsQueue.length < array.length){
                    if (obj.isOrdered(array, '<') === true){
                        clearInterval(obj.sortingIntervalId);
                    } else {
                        for (i = 0; i < array.length; i ++){
                            j = Math.floor(Math.random() * array.length);
                            obj.swap(array, i, j);
                        }
                    }
                }
            }, obj.intervalTime);
        },
        bubble : function(obj, array){
            var i = array.length, j, temp,
                swapped = true;
            while (i > 0 && swapped){
                swapped = false;
                j = 0;
                while(j < i - 1){
                    if (obj.compare(array, j, j + 1) === '>'){
                        obj.swap(array, j, j + 1);
                        swapped = true;
                    }
                    j ++;
                }
                i --;
            }
        },
        // bucket sort is really fast because we only deal with numbers within
        // [ Sorting.range.min, Sorting.range.max ]
        // and memory spent is also very stable.
        bucket : function(obj, array){
            var buckets = [],
                range   = {min: 0, max: 0},
                i, j, k;
            for (i = 0; i < array.length; i ++){
                obj.use(array, i);
                if (array[i] > range.max){
                    range.max = array[i];
                }
                if (array[i] < range.min){
                    range.min = array[i];
                }
            }
            for (i = range.min; i <= range.max; i ++){
                buckets.push(0);
            }
            for (i = 0; i < array.length; i ++){
                obj.use(array, i);
                buckets[array[i] - range.min] ++;
            }
            k = 0;
            for (i = 0; i < buckets.length; i ++){
                for (j = 0; j < buckets[i]; j ++){
                    obj.change(array, k, range.min + i);
                    k ++;
                }
            }
        },
        cocktail : function(obj, array){
            var bottom  = 0,
                top     = array.length - 1,
                swapped = true,
                i;
            while (swapped){
                swapped = false;
                for (i = bottom; i < top; i ++){
                    if (obj.compare(array, i, i + 1) === '>'){
                        obj.swap(array, i, i + 1);
                        swapped = true;
                    }
                }
                top --;
                for (i = top; i > bottom; i --){
                    if (obj.compare(array, i, i - 1) === '<'){
                        obj.swap(array, i, i - 1);
                        swapped = true;
                    }
                }
                bottom ++;
            }
        },
        counting : function(obj, array){
            var max         = 0,
                countArray  = [],
                resultArray = [],
                i;
            for (i = 0; i < array.length; i ++){
                obj.use(array, i);
                if (max < array[i]){
                    max = array[i];
                }
            }
            for (i = 0; i < max + 1; i ++){
                countArray.push(0);
            }
            for (i = 0; i < array.length; i ++){
                obj.use(array, i);
                countArray[array[i]] ++;
                resultArray.push(0);
            }
            for (i = 1; i < max + 1; i ++){
                countArray[i] += countArray[i - 1];
            }
            for (i = array.length - 1; i >= 0; i --) {
                resultArray[countArray[array[i]] - 1] = array[i];
                countArray[array[i]] --;
            }
            for (i = 0; i < array.length; i ++){
                obj.change(array, i, resultArray[i]);
            }
        },
        comb : function(obj, array){
        },
        heap : function(obj, array){
        },
        insert : function(obj, array){
            var temp, i, index;
            for (i = 1; i < array.length; i ++){
                temp  = array[i];
                index = i - 1;

                while((index >= 0) && (array[index] > temp)) {
                    obj.compare(array, index, index + 1);
                    obj.swap(array, index, index + 1);
                    index --;
                }

                obj.change(array, index + 1, temp);
            }
        },
        intro : function(obj, array){
        },
        merge : function(obj, array){
            var left  = [],
                right = [],
                middle,
                beginIndex,
                endIndex;
            if (array.length <= 1){
                return array;
            }
            beginIndex = array[0].index;
            endIndex   = array[array.length - 1].index;
            middle     = Math.floor(array.length / 2);
            left       = this.merge(obj, array.slice(0     , middle      ));
            right      = this.merge(obj, array.slice(middle, array.length));
            return this._mergeArray(obj, left, right, beginIndex, endIndex);
        },
        _mergeArray : function(obj, left, right, beginIndex, endIndex){
            if (right){
                while (left.length > 0 && right.length > 0){
                    obj.actionsQueue.push({
                        ids       : [left[0].index, right[0].index],
                        operation : 'compare'
                    });
                    if (left[0].value > right[0].value){
                        obj.insertTo(obj.arrayToSort, right[0].index, left[0].index);
                        left = obj.arrayToSort.slice(left[0].index + 1, left[left.length - 1].index + 2);
                        right.shift();
                    } else {
                        left.shift();
                    }
                }
            }
            return obj.arrayToSort.slice(beginIndex, endIndex);
        },
        quick : function(obj, array){
        },
        radix : function(obj, array){
        },
        select : function(obj, array){
            var temp, i, maxIndex,
                unsortedLen = array.length;
            while (unsortedLen > 0){
                maxIndex = 0;
                for (i = 1; i < unsortedLen; i ++){
                    if (obj.compare(array, i, maxIndex) === '>'){
                        maxIndex = i;
                    }
                }
                obj.swap(array, unsortedLen - 1, maxIndex);
                unsortedLen --;
            }
        },
        shell : function(obj, array){
        }
    };

})();

