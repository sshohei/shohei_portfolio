$(function(){
$(".nav_work").addClass("active");
var img_url="/img/nav_works_active.svg";
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
		$(".menu_btn").addClass("menu_btn_open");
		$("#wrapper").removeClass("closeDetail");
		$("html").css("overflow","hidden");
		pointY = $(window).scrollTop();
		$("#wrapper").css({
			"position": "fixed",
			"top": -pointY
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
		pointY = $(window).scrollTop();
		$("#wrapper").css({
			"position": "relative",
			"top": ""
		});
	});
});

$(window).load(function(){
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

$(function() {
	var hash = location.hash;
	if(hash !=null){
	var worksName = hash.slice(1) ;
	worksName = "#" + worksName;
	}
	if($(worksName).length){
	$(worksName).trigger("click");
	console.log(worksName);
	}
});
