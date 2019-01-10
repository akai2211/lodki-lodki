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
  
  });