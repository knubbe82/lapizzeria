var map;
function initMap() {
    var latLng = {
        lat: parseFloat(options.latitude),
        lng: parseFloat(options.longitude)
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: latLng,
        zoom: parseInt(options.zoom)
    });

    var maker = new google.maps.Marker({
       position: latLng,
       map: map,
       title: 'La Pizzeria'
    });
}

$ = jQuery.noConflict();

$(document).ready(function () {
    // Menu Button
   $('.mobile-menu a').on('click', function () {
       $('nav.site-nav').toggle('slow');
   });
    // Show the Mobile Menu
   var breakpoint = 768;
   $(window).resize(function () {
       if($(document).width() >= breakpoint) {
           $('nav.site-nav').show();
       } else {
           $('nav.site-nav').hide();
       }
   });

   // Fluidbox plugin
    jQuery('.gallery a').each(function () {
       jQuery(this).attr({'data-fluidbox': ''});
    });

    if(jQuery('[data-fluidbox]').length > 0) {
        jQuery('[data-fluidbox]').fluidbox();
    }

    // Adapt Mat to Height
    var map = $('#map');
    if (map.length > 0) {
        if ($(document).width() >= breakpoint) {
            displayMap(0);
        } else {
            displayMap(300);
        }
    }
    $(window).resize(function () {
        if ($(document).width() >= breakpoint) {
            displayMap(0);
        } else {
            displayMap(300);
        }
    });

   // Adapt the height of the images to the div elements
   //  var images = $('.box-image');
   //  var imageHeight = images[0].height;
   //  var boxes = $('.content-box');
   //  $(boxes).each(function(i, element) {
   //      $(element).css({'height': imageHeight + 'px'});
   //  });

    function displayMap(value) {
        if (value == 0) {
            var locationSection = $('.location-reservation');
            var locationHeight = locationSection.height();
            $('#map').css({'height': locationHeight});
        } else {
            $('#map').css({'height': value});
        }
    }
});