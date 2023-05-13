$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev">  <img src="images/prev-arrow.svg" alt="prev arrow"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {

            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
          }
        ]
      });
});

$(function(){
  $('.digital__container').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next arrow"></button>',
      prevArrow: '<button type="button" class="slick-arrow slick-prev">  <img src="images/prev-arrow.svg" alt="prev arrow"></button>',
      responsive: [
        {
          breakpoint: 9999,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 9999,
          settings: {
              arrows: false,
              
          }
        }
      ]
    });
});
