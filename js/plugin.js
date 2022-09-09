document.querySelectorAll(".navbar ul li a ").forEach((e) =>
  e.addEventListener("click", (e) => {
    document.querySelectorAll(".navbar ul li a ").forEach((e) => {
      e.classList.remove("active");
      $(".navbar-collapse").removeClass("show");
    });
    e.currentTarget.classList.add("active");
  })
);

$("#exp").on("click", function () {
  $(".works").css("transform", "scale(01) translateX(0%)");
  $(".works").css("display", "block");
  $(".navbar-dark .navbar-brand").css("color", "var(--sec-c)");
  $(".navbar-dark .navbar-nav .nav-link").css("color", "white");
  $(".navbar-dark .navbar-nav .nav-link.active").css("color", "var(--sec-c)");
  $(".navbar-toggler").css("border-color", "var(--sec-c)");
  $("footer").removeClass("footer");
  $("footer ul").removeClass("footer-ul");
});

$("#land").on("click", function () {
  $(".works").css("transform", "scale(01) translateX(-100%)");
  $(".navbar-dark .navbar-brand").css("color", "var(--main-c)");
  $(".navbar-dark .navbar-nav .nav-link").css("color", "white");
  $(".navbar-dark .navbar-nav #land.active").css("color", "var(--main-c)");
  $(".navbar-toggler").css("border-color", "var(--main-c)");
  $("footer").removeClass("footer");
  $("footer ul").removeClass("footer-ul");
});

let cli = $("#con").click(function () {
  $("footer").addClass("footer");
  $("footer ul").addClass("footer-ul");
  $(".navbar-dark .navbar-nav .nav-link").css("color", "white");
  $(".navbar-dark .navbar-nav #con.active").css("color", "var(--th-c)");
  $(".works").css("display", "none");
});
