$(".video__play-btn").on("click", () => {
  $(".modal").toggleClass("hidden");
});
$(".close").on("click", () => {
  $(".modal").toggleClass("hidden");
});

$(".welcome__button").on("click", () => {
  $(".search").toggleClass("hidden");
});
$(".search__close").click(() => {
  $(".search").toggleClass("hidden");
});
