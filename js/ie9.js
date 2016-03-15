
$(function() {
$("img.latelazy").lazyload({
event : "sporty"
});
});
$(window).bind("load", function() { 
var timeout = setTimeout(function() {$("img").trigger("sporty")}, 3000);
}); 

$(function() {
Array.prototype.remove = function(element) {
for (var i = 0; i < this.length; i++)
if (this[i] == element) this.splice(i,1); 
};

function preload(images, progress) {
var total = images.length;
$(images).each(function(){
var src = this;
$('<img/>')
.attr('src', src)
.load(function() {
	images.remove(src);
	progress(total, total - images.length);
});
});
}

var now_percent = 0;
var displaying_percent= 0;
preload([
'images/logo_text.svg',
'images/sp/menu/t.svg',
'images/sp/menu/1_ov.svg',
'images/sp/menu/2_ov.svg',
'images/sp/menu/3_ov.svg',
'images/8000_right.svg',
'images/caution.svg',
'images/pc.svg',
'images/pc_text.svg',
'images/sp/section1/pc_text.svg',
'images/mw_01.svg',
'images/mw_01text.svg',
'images/sp/section1/mw_01_text.svg',
'images/mw_02.svg',
'images/mw_02text.svg',
'images/sp/section1/mw_02_text.svg',
'images/8000.svg',
'images/sp/arrow_d.svg',
'images/sp/arrow_top.svg',
'images/source.svg',
'images/638.svg'
], function(total, loaded){
now_percent = Math.ceil(100 * loaded / total);
});

var timer = window.setInterval(function() {
if (displaying_percent >= 100) {
window.clearInterval(timer);
$('.loading_block').fadeOut('slow', function() {
$('#wrapper_all').fadeIn('slow');

$('.section0_title,.pc,.people_left,.people_right').css("opacity",0);
$('.section0_title').css("margin-left","-20px");
$('.section0_title').animate({"opacity":1,"margin-left":0},1000,
function(){
	$('.pc').animate({"opacity":1},300,
	function(){
		$('.people_left').animate({"opacity":1},300,
		function(){
				$('.people_right').animate({"opacity":1},300,
			function(){
					$('.question_top').animate({"opacity":1},300);
					});
				});// アニメーション作動
		});// アニメーション作動
});// アニメーション作動


});
} else {
if (displaying_percent < now_percent) {
displaying_percent++;
$('#load-text').html(displaying_percent + '%');
}
}
}, 
16);
});



$(function(){
$('.menu_btn').on('click', function () {
$('.side_menu').toggleClass('menu_open');
$('.line1').toggleClass('move1_line');
$('.line2').toggleClass('move2_line');
$('.line3').toggleClass('move3_line');
$('.menu_btn').toggleClass('close');
$('html,body').toggleClass('overflow');
});
$('.menu_text').on('click', function () {
$('.side_menu').removeClass('menu_open');
$('html,body').removeClass('overflow');
$('.line1').removeClass('move1_line');
$('.line2').removeClass('move2_line');
$('.line3').removeClass('move3_line');
$('html,body').off('.noScroll');
});
$('.browser_attention_box').on('click', function () {
$('.browser_attention_area').fadeIn(400);
});
$('.browser_attention_close').on('click', function () {
$('.browser_attention_area').fadeOut(400);
});
$('.browser_attention_area').on('click', function () {
$('.browser_attention_area').fadeOut(400);
});



});

