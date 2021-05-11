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

// tiny slider carousel

import {tns} from "/node_modules/tiny-slider/src/tiny-slider.js";
//
// var slider = tns({
//     container: '.my-slider',
//     items: 1,
//     axis: "horizontal",
//     slideBy: 1,
//     prevButton: true,
//     nextButton: true,
//     autoplay: true,
//     nav: true,
//     loop: true,
//     responsive: {
//         640: {
//             edgePadding: 20,
//             gutter: 20,
//             items: 2
//         },
//         700: {
//             gutter: 30
//         },
//         900: {
//             items: 3
//         }
//     }
// });

// const slider = tns({
//     container: '.my-slider',
//     loop: true,
//     items: 1,
//     slideBy: 'page',
//     nav: false,
//     autoplay: true,
//     speed: 400,
//     autoplayButtonOutput: false,
//     mouseDrag: true,
//     lazyLoad: true,
//     controlsContainer: "#customize-controls",
//     responsive: {
//         640: {
//             items: 2,
//         },
//
//         768: {
//             items: 3,
//         }
//     }
//
// });

