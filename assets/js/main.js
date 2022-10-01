(function ($) {
    "use strict";

    $(document).ready(function(){
      

      // home slider 

      const swiper = new Swiper(".home-slider", {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        loop: true,
        speed: 500,
        autoplay: {
          delay: 3500,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
      $(".home-slider").mouseenter(function () {
        swiper.autoplay.stop();
      });
      $(".home-slider").mouseleave(function () {
        swiper.autoplay.start();
      });

      // menu 
      $(window).on('resize', function(){
        let docStyle = getComputedStyle(document.documentElement);
        let stickyMenuSpaceY = parseInt(docStyle.getPropertyValue('--sticky-menu-space-y')) * 2;
        // $('.js-header-1').css({'height': $('.js-header-inner-1').outerHeight() + stickyMenuSpaceY });
        // $('.js-header-2').css({'height': $('.js-header-inner-2').outerHeight() + stickyMenuSpaceY });
      });
      function stickyMenu () {
        if ($(window).scrollTop() > 45) {
          $('.js-header-1').addClass('header-sticky');
          $('.js-header-2').addClass('header-sticky');
        } else {
            $('.js-header-1').removeClass('header-sticky');
            $('.js-header-2').removeClass('header-sticky');
        }
      }
      $(window).on('load', function(){
        stickyMenu();
      });
      $(window).scroll(function(){
        stickyMenu();
      });

      



      // $('.js-menu-bar').on('click', function() {
      //   $('.js-header-left').toggle();
      //   $('.js-header-right').toggle();
      // });

      
      function mobileMenuItemsTransition () {
        $('.js-mobile-menu-items li').each(function(idx, elm ) {
          const delay = idx * 0.05;
          $(this).css({'transitionDelay': `${delay}s`});
        });
      }
      mobileMenuItemsTransition();

      // toggle mobile menu
      function toggleMobileMenu (menuBarClass, menuWrapperClass, menuCloseClass) {
        $(menuBarClass).on('click', function(){
          $(menuWrapperClass).addClass('open');
        });
        $(menuCloseClass).on('click', function(){
          $(menuWrapperClass).removeClass('open');
        });
      }
      // for heading one
      toggleMobileMenu('.js-menu-bar-1', '.js-mobile-menu-1', '.js-mobile-menu-close-1');
      toggleMobileMenu('.js-menu-bar-2', '.js-mobile-menu-2', '.js-mobile-menu-close-2');

      // $('.js-menu-bar-1').on('click', function(){
      //   $('.js-mobile-menu-1').addClass('open');
      // });
      // $('.js-mobile-menu-close-1').on('click', function(){
      //   $('.js-mobile-menu-1').removeClass('open');
      // });
      function smoothScroll(menuItem, menuWrapperClass, menuHeader) {
        $(menuItem).on('click', function(event) {
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
            $(menuWrapperClass).removeClass('open');
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top - $(menuHeader).outerHeight()
            }, {duration: 500, easing: "linear" }, function(){
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          }
        });
      }
      // for header 1
      smoothScroll('.js-header-1 a', '.js-mobile-menu-1', '.js-header-2');
      // for header 2
      smoothScroll('.js-header-2 a', '.js-mobile-menu-2', '.js-header-2');
      // $(".js-header-1 a").on('click', function(event) {
      //   // Make sure this.hash has a value before overriding default behavior
      //   if (this.hash !== "") {
      //     event.preventDefault();
    
      //     // Store hash
      //     var hash = this.hash;
      //     $('.js-mobile-menu-1').removeClass('open');
      //     // Using jQuery's animate() method to add smooth page scroll
      //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      //     $('html, body').animate({
      //       scrollTop: $(hash).offset().top - $('.js-header-2').outerHeight()
      //     }, {duration: 500, easing: "linear" }, function(){
      //       // Add hash (#) to URL when done scrolling (default click behavior)
      //       window.location.hash = hash;
      //     });
      //   }
      // });

      // for header-2

      // $('.js-menu-bar-2').on('click', function(){
      //   $('.js-mobile-menu-2').addClass('open');
      // });
      // $('.js-mobile-menu-close-2').on('click', function(){
      //   $('.js-mobile-menu-2').removeClass('open');
      // });
      
      // $(".js-header-2 a").on('click', function(event) {
      //   // Make sure this.hash has a value before overriding default behavior
      //   if (this.hash !== "") {
      //     event.preventDefault();
    
      //     // Store hash
      //     var hash = this.hash;
      //     $('.js-mobile-menu-2').removeClass('open');
      //     // Using jQuery's animate() method to add smooth page scroll
      //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      //     $('html, body').animate({
      //       scrollTop: $(hash).offset().top - $('.js-header-2').outerHeight()
      //     }, {duration: 500, easing: "linear" }, function(){
      //       // Add hash (#) to URL when done scrolling (default click behavior)
      //       window.location.hash = hash;
      //     });
      //   } 
      // });
      // if(window.innerWidth > window.innerWidth){
      //   $('.home-slider').css({'height': '900px'});
      // } else {
      //   $('.home-slider').css({'height': ''});
      // }
      // $(window).on('orientationchange', function(event) {
      //   console.log('changed')
      //   if(window.innerHeight > window.innerWidth){
      //     $('.home-slider').css({'height': '900px'});
      //   } else {
      //     $('.home-slider').css({'height': ''});
      //   }
      // });
      
      if($(window).height() < 450) {
        $('.home-slider').addClass('resize-slider');
      } else {
        $('.home-slider').removeClass('resize-slider');
      }
      
    });

}(jQuery));