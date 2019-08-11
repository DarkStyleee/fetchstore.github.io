function initSliderMain() {
  const $header = $('.header');
  const $sliderTop = $('.main__fotorama');

  $('.fotorama')
        .on('fotorama:show ',
            function (e, fotorama, extra) {
              const headerTheme = fotorama.activeFrame.headertheme;
              const sliderTheme = fotorama.activeFrame.textcolor;

              $header.attr("data-theme", headerTheme);
              $sliderTop.attr("data-text-color", sliderTheme);
            }
        )
        .fotorama();
}

function initSliderItem() {
  $('.item_fotorama_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slick-prev" src="build/img/prev-arrow.png">',
    nextArrow: '<img class="slick-next" src="build/img/next-arrow.png">',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },{
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}
  
export default function initSliders() {
  initSliderMain();
  initSliderItem();
}



