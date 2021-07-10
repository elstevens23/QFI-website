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


// navbar colour on scroll

window.addEventListener('scroll', function(){
    if (window.scrollY > window.innerHeight) {
        document.querySelector('#header').classList.add('scrolled')
    } else {
        document.querySelector('#header').classList.remove('scrolled')
    }
})


// tabs for failure analysis and thermal characterization

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// scroll-to-top button

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


// contact form at the bottom of each page

function validateForm() {
    var name =  (<HTMLInputElement>document.querySelector('#name')).value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  (<HTMLInputElement>document.querySelector('#email')).value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  (<HTMLInputElement>document.querySelector('#subject')).value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  (<HTMLInputElement>document.querySelector('#message')).value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.getElementById('status').innerHTML = "Sending...";
    // formData = {
    //     'name'     : $('input[name=name]').val(),
    //     'email'    : $('input[name=email]').val(),
    //     'subject'  : $('input[name=subject]').val(),
    //     'message'  : $('textarea[name=message]').val()
    // };
    //
    //
    // $.ajax({
    //     url : "form-to-email.php",
    //     type: "POST",
    //     data : formData,
    //     success: function(data, textStatus, jqXHR)
    //     {
    //
    //         $('#status').text(data.message);
    //         if (data.code) //If mail was sent successfully, reset the form.
    //             $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    //     },
    //     error: function (jqXHR, textStatus, errorThrown)
    //     {
    //         $('#status').text(jqXHR);
    //     }
    // });
}

// accordion

// $(document).trigger('ready',function() {
//
//     $(".toggle-accordion").on("click", function() {
//         var accordionId = $(this).attr("accordion-id"),
//             numPanelOpen = $(accordionId + ' .collapse.in').length;
//
//         $(this).toggleClass("active");
//
//         if (numPanelOpen == 0) {
//             openAllPanels(accordionId);
//         } else {
//             closeAllPanels(accordionId);
//         }
//     })
//
//     openAllPanels = function(aId) {
//         console.log("setAllPanelOpen");
//         $(aId + ' .panel-collapse:not(".in")').collapse('show');
//     }
//     closeAllPanels = function(aId) {
//         console.log("setAllPanelclose");
//         $(aId + ' .panel-collapse.in').collapse('hide');
//     }
//
// });
