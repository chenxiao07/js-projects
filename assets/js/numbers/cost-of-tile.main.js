;(function(){

    window.addEventListener('load', function(){
        document.getElementById('compute').addEventListener('click', function(){
            var width  = document.getElementById('width').value,
                height = document.getElementById('height').value,
                cost   = document.getElementById('cost').value;

            var totalArea = width * height,
                totalCost = cost  * totalArea;

            document.getElementById('total-area').value = totalArea;
            document.getElementById('total-cost').value = totalCost;
        });
    });

})();
