;(function(){
    var llTsinghua        = new google.maps.LatLng(40.00132, 116.328478),
        llCenter          = llTsinghua,
        initZoom          = 14,
        geocoder          = new google.maps.Geocoder(),
        directionsService = new google.maps.DirectionsService(),
        directionsDisplay = new google.maps.DirectionsRenderer(),
        distanceService   = new google.maps.DistanceMatrixService(),
        $mapCanvas        = document.getElementById('map-canvas'),
        $cityInput1       = document.getElementById('input-city1'),
        $cityInput2       = document.getElementById('input-city2'),
        $form             = document.getElementById('form-calculate-distance'),
        $distance         = document.getElementById('distance'),
        map, cityPoint1, cityPoint2,
        initMap = function(){
            var width  = document.getElementById('container').offsetWidth,
                height = window.innerHeight * 0.6,
                options = {
                    center    : llCenter,
                    mapTypeId : google.maps.MapTypeId.ROADMAP,
                    zoom      : initZoom
                };
            $mapCanvas.setAttribute('style', 'width:'  + width  + 'px;' + 'height:' + height + 'px;');
            map = new google.maps.Map($mapCanvas, options);
            directionsDisplay.setMap(map);
        }, directionsServiceCallback = function(response, status){
            if (status === google.maps.DirectionsStatus.OK) { directionsDisplay.setDirections(response); }
        }, distanceServiceCallback = function(response, status){
            try {
                var originAddress      = response.originAddresses[0],
                    destinationAddress = response.destinationAddresses[0],
                    element            = response.rows[0].elements[0],
                    contentHtml        = '<table class="table table-hover table-bordered margin0">'
                                           + '<tr><td><span class="label label-success w100per">origin</span>     </td><td>' + originAddress         + '</td></tr>'
                                           + '<tr><td><span class="label label-success w100per">destination</span></td><td>' + destinationAddress    + '</td></tr>'
                                           + '<tr><td><span class="label label-success w100per">distance</span>   </td><td>' + element.distance.text + '</td></tr>'
                                           + '<tr><td><span class="label label-success w100per">duration</span>   </td><td>' + element.duration.text + '</td></tr>'
                                       + '</table>';
                showInfo(contentHtml, 'calculate result');
            } catch(err) {
                showError(
                      '<p>could NOT find distance between `' + $cityInput1.value + '`</p>'
                    + '<p>and `' + $cityInput2.value + '`</p>'
                    , 'INPUT ERROR'
                );
            }
        };
    window.addEventListener('resize', function(){ initMap(); });
    $form.onsubmit = function(){
        var directionsServiceRequest = {
                origin      : $cityInput1.value,
                destination : $cityInput2.value,
                travelMode  : google.maps.DirectionsTravelMode.DRIVING
            };
        directionsService.route(directionsServiceRequest, directionsServiceCallback);
        distanceService.getDistanceMatrix({
                origins       : [$cityInput1.value],
                destinations  : [$cityInput2.value],
                travelMode    : google.maps.TravelMode.DRIVING,
                unitSystem    : google.maps.UnitSystem.METRIC,
                avoidHighways : false,
                avoidTolls    : false
            }, distanceServiceCallback);
        return false;
    };
    initMap();
    $cityInput1.focus();
})();
