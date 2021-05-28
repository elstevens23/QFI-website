import $ from 'jquery';

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

// scroll to top button

window.addEventListener('scroll', e => {
    if (window.scrollY > window.innerHeight) {
        document.querySelector('#header').classList.add('scrolled')
    } else {
        document.querySelector('#header').classList.remove('scrolled')
    }
})

$(document).trigger('ready', function(){
    $(window).trigger('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').trigger('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
