function caliMap():void {
    const caliOptions = {
        zoom: 11,
        center: { lat: 33.170700, lng: -117.242490 }
    };
    const caliMap = new google.maps.Map(document.getElementById('cali-map'), caliOptions);
    const marker = new google.maps.Marker({
        position: { lat: 33.170700, lng: -117.242490 },
        map: caliMap
    });
}

caliMap();

function ukMap():void {
    const ukOptions = {
        zoom: 11,
        center: { lat: 51.505699, lng: -2.551830 }
    };
    const ukMap = new google.maps.Map(document.getElementById('uk-map'), ukOptions);
    const marker2 = new google.maps.Marker({
        position: { lat: 51.505699, lng: -2.551830 },
        map: ukMap
    });
}

ukMap();

window.addEventListener('scroll', e => {
    if (window.scrollY > window.innerHeight) {
        document.querySelector('#header').classList.add('scrolled')
    } else {
        document.querySelector('#header').classList.remove('scrolled')
    }
})

