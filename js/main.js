$( document ).ready(function() {
    $('.startvideo video').get(0).play();
});

$(window).on('load', function() {
 $('.startvideo video').get(0).play();
});
$( ".forclickvvv" ).click(function() {
  $(this).parent().find(".forclickvvv").css("z-index", "0");
  $(this).parent().find(".videoforstart").css("opacity", "1");
  $(this).parent().find(".videoforstart").css("z-index", "4");
  $(this).parent().find(".videoforstart").get(0).play();
});
$(".footer__totop-link").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});




    var fadeStart=150 // 100px scroll or less will equiv to 1 opacity
    var fadeUntil=500 // 200px scroll or more will equiv to 0 opacity
    var fading = $('.startvideo video')
;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity).html(opacity);
});