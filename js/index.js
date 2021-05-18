$(document).ready(function () {
  $(".icon-hamburger-button").click(function () {
    if ($(".navbar-menu").css("display") == "none") {
      $(".navbar-menu").show();
    } else {
      $(".navbar-menu").hide();
    }
    $(".icon-hamburger, .icon-close").toggleClass("icon-hamburger icon-close");
  });

  $(".list-header").click(function () {
    if ($(this).siblings(".list").css("display") == "none") {
      $(this).css({})
      $(this).siblings(".list").show();
    } else {
      $(this).siblings(".list").hide();
    }
  });
});