$(document).ready(function() {
	var TimeOut = 800;
	$(".animated").off();
	$(".fadeInDownShort").off();
	$(".delay-5300").off();
	$(".delay-4700").off();
	$(".delay-3300").off();
	$(".delay-1500").off();
	$(".delay-1700").off();
	$(".delay-1900").off();
	$(".delay-2100").off();
	$(".delay-2300").off();
	$(".animated").removeClass("animated");
	$(".fadeInDownShort").removeClass("fadeInDownShort");
	$(".delay-5300").removeClass("delay-5300");
	$(".delay-5500").removeClass("delay-5500");
	$(".delay-4700").removeClass("delay-4700");
	$(".delay-3300").removeClass("delay-3300");
	$(".delay-1500").removeClass("delay-1500");
	$(".delay-1700").removeClass("delay-1700");
	$(".delay-1900").removeClass("delay-1900");
	$(".delay-2100").removeClass("delay-2100");
	$(".delay-2300").removeClass("delay-2300");
	$('#section7 .base_img,#section9 .base_img').css("opacity",0);
	$('#section10 .base_img,.balloon_animate10').css("opacity",0);
	function killSection9(){
		if($('#section9 .base_img').css("opacity")==1){
			$('#section9 .base_img').off();
			$('#section9 .base_img').animate({"opacity":0},100);
		}
		
	}
$('#wrapper').fullpage({
menu: false,
navigation: true,
scrollOverflow: true,
normalScrollElements: '.browser_attention_area',
navigationPosition : 'right',
navigationTooltips: true,
recordHistory: true,
loopBottom: false,
onLeave: function(index, nextIndex, direction){

if(index == 1 ){
	killSection9()
	$('.section0_title,.pc,.people_left,.people_right').stop();
setTimeout(
function(){$('.section0_title,.pc,.people_left,.people_right').css("opacity",0);},TimeOut);
$('.logo_top').fadeOut(500);
setTimeout(function(){$('.question_top').fadeIn(400);},400);
$('.section_number1').fadeIn(100);
$('.caution_link').addClass('fadein');
$('.caution_link_0').addClass('fadeout');

setTimeout(function(){$('.caution_link_0').removeClass('go');},1000);// これはSP用なので無視してください
}
if(index == 2 ){
	killSection9()
setTimeout(function(){
	$('.circleLine_animate02,.circleLine_animate2,.text01_anime').stop();
$('.circleLine_animate02,.circleLine_animate2,.text01_anime').css("opacity",0);
$('.slot01').html(00);
$('.slot1').html(00);
}
,TimeOut);
}

if(index == 3 ){
	killSection9()
setTimeout(
function(){
	$('.circle_animate3,.circle_animate3-2,.icon_638,.icon_332,.icon_3').stop();
	$('.circle_animate3,.circle_animate3-2,.icon_638,.icon_332,.icon_3').css("opacity",0);
},TimeOut);


}
if(index == 4 ){
	killSection9()
setTimeout(function(){
	$('.circleLine_animate04,.circleLine_animate4,.balloon_animate4,.text02_anime').stop();
	$('.circleLine_animate04,.circleLine_animate4,.balloon_animate4,.text02_anime').css("opacity",0);
	$('.slot02').html(00);
	$('.slot2').html(00);
	},TimeOut);
}
if(index == 5 ){
	killSection9()
setTimeout(function(){
	$('.balloon_animate5,.bag_animation1,.bag_animation2,.bag_animation3,.bag_animation4,.bag_animation5,.bag_animation6,.bag_animation7,.bag_animation8,.bag_animation9,.bag_animation10,.bag_animation11').stop(true,false).animate({"opacity":0},100);
	$('.balloon_animate5,.bag_animation1,.bag_animation2,.bag_animation3,.bag_animation4,.bag_animation5,.bag_animation6,.bag_animation7,.bag_animation8,.bag_animation9,.bag_animation10,.bag_animation11').css("opacity",0);
},TimeOut);
}
if(index == 6 ){
	killSection9()
setTimeout(function(){
	$('#section7 .base_img,.balloon_box').stop(true,false).animate({"opacity":0},100);
	$('#section7 .base_img,.balloon_box').off();

},TimeOut);
}
if(index == 7 ){
	
setTimeout(function(){
	$('.circleLine_animate08,.circleLine_animate8,.text03_anime').stop();
	$('.circleLine_animate08,.circleLine_animate8,.text03_anime').css("opacity",0);
	$('.slot03').html(00);
	$('.slot3').html(00);
	},TimeOut);
}
if(index == 8 ){

setTimeout(function(){
	$('#section9 .base_img,.balloon_box_sec9,.circle_animate9,#section9').stop(true,false).animate({"opacity":0},100);
	$('#section9 .base_img').off();
	return false;
	
	},TimeOut);
}
if(index == 9 ){
	killSection9()
	setTimeout(function(){
	$('#section10 .base_img,.balloon_animate10').stop(true,false).animate({"opacity":0},100);
	$('#section10 .base_img,.balloon_animate10').off();
	},TimeOut);
}
if(index == 10 ){
	killSection9()
setTimeout(function(){
	$('.circleLine_animate011,.circleLine_animate11,.text04_anime').stop();
	$('.circleLine_animate011,.circleLine_animate11,.text04_anime').css("opacity",0);
	$('.slot04').html(00);
	$('.slot4').html(00);
	},TimeOut);
}
if(index == 11 ){
	killSection9()
setTimeout(function(){
	$('.circle_animate12,.circle_animate12-2,.2-5_animation1,.2-5_animation2,.2-5_animation3,.2-5_animation4,.2-5_animation5,.2-5_animation6').stop();
	$('.circle_animate12,.circle_animate12-2,.2-5_animation1,.2-5_animation2,.2-5_animation3,.2-5_animation4,.2-5_animation5,.2-5_animation6').css("opacity",0);
	},TimeOut);
}
if(index == 12 ){
	killSection9()
setTimeout(function(){
	$('.circleLine_animate13,.circleLine_animate013,.text05_anime').stop();
	$('.circleLine_animate13,.circleLine_animate013,.text05_anime').css("opacity",0);
	$('.slot05').html(00);
	$('.slot5').html(00);
	},TimeOut);
}
if(index == 13 ){
	killSection9()
setTimeout(function(){
	$('.circle_animate14,.circle_animate14-2,.3-2_animation1,.3-2_animation2,.3-2_animation3,.3-2_animation4,.3-2_animation5').stop();
$('.circle_animate14,.circle_animate14-2,.3-2_animation1,.3-2_animation2,.3-2_animation3,.3-2_animation4,.3-2_animation5').css("opacity",0);
},TimeOut);
}
if(index == 14 ){
	killSection9()
setTimeout(function(){
	$('.circleLine_animate015,.circleLine_animate15,.3-5_animation3,.3-5_animation4,.3-5_animation1,.3-5_animation2').stop();
$('.circleLine_animate015,.circleLine_animate15,.3-5_animation3,.3-5_animation4,.3-5_animation1,.3-5_animation2').css("opacity",0);
	},TimeOut);
}
if(index == 15 ){
	
setTimeout(function(){
	$('.circleLine_animate15,.circleLine_animate015,.text06_anime').stop();
	$('.circleLine_animate15,.circleLine_animate015,.text06_anime').css("opacity",0);
	$('.slot06').html(00);
	$('.slot6').html(00);
	},TimeOut);
}
if(index == 16 ){
	killSection9()
setTimeout(function(){
	$('#section16').animate({"opacity":0},100);
	$('.circle_animate16,.circle_animate16-2,.3-4_animation1,.3-4_animation2,.3-4_animation3,.3-4_animation4,.last_modal').stop();
$('.circle_animate16,.circle_animate16-2,.3-4_animation1,.3-4_animation2,.3-4_animation3,.3-4_animation4,.last_modal').css("opacity",0);
},TimeOut);
$('#downpage').fadeIn(100);
$('#uppage').fadeOut(100);
}
},
afterLoad: function(anchorLink,index){// 各ページに入ったらJS作動
if(index == 1 ){
killSection9()
$('.section0_title').css("margin-left","-20px");
$('.section0_title').animate({"opacity":1,"margin-left":0},1000,
function(){
	$('.pc').animate({"opacity":1},300,
	function(){
		$('.people_left').animate({"opacity":1},300,
		function(){
				$('.people_right').animate({"opacity":1},300
				);
				});
		});
});

$('.question_top').fadeOut(400);
$('.caution_link').removeClass('fadein');
$('.caution_link_0').removeClass('fadeout');
$('.caution_link_0').addClass('go');
setTimeout(function(){$('.logo_top').fadeIn(400);},400);
$('.section_number1').fadeOut(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeOut(100);
$('#downpage').fadeIn(100);
}
if(index == 2 ){
	killSection9()
$('.animated2').css("visibility", "visible");
$('.text01_anime').animate({"opacity":1},300,
function(){
	$('.circleLine_animate02').animate({"opacity":1},300,
	function(){
		$('.circleLine_animate2').animate({"opacity":1},300);
	});
});
setTimeout(
function(){
	$('.slot01').html(97);
	$('.slot1').html(00);
	},1000);

$('.section_number1').fadeIn(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeOut(100);
}
if(index == 3 ){
	killSection9()
	$('.animated2').css("visibility", "visible");
	$('.circle_animate3').css("top","160px");
	$('.circle_animate3').animate({"opacity":1,"top":"80px"},800,
function(){
	$('.circle_animate3-2').animate({"opacity":1},500,
	function(){
		$('.icon_638').animate({"opacity":1},300,
		function(){
			$('.icon_332').animate({"opacity":1},300,
		function(){	
				$('.icon_3').animate({"opacity":1},300)
			});
		});
	});
});
$('.section_number1').fadeIn(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeOut(100);
}

if(index == 4 ){
	killSection9()
	$('.animated2').css("visibility", "visible");
	$('.text02_anime').animate({"opacity":1},400,
		function(){
			$('.circleLine_animate04,.circleLine_animate4').animate({"opacity":1},300,
			function(){
				$('.balloon_animate4').delay(2500).animate({"opacity":1},300);
			});
		});
setTimeout(function(){
	$('.slot02').html(01);
	$('.slot2').html(747);
},TimeOut);


$('.section_number1').fadeIn(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeOut(100);
}
if(index == 5 ){
	killSection9()
	$('.animated2').css("visibility", "visible");
		$('.bag_animation1').animate({"opacity":1},300,
			function(){
				$('.bag_animation2').delay(500).animate({"opacity":1},300,
				function(){
				$('.bag_animation3').animate({"opacity":1},300,
					function(){
						$('.bag_animation4').animate({"opacity":1},300,
							function(){
							$('.bag_animation5').animate({"opacity":1},300,
							function(){
							$('.bag_animation6').animate({"opacity":1},300,
							function(){
							$('.bag_animation7').animate({"opacity":1},300,
							function(){
							$('.bag_animation8').animate({"opacity":1},300,
							function(){
							$('.bag_animation9').animate({"opacity":1},300,
							function(){
							$('.bag_animation10').animate({"opacity":1},300,
							function(){
							$('.bag_animation11').animate({"opacity":1},300,
							function(){
								$('.balloon_animate5').delay(300).animate({"opacity":1},700)
								});
							});
						});
					});
				});
			});
		});
});
});
});
$('.section_number1').fadeIn(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeOut(100);
});
			}
if(index == 6 ){
	killSection9()
$('.section_number1').fadeIn(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeOut(100);
$('.animated2').css("visibility", "visible");
$('.1-6_animation0').css({"transform":"none"});
$('.1-6_animation0').animate({"opacity":1},500,
	function(){
	$('.1-6_animation01').animate({"opacity":1},300,
	function(){
	$('.1-6_animation01').animate({"opacity":0},300,
	function(){
		$('.1-6_animation04').animate({"opacity":1},300,
	function(){	
		$('.1-6_animation1').delay(500).animate({"opacity":1},400,
				function(){
					$('.1-6_animation0').animate({"opacity":0},300,
				function(){
					$('.1-6_animation2').animate({"opacity":1},200,
				function(){
					$('.1-6_animation3').animate({"opacity":1},200,
				function(){
					$('.1-6_animation4').animate({"opacity":1},200,
				function(){
					$('.1-6_animation5').animate({"opacity":1},200,
				function(){
					$('.1-6_animation6').animate({"opacity":1},200,
				function(){
					$('.1-6_animation7').animate({"opacity":1},200,
				function(){
					$('.1-6_animation8').animate({"opacity":1},200,
				function(){
					$(".balloon_animate7").delay(300).animate({"opacity":1},400)
				});
				});
				});
				});
				});
				});
				});
				});
				});
				});
	});
	});
	});
}
if(index == 7 ){
	killSection9()
$('.animated2').css("visibility", "visible");
$('.text03_anime').animate({"opacity":1},300,
function(){
	$('.circleLine_animate08').animate({"opacity":1},300,
	function(){
		$('.circleLine_animate8').animate({"opacity":1},300);
	});
});
	
setTimeout(function(){
	$('.slot03').html(54);
	$('.slot3').html(06);
},TimeOut);

$('.section_number1').fadeOut(100);
$('.section_number2').fadeIn(100);
$('.section_number3').fadeOut(100);
}
if(index == 8 ){
	killSection9();
	$("#section9").animate({"opacity":1},500);
	$('.animated2').css("visibility", "visible");
	$('.circle_animate9').css("top","160px");
	$('.circle_animate9').stop(false, false).animate({"opacity":1,"top":"80px"},800,
function(){
	$('.circle_animate9-2').stop(false, false).delay(400).animate({"opacity":1},500,
	function(){	
		$('.balloon_animate9').stop(false, false).animate({"opacity":1},300,
	function(){
		$('.2-2_animation1').stop(false, false).animate({"opacity":1},200,
		function(){
			$('.2-2_animation2').stop(false, false).animate({"opacity":1},200,
		function(){	
				$('.2-2_animation3').stop(false, false).animate({"opacity":1},200,
				function(){	
				$('.2-2_animation4').stop(false, false).animate({"opacity":1},200,
				function(){	
				$('.2-2_animation5').stop(false, false).animate({"opacity":1},200)
				});
				});
			});
			});
		});
	});
});
$('.section_number1').fadeOut(100);
$('.section_number2').fadeIn(100);
$('.section_number3').fadeOut(100);
}
if(index == 9 ){
	killSection9()
$('.base_img_noanimate').css("opacity",1);
$('.animated2').css("visibility", "visible");
$('.2-3_animation1').css({"transform":"none"});
$('.2-3_animation1').animate({"opacity":1},500,
function(){
	$('.2-3_animation2').animate({"opacity":1},200,
	function(){
		$('.2-3_animation3').animate({"opacity":1},200,
		function(){
			$('.2-3_animation4').animate({"opacity":1},200,
		function(){	
					$('.2-3_animation5').animate({"opacity":1},200,
				function(){
					$('.2-3_animation6').animate({"opacity":1},200,
				function(){
					$('.2-3_animation7').animate({"opacity":1},200,
				function(){
					$('.2-3_animation8').animate({"opacity":1},200,
				function(){
					$(".balloon_animate10").delay(300).animate({"opacity":1},400);
					$('.2-3_animation9').animate({"opacity":1},200)
					});
				});
				});
			});
			});
		});
	});
});
$('.section_number1').fadeOut(100);
$('.section_number2').fadeIn(100);
$('.section_number3').fadeOut(100);
}
if(index == 10 ){
	killSection9()
	$('.animated2').css("visibility", "visible");
$('.text04_anime').animate({"opacity":1},300,
function(){
	$('.circleLine_animate011').animate({"opacity":1},300,
	function(){
		$('.circleLine_animate11').animate({"opacity":1},300);
	});
});
setTimeout(function(){
	$('.slot04').html(47);
	$('.slot4').html(04);}
	,TimeOut);
$('.section_number1').fadeOut(100);
$('.section_number2').fadeIn(100);
$('.section_number3').fadeOut(100);
}
if(index == 11 ){
	killSection9()
	$('.animated2').css("visibility", "visible");
	$('.circle_animate12').css("top","160px");
	$('.circle_animate12').animate({"opacity":1,"top":"80px"},800,
	function(){
		$('.circle_animate12-2').animate({"opacity":1},500,
		function(){
			$('.2-5_animation1').animate({"opacity":1},200,
			function(){
				$('.2-5_animation2').animate({"opacity":1},200,
				function(){	
					$('.2-5_animation3').animate({"opacity":1},200,
					function(){	
						$('.2-5_animation4').animate({"opacity":1},200,
						function(){	
							$('.2-5_animation5').animate({"opacity":1},200,
							function(){	
								$('.2-5_animation6').animate({"opacity":1},300)
							});
						});
					});
				});
			});
		});
	});
$('.section_number1').fadeOut(100);
$('.section_number2').fadeIn(100);
$('.section_number3').fadeOut(100);
}
if(index == 12 ){
	killSection9()
setTimeout(function(){$('.slot05').html(31);},1000);
setTimeout(function(){$('.slot5').html(00);},1000);
$('.animated2').css("visibility", "visible");	
$('.text05_anime').animate({"opacity":1},300,
function(){
	$('.circleLine_animate13').animate({"opacity":1},300,
	function(){
		$('.circleLine_animate013').animate({"opacity":1},300);
	});
});
$('.section_number1').fadeOut(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeIn(100);
}
if(index == 13 ){
	killSection9()

$('.animated2').css("visibility", "visible");
$('.circle_animate14').css("top","160px");
$('.circle_animate14').stop(false, false).animate({"opacity":1,"top":"80px"},800,
function(){
$('.circle_animate14-2').stop(false, false).animate({"opacity":1},500,
	function(){
	$('.3-2_animation1').stop(false, false).animate({"opacity":1},500,
		function(){
		$('.3-2_animation2').stop(false, false).animate({"opacity":1},300,
			function(){
			$('.3-2_animation3').stop(false, false).animate({"opacity":1},300,
				function(){
				$('.3-2_animation4').stop(false, false).animate({"opacity":1},300,
					function(){	
					$('.3-2_animation5').stop(false, false).animate({"opacity":1},300)
					});
				});
			});
		});
	});
});

$('.section_number1').fadeOut(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeIn(100);
}
if(index == 14 ){
	killSection9()

$('.animated2').css("visibility", "visible");	
$('.3-5_animation1').stop(false, false).animate({"opacity":1},500,
function(){
	$('.3-5_animation2').stop(false, false).animate({"opacity":1},500,
		function(){
		$('.3-5_animation3').stop(false, false).animate({"opacity":1},300,
			function(){	
				$('.3-5_animation4').stop(false, false).animate({"opacity":1},300);
			});
		});
	});
$('.section_number1').fadeOut(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeIn(100);
}
if(index == 15 ){
	killSection9()
	
$('.animated2').css("visibility", "visible");	
$('.text06_anime').animate({"opacity":1},300,
function(){
	$('.circleLine_animate15').animate({"opacity":1},300,
	function(){
		$('.circleLine_animate015').animate({"opacity":1},300);
	});
});
setTimeout(
function(){
	$('.slot06').html(25);
	$('.slot6').html(09);
	},1000);

$('.section_number1').fadeOut(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeIn(100);
}
if(index == 16 ){
	killSection9()
$('.last_modal').css("opacity", "0");
$('#downpage').fadeOut(100);
$('#uppage').fadeOut(100);
	$('.animated2').css("visibility", "visible");
	$('.circle_animate16').css("top","160px");
	$('#section16').animate({"opacity":1},700);
	$('.circle_animate16').animate({"opacity":1,"top":"80px"},800,
function(){
	$('.circle_animate16-2').animate({"opacity":1},500,
	function(){
		$('.3-4_animation1').animate({"opacity":1},500,
			function(){
			$('.3-4_animation2').animate({"opacity":1},300,
			function(){
				$('.3-4_animation3').animate({"opacity":1},300,
					function(){	
						$('.3-4_animation4').animate({"opacity":1},300,
						function(){	
							$('.last_modal').stop(false, false).delay(2600).animate({"opacity":1},300);
					});
				});
			});
		});
	});
});
$('.section_number1').fadeOut(100);
$('.section_number2').fadeOut(100);
$('.section_number3').fadeIn(100);
}
}
});
$(document).on('click', '#downpage', function() {
$.fn.fullpage.moveSectionDown();
});
$(document).on('click', '#uppage', function() {
$.fn.fullpage.moveTo(1);
});
$(document).on('click', '.last_modal_btn_left', function() {
$.fn.fullpage.moveTo(1);
});
$(document).on('click', '.menu_text_t', function() {
$.fn.fullpage.moveTo(1);
});
$(document).on('click', '.question_top', function() {
$.fn.fullpage.moveTo(1);
});
$(document).on('click', '.menu_text_1', function() {
$.fn.fullpage.moveTo(2);
});
$(document).on('click', '.menu_text_2', function() {
$.fn.fullpage.moveTo(7);
});
$(document).on('click', '.menu_text_3', function() {
$.fn.fullpage.moveTo(12);
});
$(document).on('click', '.section_number1', function() {
$.fn.fullpage.moveTo(2);
});
$(document).on('click', '.section_number2', function() {
$.fn.fullpage.moveTo(7);
});
$(document).on('click', '.section_number3', function() {
$.fn.fullpage.moveTo(12);
});
});

$(window).load(function(){
	var $plusNum = 1;
$("#fp-nav ul li").each(function(){
	$(this).addClass("listNum"+$plusNum);
	$plusNum++
});
});

