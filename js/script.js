$(function(){
'use strict';
// banner slider js starts

$('#banner_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows:false,
    dots:true,
  });


  // menu fix starts
  var navOff = $('.main_menu').offset().top;
 $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
     if (scrolling > navOff) {
 $('.main_menu').addClass('menu_fix');
    }
     else {
         $('.main_menu').removeClass('menu_fix');  
     }
 });
//  menu fix end



// button js starts
$('.backtop_button').click(function(){
$('html,body').animate({
  scrollTop:0,
}), 2500;

});
$(window).scroll(function(){
var scrollTop = $(this).scrollTop();
if (scrollTop > 200){
  $('.backtop_button').fadeIn();
}
else {
  $('.backtop_button').fadeOut();
}
});




// video js starts
$('.venobox').venobox(); 


});
// testi slider starts
$('.test_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// class slider starts
$('.class_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows:false,
  dots:false,
  // nextArrow:'<i class="fas fa-chevron-right next_arr"></i>',
  // prevArrow:'<i class="fas fa-chevron-left prev_arr"></i>',
 
  responsive: [
    
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        arrows:false,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        
      }
    }
    
  ]
  
  
});
