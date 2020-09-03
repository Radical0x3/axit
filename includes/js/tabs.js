"use strict";
$(document).ready(function () {
  // <------ Tabs change START ------>
  $(".tabs__item").on("click", function (elem) {
    let e = $(this);
    elem = elem.currentTarget;

    let classArray = elem.className.split(" ");
    if (!classArray.includes("active")) {
      $(".tabs__item").removeClass("active");
      $(this).addClass("active");
    }

    let index = elem.className.split(" ")[1];
    let text = $(`.tabs__content .${index}`);
    let textArray = text[0].className.split(" ");
    if (!text.is(":visible")) {
      $(".tabs__text").slideUp(0);
      text.slideDown(0);
    }
  });
  // <------ Tabs change END ------>

  // <------ Burger START ------>
  $(".mobile__burger").on("click", function (event) {
    $(".mobile__burger, .mobile__menu").toggleClass("active-nav");
    $("body").toggleClass("lock");
  });
  // <------ Burger END ------>
});
