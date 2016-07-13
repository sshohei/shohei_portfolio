$(function(){
$(".nav_work").addClass("active");
var img_url="/src/img/nav_works_active.svg";
$(".active").children("img").attr("src",img_url);
	$("a.link_works").click(function(){
		return false;
	})
});

$(function(){
	$(".works_all").addClass("works_active");
	function worksActive(){
		$(this).toggleClass("works_active");
		$("#filters > div").not(this).removeClass("works_active");
	}
	$(".works_all").on("click", function(){
		worksActive.call(this, "click");
	});
	$(".works_graphic").on("click", function(){
		worksActive.call(this, "click");
	});
	$(".works_web").on("click", function(){
		worksActive.call(this, "click");
	});
	$(".works_wood").on("click", function(){
		worksActive.call(this, "click");
	});
});


$(function(){
	function openDetail(){
		$("#works_detail").load(this.id + "\.php");
		$("#works_detail").addClass("detail_active");
		$("#wrapper").removeClass("closeDetail");
		$("html").css("overflow","hidden");
    scrollY = $(window).scrollTop();
    $('#wrapper').css( {
        position: 'fixed',
        width: '100%',
        top: -1 * scrollY
    });
    htmlHeight = $("#wrapper").outerHeight(true);
    $("html").css({
      "height": htmlHeight
    });
 	};

	$("#33sqm").on("click", function(){
		openDetail.call(this, "click");
	});
	$("#fourelememts").on("click", function(){
		openDetail.call(this, "click");
	});
	$("#kenzya").on("click", function(){
		openDetail.call(this, "click");
	});
	$("#hitotu").on("click", function(){
		openDetail.call(this, "click");
	});
	$("#kikagaku").on("click", function(){
		openDetail.call(this, "click");
	});
	$("#soukibako").on("click", function(){
		openDetail.call(this, "click");
	});
	$("#works_detail").on("click", ".description_close", function(){
		$("html").css("overflow","visible");
		$("#works_detail").empty().removeClass("detail_active");
		$("header").removeClass("menu_open");
		$(".menu_btn").removeClass("menu_btn_open");
		$(".line1").removeClass("move1_line");
		$(".line2").removeClass("move2_line");
		$("#wrapper").addClass("closeDetail");
    $("html").css({
      "height": ""
    });
		$("#wrapper").css({
			"position": "relative",
			"top": ""
		});
    $('html, body').prop({scrollTop: scrollY});
	});
});

$(window).on("load", function(){
	var $container = $("#workimg_block").isotope();
	$container.isotope({
	  itemSelector: ".work_img",
		layoutMode: "fitRows"
	});
	$("#filters").on( "click", "div", function() {
	  var filterValue = $(this).attr("data-filter");
	  $container.isotope({ filter: filterValue });
	});
});

