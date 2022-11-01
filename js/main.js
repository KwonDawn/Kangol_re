$(document).ready(function () {
  AOS.init();

  media();
  function media() {
    if ($(window).width() >= 1050) {
      $(".menu-box li").mouseenter(function () {
        const result = $(this).attr("data-alt");
        $(".sub-menu").removeClass("active");
        $(".header-area").addClass("active");
        $(".fill").addClass("active");
        $(".icon-search input").addClass("active");
        $(`#${result}`).addClass("active");
        $(".sub-menu-box").addClass("active");
      });

      $(".sub-menu-box").mouseleave(function () {
        $(this).removeClass("active");
        $(".header-area").removeClass("active");
        $(".fill").removeClass("active");
        $(".icon-search input").removeClass("active");
      });
    } else {
      $('#hamburger').click(function () {
        $(this).toggleClass('active');
        $(".menu-box").toggleClass("active");
        $(".icon-search").toggleClass("active");
        $('.open').toggleClass("active");
        $(".close").toggleClass("active");
        
      });
    }
  }

  $(window).scroll(function () {
    let sct = $(window).scrollTop();

    if (sct >= 500) {
      $(".header-area").addClass("active");
      $(".fill").addClass("active");
      $(".icon-search input").addClass("active");
    } else {
      $(".header-area").removeClass("active");
      $(".fill").removeClass("active");
      $(".icon-search input").removeClass("active");
    }
  });

  const btn = $(".top-btn");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3500,
    },
  });

  var swiper = new Swiper(".best", {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 3,
    // autoplay: {
    //   delay: 3500,
    // },
   
  });

  // for (let i = 0; i < $(".best-menu-content").length; i++) {
  //   $(".best-menu-content")
  //     .eq(i)
  //     .on("click", function () {
  //       $(".best-img").css("transform", "translateX(-" + i + "50vw)");
  //     });
  // }
});
