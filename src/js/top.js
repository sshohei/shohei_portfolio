
$(function(){
$( "img.lazy" ).lazyload({
	threshold: 180,
	effect: "fadeIn",
	effect_speed: 200,
});
});

$(function(){
	$('.nav_top').addClass('active');
	var img_url='/src/img/nav_top_active.svg';
	$('.active').children('img').attr('src',img_url);
	$('a.link_top').click(function(){
		return false;
	})
});

$(window).on('load scroll resize' ,function(){
    var $windowHeight = $(window).height(),
        $topWindow = $(window).scrollTop();
    $('.tt_animation').each(function(){
        var $targetPosition = $(this).offset().top;
        if( $topWindow > $targetPosition - $windowHeight){
            $(this).addClass('tt_move tt_border');
        }else{
            $(this).removeClass('tt_move tt_border');
          }
    });
});
