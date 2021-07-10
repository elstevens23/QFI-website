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
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
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
function validateForm() {
    var name = document.querySelector('#name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email = document.querySelector('#email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    }
    else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject = document.querySelector('#subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message = document.querySelector('#message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.getElementById('status').innerHTML = "Sending...";
}
