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

   // Adapt the height of the images to the div elements
   //  var images = $('.box-image');
   //  var imageHeight = images[0].height;
   //  var boxes = $('.content-box');
   //  $(boxes).each(function(i, element) {
   //      $(element).css({'height': imageHeight + 'px'});
   //  });
});