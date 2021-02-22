function initMap() {
    var caliOptions = {
        zoom: 11,
        center: { lat: 33.170700, lng: -117.242490 }
    };
    var ukOptions = {
        zoom: 11,
        center: { lat: 51.505699, lng: -2.551830 }
    };
    var caliMap = new google.maps.Map(document.getElementById('cali-map'), caliOptions);
    var ukMap = new google.maps.Map(document.getElementById('uk-map'), ukOptions);
    var marker = new google.maps.Marker({
        position: { lat: 33.170700, lng: -117.242490 },
        map: caliMap
    });
    var marker2 = new google.maps.Marker({
        position: { lat: 51.505699, lng: -2.551830 },
        map: ukMap
    });
}
window.addEventListener('scroll', function (e) {
    document.querySelector('nav').classList.toggle('scrolled');
});
