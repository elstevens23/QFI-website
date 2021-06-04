"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
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
window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight) {
        document.querySelector('#header').classList.add('scrolled');
    }
    else {
        document.querySelector('#header').classList.remove('scrolled');
    }
});
jquery_1.default(document).trigger('ready', function () {
    jquery_1.default(window).trigger('scroll', function () {
        if (jquery_1.default(this).scrollTop() > 50) {
            jquery_1.default('#back-to-top').fadeIn();
        }
        else {
            jquery_1.default('#back-to-top').fadeOut();
        }
    });
    jquery_1.default('#back-to-top').trigger('click', function () {
        jquery_1.default('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
