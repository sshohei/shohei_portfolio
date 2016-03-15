// $(function() {
// $("img.latelazy").lazyload({
// event: "sporty"
// });
// });
// $(window).bind("load", function() {
// var timeout = setTimeout(function() {
// $("img").trigger("sporty")
// }, 3000);
// });
// $(function() {
// Array.prototype.remove = function(element) {
// for (var i = 0; i < this.length; i++)
// if (this[i] == element) this.splice(i, 1);
// };
// function preload(images, progress) {
// var total = images.length;
// $(images).each(function() {
// var src = this;
// $('<img/>').attr('src', src).load(function() {
// images.remove(src);
// progress(total, total - images.length);
// });
// });
// }
// var now_percent = 0;
// var displaying_percent = 0;
// preload(['images/logo_text.svg', 'images/sp/menu/t.svg', 'images/sp/menu/1_ov.svg', 'images/sp/menu/2_ov.svg', 'images/sp/menu/3_ov.svg', 'images/8000_right.svg', 'images/caution.svg', 'images/pc.svg', 'images/pc_text.svg', 'images/sp/section1/pc_text.svg', 'images/mw_01.svg', 'images/mw_01text.svg', 'images/sp/section1/mw_01_text.svg', 'images/mw_02.svg', 'images/mw_02text.svg', 'images/sp/section1/mw_02_text.svg', 'images/8000.svg', 'images/sp/arrow_d.svg', 'images/sp/arrow_top.svg', 'images/source.svg', 'images/638.svg'], function(total, loaded) {
// now_percent = Math.ceil(100 * loaded / total);
// });
// var timer = window.setInterval(function() {
// if (displaying_percent >= 100) {
// window.clearInterval(timer);
// $('.loading_block').fadeOut('slow', function() {
// $('#wrapper_all').fadeIn('slow');
// });
// } else {
// if (displaying_percent < now_percent) {
// displaying_percent++;
// $('#load-text').html(displaying_percent + '%');
// }
// }
// }, 15);
// });

$(function() {
$('.menu_btn').on('click', function() {
$('.side_menu').toggleClass('menu_open');
$('.line1').toggleClass('move1_line');
$('.line2').toggleClass('move2_line');
$('.line3').toggleClass('move3_line');
$('.menu_btn').toggleClass('close');
$('html,body').toggleClass('overflow');
});
$('.menu_text').on('click', function() {
$('.side_menu').removeClass('menu_open');
$('html,body').removeClass('overflow');
$('.line1').removeClass('move1_line');
$('.line2').removeClass('move2_line');
$('.line3').removeClass('move3_line');
$('html,body').off('.noScroll');
});
});
$(document).ready(function() {
$('#wrapper').fullpage({
menu: true,
navigation: true,
scrollOverflow: true,
navigationPosition: 'right',
navigationTooltips: true,
animateAnchor: false,
recordHistory: true,
loopBottom: false,
});
});
$(window).load(function() {
var $plusNum = 1;
$("#fp-nav ul li").each(function() {
$(this).addClass("listNum" + $plusNum);
$plusNum++
});
});