$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section').offset().top }, 'slow');
      return false;
    });
  });