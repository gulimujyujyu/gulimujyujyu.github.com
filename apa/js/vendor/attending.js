var Helper = {
    ParseLatLngStr: function(str){
        var pat = /^([-]?[0-9.]+[0-9]+){1},([-]?[0-9.]+[0-9]+){1}$/;
        var matches = pat.exec(str);

        if (matches) {
            return new google.maps.LatLng(matches[1],matches[2]);
        } else {
            return null;
        }
    },
    ShowResult: function(first_match,str) {
        if (!first_match) {
            $('#result_address').text("N/A");
            $('#result_latlng').text("N/A");
        } else {
            $('#result_address').text(first_match.formatted_address);
            $('#result_latlng').text(first_match.geometry.location.lat()+','+first_match.geometry.location.lng());
        }
        $('span.debug-info')
            .fadeIn('slow')
            .text(str)
            .fadeOut('slow');
        //auto focus
        $('#geocode_input').focus();
    }
}

$(document).ready(function(){
    var map_options = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("central_map_canvas"),
        map_options);

    var geocoder = new google.maps.Geocoder();

    var g_marker = null;
});