$(function(){
$(".nav_photo").addClass("active");
var img_url="/img/nav_photograph_active.svg";
$(".active").children("img").attr("src",img_url);
	$("a.link_photograph").click(function(){
		return false;
	})
});

$(function () {
$(".swipebox").swipebox({
	loopAtEnd: false,
	useSVG : true,
	removeBarsOnMobile : false
});
});

$(function(){
	$(".photograph_new").addClass("photograph_active");
	function worksActive(){
		$(this).toggleClass("photograph_active");
		$("#sort > div").not(this).removeClass("photograph_active");
	}
	$(".photograph_new").on("click", function(){
		worksActive.call(this, "click");
	});
	$(".photograph_old").on("click", function(){
		worksActive.call(this, "click");
	});
});

$(window).load(function(){
	var $grid = $('.photograph_block').isotope({
	itemSelector: '.photograph_img',
	layoutMode: 'masonry',
	getSortData: {
		number: '.number'
	},
	sortBy: 'number',
	sortAscending: false
});

$('#sort').on( 'click', 'div', function() {
	var sortValue = $(this).attr('data-sort-value');
	$grid.isotope({ sortBy: sortValue });
});
});
