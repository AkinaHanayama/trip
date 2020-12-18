//ここからパララックス
var window_h = $(window).height();
$("#wh span").text(window_h);
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);
  $(".startleft").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
    if (scroll_top >= elem_pos - window_h) {
      $(this).addClass("rightfadein");
    } else {
      $(this).removeClass("rightfadein");
    }
  });
  $(".startright").each(function() {
    var elem_pos1 = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos1));
    if (scroll_top >= elem_pos1 - window_h+150) {
      $(this).addClass("left-fadein");
    } else {
      $(this).removeClass("left-fadein");
    }
  });
});