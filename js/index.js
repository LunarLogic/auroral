$(document).ready(function () {
  var radio = $(".filters-container").find("input:radio");

  radio.on("click", function () {
    $(".js-auroral").css({"opacity" : "0"});
    $(".filters-container").find("input:checked").each(function () {
      $(".js-auroral." + $(this).attr("rel")).css({"opacity" : "1"});
    });
  });
});