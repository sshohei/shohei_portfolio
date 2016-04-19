<!DOCTYPE html>
<html lang="ja">
<head prefix=”og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#”>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
<meta name="description" content="グラフィック &amp; Webデザイナー、菅野翔平のポートフォリオサイト。">
<meta name="keywords" content="菅野翔平,suganoshohei,グラフィックデザイナー,webデザイナー">
<title>Shohei Sugano</title>
<meta property="og:site_name" content="Shohei Sugano">
<meta property="og:description" content="グラフィック &amp; Webデザイナー、菅野翔平のポートフォリオサイト">
<meta property="og:url" content="http://sshohei.com/" />
<meta property="og:image" content="http://sshohei.com/images/top.jpg"/>
<meta property="og:locale" content="ja_JP" />
<meta property="og:type" content="">
<meta property="og:title" content="Shohei Sugano"/>
<meta name="twitter:site" content="@Shohei Sugano">
<meta name="twitter:creator" content="@Shohei Sugano">
<meta name="twitter:title" content="Shohei Sugano">
<meta name="twitter:description" content="グラフィック &amp; Webデザイナー、菅野翔平のポートフォリオサイト">
<meta name="twitter:image:src" content="http://sshohei.com/img/top.png">
<link rel="shortcut icon" href="/img/favicon.ico">
<link rel="stylesheet" href="/css/common.css">
<link rel="stylesheet" href="/css/top.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script>document.documentElement.className += ' wf-loading';</script>
</head>
<body class="clearfix">
<div id="wrapper" class="closeDetail">
<?php require_once( __DIR__ . '/header.php'); ?>
	<div id="section_top" class="clearfix">
		<div class="intro">
			<span class="name">Shohei Sugano</span>
			<span class="job">Graphic &amp; Web Desiner</span>
			<span class="description">Portfolio Website</span>
		</div>
		<div class="arrow_down">
			<a href="#section_work">
				<img src="/img/common/arrow_down.svg" alt="down"></div>
			</a>
		<div class="tree"><img src="/img/tree.png" alt="tree" /></div>
	</div>
	<div id="section_work">
		<div class="tt_block">
			<div class="tt_work clearfix">Works</div>
		</div>
		<div class="workimg_block clearfix">
			<a href="/works/#33sqm">
				<div class="work_img"><img src="/img/works/33sqm01s.jpg" alt="3.3SQM"></div>
			</a>
			<a href="/works/#fourelememts">
				<div class="work_img"><img src="/img/works/fourelements01s.jpg" alt="Four elements"></div>
			</a>
			<a href="/works/#kenzya">
				<div class="work_img"><img src="/img/works/kenzya01s.jpg" alt="賢者の贈り物"></div>
			</a>
			<a href="/works/#hitotu">
				<div class="work_img"><img src="/img/works/hitotu01s.jpg" alt="ひとつ"></div>
			</a>
		</div>
		<a href="/works/" class="more_bt">…</a>
	</div>

	<div id="section_photo">
		<div class="tt_block">
			<div class="tt_photo clearfix">Photograph</div>
		</div>
		<div class="photoimg_block clearfix">
		<a href="/photograph/">
			<div class="photo_img"><img src="/img/photograph/photograph01s.jpg" alt="photograph01"></div>
		</a>
		<a href="/photograph/">
			<div class="photo_img"><img src="/img/photograph/photograph02s.jpg" alt="photograph02"></div>
		</a>
		<a href="/photograph/">
			<div class="photo_img"><img src="/img/photograph/photograph03s.jpg" alt="photograph03"></div>
		</a>
		<a href="/photograph/">
			<div class="photo_img"><img src="/img/photograph/photograph04s.jpg" alt="photograph04"></div>
		</a>
		<a href="/photograph/">
			<div class="photo_img"><img src="/img/photograph/photograph05s.jpg" alt="photograph05"></div>
		</a>
		<a href="/photograph/">
			<div class="photo_img"><img src="/img/photograph/photograph06s.jpg" alt="photograph06"></div>
		</a>
		</div>
		<a href="/photograph/" class="more_bt">…</a>
	</div>
	<div id="section_about">
		<div class="tt_block">
			<div class="tt_about clearfix">About</div>
		</div>
		<div class="about_name_small">すがのしょうへい</div>
		<div class="about_name_large">菅野翔平</div>
		<div class="about_profile">
			神奈川県生まれ、東京都在住<br>
			東京工科大学デザイン学部卒業<br>
			2014年 パッケージと広告を中心とした制作会社に所属<br>
			2015年 Webを中心とした製作会社に所属
		</div>
		<div class="about_mail">
			<a href="mailto:suganoshohei@gmail.com">
				<img src="/img/common/icon_mail_tight.svg" alt="mail">
			</a>
		</div>
	</div>

<?php require_once __DIR__ .'/footer.php'; ?>
</div><!-- #wrapper -->
<script>
$(function(){
	$('.nav_top').addClass('active');
	var img_url="/img/nav_top_active.svg";
	$(".active").children("img").attr('src',img_url);
	$('a.link_top').click(function(){
		return false;
	})
	});
</script>
<script src="/js/common.js"></script>
<script src="https://use.typekit.net/rsj8kqt.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
</body>
</html>
