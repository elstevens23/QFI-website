function californiaMap():void {
    const options = {
        zoom: 11,
        center: { lat: 33.170700, lng: -117.242490 }
    };
    const map = new google.maps.Map(document.getElementById('cali-map'), options);
    const marker = new google.maps.Marker({
        position:{ lat: 33.170700, lng: -117.242490},
        map:map
    });
}
