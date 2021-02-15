function californiaMap() {
    var options = {
        zoom: 11,
        center: { lat: 33.170700, lng: -117.242490 }
    };
    var map = new google.maps.Map(document.getElementById('cali-map'), options);
    var marker = new google.maps.Marker({
        position: { lat: 33.170700, lng: -117.242490 },
        map: map
    });
}
