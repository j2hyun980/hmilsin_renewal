$(function () {
  //depth2
  $(".depth2Wrap").hide();
  $(".gnb > li").mouseenter(function () {
    $(this).find(".depth2Wrap").addClass("active");
    $(this).find(".underline").addClass("active");
    $(this).find(".depth2Wrap").stop().fadeIn();
  });
  $(".gnb > li").mouseleave(function () {
    $(this).find(".depth2Wrap").removeClass("active");
    $(this).find(".underline").removeClass("active");
    $(this).find(".depth2Wrap").stop().fadeOut();
  });

  //mgnb
  $(".mgnb_wrap").hide();
  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });
  $(".mutil").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".mdepth2").stop().slideUp();
    $(".mgnb .mdepth1").removeClass("active");
  });
  $(".mgnb .mdepth1").click(function () {
    $(this).find(".mdepth2").stop().slideToggle();
    $(this).toggleClass("active");
  });

  // banner
  const mb = new Swiper('.slide_banner', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 600,
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true, },
  });

  //gotop-btn
  $(".gotop").hide();
  $(".gotop").click(function () {
    $(window).scrollTop(0);
  });
  $(window).scroll(function () {
    let mbtnScroll = $(this).scrollTop();
    if (mbtnScroll > 400) {

      $(".gotop").addClass("active").fadeIn();
    } else {
      $(".gotop").removeClass("active");
    }
  });

  // #center, tap-menu
  $("#center .content_list > li").not(":first").hide();
  $("#center .tit .menu_list > li").click(function () {
    let btn = $(this).index();
    $("#center .tit .menu_list > li").eq(btn).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $("#center .content_list > li").eq(num).show(500).siblings().hide(500);
  });

});