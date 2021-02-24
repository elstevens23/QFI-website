// import * as $ from 'jquery'

function initMap():void {
    const caliOptions = {
        zoom: 11,
        center: { lat: 33.170700, lng: -117.242490 }
    };
    const ukOptions = {
        zoom: 11,
        center: { lat: 51.505699, lng: -2.551830 }
    };
    const caliMap = new google.maps.Map(document.getElementById('cali-map'), caliOptions);
    const ukMap = new google.maps.Map(document.getElementById('uk-map'), ukOptions);
    const marker = new google.maps.Marker({
        position: { lat: 33.170700, lng: -117.242490 },
        map: caliMap
    });
    const marker2 = new google.maps.Marker({
        position: { lat: 51.505699, lng: -2.551830 },
        map: ukMap
    });
}

window.addEventListener('scroll', e => {
    document.querySelector('nav').classList.toggle('scrolled')
})


// document.querySelector(document).ready(function(){
//     var $window = document.querySelector(window);
//     document.querySelector('section[data-type="background"]').each(function(){
//         var $bgobj = document.querySelector(this); // assigning the object
//
//         document.querySelector(window).scroll(function() {
//             var yPos = -($window.scrollTop / $bgobj.data('speed'));
//
//             // Put together our final background position
//             var coords = '50% '+ yPos + 'px';
//
//             // Move the background
//             $bgobj.css({ backgroundPosition: coords });
//         });
//     });
// });
//
// //menu transition js
// document.querySelector(document).ready(function(){
//     document.querySelector(window).scroll(function(){
//         var scroll = document.querySelector(window).scrollTop;
//         if (scroll > 0) {
//             document.querySelector(".navbar").classList.add("navbar-scroll");
//         }
//         else{
//             document.querySelector(".navbar").removeClass("navbar-scroll");
//         }
//         if (scroll > 200) {
//             document.querySelector(".navbar").classList.add("bg-primary");
//         }
//
//         else{
//             document.querySelector(".navbar").removeClass("bg-primary");
//         }
//     })
// })



// $(document).ready(function(){
//     var $window = $(window);
//     $('section[data-type="background"]').each(function(){
//         var $bgobj = $(this); // assigning the object
//
//         $(window).scroll(function() {
//             var yPos = -($window.scrollTop() / $bgobj.data('speed'));
//
//             // Put together our final background position
//             var coords = '50% '+ yPos + 'px';
//
//             // Move the background
//             $bgobj.css({ backgroundPosition: coords });
//         });
//     });
// });
//
// //menu transition js
// $(document).onload(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 0) {
//             $(".navbar").addClass("navbar-scroll");
//         }
//         else{
//             $(".navbar").removeClass("navbar-scroll");
//         }
//         if (scroll > 200) {
//             $(".navbar").addClass("bg-primary");
//         }
//
//         else{
//             $(".navbar").removeClass("bg-primary");
//         }
//     })
// })
