$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section').offset().top }, 'slow');
      return false;
    });
  });

// Get the button element
let backToTopBtn = document.getElementById("back-to-top-btn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        // Show the button
        backToTopBtn.style.display = "block";
    } else {
        // Hide the button
        backToTopBtn.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Initialize the application
initApp();