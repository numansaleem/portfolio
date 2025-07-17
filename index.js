window.addEventListener("load", function () {
  document.querySelectorAll(".glider-contain").forEach(function (container) {
    const gliderElem = container.querySelector(".glider");
    const dots = container.querySelector(".dots");
    const prev = container.querySelector(".glider-prev");
    const next = container.querySelector(".glider-next");

    const glider = new Glider(gliderElem, {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      dots: dots,
      rewind: true,
      arrows: {
        prev: prev,
        next: next,
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });


    let slideIndex = 0;
    let autoplay = setInterval(function () {
      slideIndex = (slideIndex + 1) % glider.slides.length;
      glider.scrollItem(slideIndex);
    }, 3000);

    function resetAutoplay() {
      clearInterval(autoplay);
      autoplay = setInterval(function () {
        slideIndex = (slideIndex + 1) % glider.slides.length;
        glider.scrollItem(slideIndex);
      }, 4000);
    }

    prev.addEventListener("click", function () {
      slideIndex = glider.slide;
      resetAutoplay();
    });
    next.addEventListener("click", function () {
      slideIndex = glider.slide;
      resetAutoplay();
    });
  });
});
