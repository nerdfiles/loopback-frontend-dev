/*!
    * Start Bootstrap - Agency v6.0.0 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    $('body').ready(function() {
      // Smooth scrolling using jQuery easing
      var $a = $('a.js-scroll-trigger[href*="#"]:not([href="#"])');
      console.log($a)
      $a.click(function (e) {
          e.preventDefault();
          //console.log('click')
          if (
              location.pathname.replace(/^\//, "") ==
                  this.pathname.replace(/^\//, "") &&
              location.hostname == this.hostname
          ) {
              var target = $(this.hash);
              target = target.length
                  ? target
                  : $("[name=" + this.hash.slice(1) + "]");
              if (target.length) {
                  $("html, body").animate(
                      {
                          scrollTop: target.offset().top - 72,
                      },
                      1000,
                      "easeInOutExpo"
                  );
                  return false;
              }
          }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $(".js-scroll-trigger").click(function () {
          $(".navbar-collapse").collapse("hide");
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $("body").scrollspy({
          target: "#mainNav",
          offset: 74,
      });

      // Collapse Navbar
      var navbarCollapse = function () {
          var $mainNav = $("#mainNav");
          if ($mainNav.offset() && $mainNav.offset().top > 100) {
              $mainNav.addClass("navbar-shrink");
          } else {
              $mainNav.removeClass("navbar-shrink");
          }
      };
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);
    });
})(jQuery); // End of use strict
