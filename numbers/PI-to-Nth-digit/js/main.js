;(function(){
    window.addEventListener('load', function(){
        var range = {
            min : 1    ,
            max : 5000 ,
        };

        document.getElementById('compute').addEventListener('click', function(){
            var length = document.getElementById('length').value;
            document.getElementById('result').innerHTML = '';
            if (length > range.min && length < range.max){
                document.getElementById('result').innerHTML = (LongPI(length));
            } else {
                alert('out of range');
            }
        });
    });
})();
