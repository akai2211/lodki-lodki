$(document).ready(function() {

  $('.humburger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('hum-active');
    $('.menu').toggleClass('active');
  });

  $('.sale-slider').slick({
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: false
  });

  $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  });