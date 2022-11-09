(function($) { "use strict";


// mobile-drop-down
jQuery('.dropdown-icon').on('click',function(){
  // alert()
  // $(this).next('.mob-submenu').slideToggle();
  jQuery(this).toggleClass('active').next('ul').slideToggle();
  jQuery(this).parent().siblings().children('ul').slideUp();
  jQuery(this).parent().siblings().children('.active').removeClass('active');
});


$('.sidebar-button').on("click", function(){
  $('.main-menu').addClass('show-menu');
});

$('.menu-close-btn').on("click", function(){
  $('.main-menu').removeClass('show-menu');
});


//Preloder
jQuery(window).on('load', function () {
  $(".egns-preloader").delay(1600).fadeOut("slow");
});

// mobile-search-area

// $('.mobile-search').removeClass('slide');

$('.search').on("click", function(){
  $('.mobile-search').addClass('slide');
});

$('.search-cross-btn.two').on("click", function(){
  $('.mobile-search').removeClass('slide');
});

// mobile menu
$('.mobile-menu-btn').on("click", function(){
  $('.main-menu-wrap').addClass('slide');
});
$('.menu-close-btn').on("click", function(){
  $('.main-menu-wrap').removeClass('slide');
});

// submenu
// $(document).ready(function(){
//   $(".main-nav li").click(function(){
    
//     var target = $(".sub-menu-block");
//     $(target).slideToggle();
//   });
// });
$('.back-to-top').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

$(".main-nav li").on('click', function(e) {
  e.preventDefault();
  $(".sub-menu-block").slideToggle();
  $(this).toggleClass('active');

});


/* ---------------------------------------------
     NiceSelect
--------------------------------------------- */
 
 $('select').niceSelect();
 


/* ---------------------------------------------
     Magnific Popup video
--------------------------------------------- */

$('.popup-youtube').magnificPopup({
  type: 'iframe'
});




// Home 1 Banner
var swiper = new Swiper(".banner1-slider", {
  slidesPerView: 1,
  speed: 1200,
  // spaceBetween: 15,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


}(jQuery));
