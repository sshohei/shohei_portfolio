$('.menu_btn').on('click', function () {
	$('header').toggleClass('menu_open');
	$('.line1').toggleClass('move1_line');
	$('.line2').toggleClass('move2_line');
});

$(window).on('load resize',function(){
	var resize;
	if (resize) {
	clearTimeout(resize);
	}
	resize = setTimeout(function() {
		if ($(window).width() >= 768) {
		$(window).on('scroll', function() {
	    if ($(this).scrollTop() > 60) {
				$('.menu_btn').addClass('menu_btn_open');
	    } else {
				$('div.closeDetail header').removeClass('menu_open');
				$('div.closeDetail .menu_btn').removeClass('menu_btn_open');
				$('div.closeDetail .line1').removeClass('move1_line');
				$('div.closeDetail .line2').removeClass('move2_line');
	    }
		});
	} else{
		$(window).off('scroll')
	};
	}, 200);
});

$(function() {
  $('a[href^=\\#]').click(function() {
		var speed = 500; //移動完了までの時間(sec)を指定
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
  });
});
