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


// preloader
function counter_num(){
  var count = setInterval(function(){
      var c = parseInt($('.counter').text());
      $('.counter').text((++c).toString());
      if(c == 100){
          clearInterval(count);
          $('.counter').addClass('hide');
          $('.preloader').addClass('active');
      }
  })
};
counter_num();

// mobile-search-area

// $('.mobile-search').removeClass('slide');

$('.search').on("click", function(){

  
  $('.mobile-search').addClass('slide');
});

$('.search-cross-btn.two').on("click", function(){
  $('.mobile-search').removeClass('slide');
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