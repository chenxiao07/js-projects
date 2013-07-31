;(function(){

    window.addEventListener('load', function(){
        document.getElementById('compute').addEventListener('click', function(){
            var width  = document.getElementById('width').value,
                height = document.getElementById('height').value,
                cost   = document.getElementById('cost').value;

            var totalArea = width * height,
                totalCost = cost  * totalArea;

            document.getElementById('total-area').innerHTML = totalArea;
            document.getElementById('total-cost').innerHTML = totalCost;
        });
    });

})();
