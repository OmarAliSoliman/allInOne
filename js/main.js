///<reference path="./typings/globals/jquery/index.d.ts"/>
$(document).ready(function(){

    var myheight = $(window).height();
    var mynavheight = $(".mynavbar").innerHeight();
    var myslideheight = $(".myslide, .carousel-item").height(myheight);

    $(window).scroll(function () {
      if($(this).scrollTop()>180){
        $(".navbar").addClass('mycolor');
      }else{
        $(".navbar").removeClass('mycolor');
        $
      }
    });

    //active
    $(".navbar .nav-item .nav-link").click(function (){
      $(this).parent().addClass("active").siblings().removeClass("active");
     });

    //Smoth Scrool To Div

    $(".navbar .nav-item .nav-link").click(function (){
      $("html, body").animate({
          scrollTop: $("#" + $(this).data("value")).offset().top
      },1000);
  });

  $(".start").click(function(){
    $("html, body").animate({
      scrollTop: $("#" + $(this).data("value")).offset().top
  },1000);
  })
    
    $(".fa-heart").click(function(){
        if($(this).hasClass('heart-color')){
            $(this).removeClass('heart-color');
        }else{
            $(this).addClass('heart-color');
        }
    })

     // shuffle-image
  $('.special-design ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');

    if($(this).data('class') === 'all')
    {
      $('.shuffle-img .col-md').css('opacity','1');
    }
    else
    {
      $('.shuffle-img .col-md').css('opacity','0.2');
      $($(this).data('class')).parent().css('opacity','1');
    }
  });

  //herat number
  $(".shuffle-img .future-heart").click(function(){
    if($(this).hasClass('heart-color-shuffle')){
      $(this).removeClass('heart-color-shuffle');
    }else{
      $(this).addClass('heart-color-shuffle');
    }
  });
  
  //swiper slider(out project)
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

  //follow me
  $('.arrow').click(function(){
    $('.follow-me').addClass('follow-me-append');
    $(this).css("visibility","hidden")
  });

  //textcooment
  $('.comment').click(function () {
    $('.textcomment').css("visibility","visible")
  });

  //swiper slider
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

   //Adjust Floating point
   $(window).scroll(function(){
    if($(this).scrollTop() > 100)
    {
        $(".floting").fadeIn();
        $(".open-button").fadeIn();
    }
    else
    {
        $(".floting").fadeOut();
        $(".open-button").fadeOut();
    }
  });

  $(".floting").click(function(){
    $("body, html").animate({
        scrollTop: 0
    }, 1000);
  });

  //popup chat window
  $(".open-button").click(function(){
    $("#myForm").fadeIn();
    $(this).fadeOut();
  })

  $(".cancel").click(function(){
    $("#myForm").fadeOut();
    $(".open-button").fadeIn();
  });

  //wow
  new WOW().init();
  AOS.init();
});