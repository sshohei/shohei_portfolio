<!DOCTYPE html>
<html lang="ja">
<head prefix=”og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#”>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
<meta name="description" content="グラフィック &amp; Webデザイナー、菅野翔平のポートフォリオサイト。">
<meta name="keywords" content="菅野翔平,suganoshohei,グラフィックデザイナー,Webデザイナー,Works">
<title>Works | Shohei Sugano</title>
<meta property="og:site_name" content="Shohei Sugano">
<meta property="og:description" content="グラフィック &amp; Webデザイナー、菅野翔平のポートフォリオサイト">
<meta property="og:url" content="http://sshohei.com/" />
<meta property="og:image" content="http://sshohei.com/src/img/top.png"/>
<meta property="og:locale" content="ja_JP" />
<meta property="og:type" content="article">
<meta property="og:title" content="Shohei Sugano | Works"/>
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@sshousan">
<meta name="twitter:creator" content="@sshousan">
<meta name="twitter:title" content="Shohei Sugano">
<meta name="twitter:description" content="グラフィック &amp; Webデザイナー、菅野翔平のポートフォリオサイト">
<meta name="twitter:image:src" content="http://sshohei.com/src/img/top.png">
<link rel="shortcut icon" href="/src/img/favicon.ico">
<link rel="stylesheet" href="/src/css/common.min.css">
<link rel="stylesheet" href="/src/css/works.min.css">
<script src="https://code.jquery.com/jquery-3.0.0.js"></script>
<script>document.documentElement.className += ' wf-loading';</script>
</head>
<body>
<div id="works_detail"></div>
<div id="wrapper" class="closeDetail">
<?php require_once __DIR__ .'/../header.php'; ?>
<div id="filters" class="works_nav">
	<div data-filter="*" class="works_all">All</div>
	<div data-filter=".graphic" class="works_graphic">Graphic</div>
	<!-- <div data-filter=".web" class="works_web">Web</div> -->
	<div data-filter=".wood" class="works_wood">Other</div>
</div>
<div class="work_wrap clearfix">
	<div id="workimg_block">
		<figure id="33sqm" class="work_img graphic">
			<img src="/src/img/works/33sqm01s.jpg" alt="3.3SQM">
			<figcaption>
				<p>3.3SQM</p>
				<p class="category">Graphic</p>
			</figcaption>
		</figure>
		<figure id="kenzya" class="work_img graphic">
			<img src="/src/img/works/kenzya01s.jpg" alt="賢者の贈り物">
			<figcaption>
				<p>賢者の贈り物</p>
				<p class="category">Graphic</p>
			</figcaption>
		</figure>
		<figure id="hitotu" class="work_img wood">
			<img src="/src/img/works/hitotu01s.jpg" alt="ひとつ">
			<figcaption>
				<p>ひとつ</p>
				<p class="category">Other</p>
			</figcaption>
		</figure>
		<figure id="kikagaku" class="work_img wood">
			<img src="/src/img/works/kikagaku01s.jpg" alt="木何学照明">
			<figcaption>
				<p>木何学照明</p>
				<p class="category">Other</p>
			</figcaption>
		</figure>
		<figure id="soukibako" class="work_img wood">
			<img src="/src/img/works/souki01s.jpg" alt="想木箱">
			<figcaption>
				<p>想木箱</p>
				<p class="category">Other</p>
			</figcaption>
		</figure>
	</div>
</div>
</div><!-- #wrapper -->
<?php require_once __DIR__ .'/../footer.php'; ?>
<script src="/src/js/common.min.js"></script>
<script src="/src/js/jquery.isotope.min.js"></script>
<script src="/src/js/works.js"></script>
<script src="https://use.typekit.net/rsj8kqt.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
</body>
</html>
