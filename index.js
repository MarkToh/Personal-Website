$(document).ready(function() {

  AOS.init();

  // Page scrolling animation.
   $('.js-scroll-trigger').bind('click', function(event) {
       var $anchor = $(this);
       $('html, body').stop().animate({
           scrollTop: ($($anchor.attr('href')).offset().top - 55)
       }, 1000, 'easeInOutExpo');
       event.preventDefault();
   });

});