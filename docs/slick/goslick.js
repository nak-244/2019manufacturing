    $('.slider').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      cssEase: 'linear',
      autoplaySpeed: 0,
      speed: 8000,
      responsive: [{
        breakpoint: 768, //767px以下のサイズに適用
        settings: {
          slidesToShow: 2,
        }
      }]
    });