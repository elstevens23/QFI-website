function caliMap() {
    var caliOptions = {
        zoom: 11,
        center: { lat: 33.170700, lng: -117.242490 }
    };
    var caliMap = new google.maps.Map(document.getElementById('cali-map'), caliOptions);
    var marker = new google.maps.Marker({
        position: { lat: 33.170700, lng: -117.242490 },
        map: caliMap
    });
}
caliMap();
function ukMap() {
    var ukOptions = {
        zoom: 11,
        center: { lat: 51.505699, lng: -2.551830 }
    };
    var ukMap = new google.maps.Map(document.getElementById('uk-map'), ukOptions);
    var marker2 = new google.maps.Marker({
        position: { lat: 51.505699, lng: -2.551830 },
        map: ukMap
    });
}
ukMap();
window.addEventListener('scroll', function (e) {
    if (window.scrollY > window.innerHeight) {
        document.querySelector('#header').classList.add('scrolled');
    }
    else {
        document.querySelector('#header').classList.remove('scrolled');
    }
});
