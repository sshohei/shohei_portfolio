<!DOCTYPE html>
<html lang="ja">
<head prefix=”og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#”>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
<meta name="description" content="グラフィック &amp; Webデザイナー、菅野翔平のポートフォリオサイト。">
<meta name="keywords" content="菅野翔平,suganoshohei,グラフィックデザイナー,Webデザイナー,About">
<title>About | Shohei Sugano</title>
<meta property="og:site_name" content="Shohei Sugano">
<meta property="og:description" content="グラフィック &amp; Webデザイナー、菅野翔平のポートフォリオサイト">
<meta property="og:url" content="http://sshohei.com/" />
<meta property="og:image" content="http://sshohei.com/src/img/top.png"/>
<meta property="og:locale" content="ja_JP" />
<meta property="og:type" content="article">
<meta property="og:title" content="Shohei Sugano | About"/>
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@sshousan">
<meta name="twitter:creator" content="@sshousan">
<meta name="twitter:title" content="Shohei Sugano">
<meta name="twitter:description" content="グラフィック &amp; Webデザイナー、菅野翔平のポートフォリオサイト">
<meta name="twitter:image:src" content="http://sshohei.com/src/img/top.png">
<link rel="shortcut icon" href="/src/img/favicon.ico">
<link rel="stylesheet" href="/src/css/common.min.css">
<link rel="stylesheet" href="/src/css/about.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
<script>document.documentElement.className += ' wf-loading';</script>
</head>
<body>
<div id="wrapper" class="closeDetail">
<?php require_once __DIR__ .'/../header.php'; ?>
<script type="text/javascript">
$(function(){
$(".nav_about").addClass("active");
var img_url="/src/img/nav_about_active.svg";
$(".active").children("img").attr("src",img_url);
	$("a.link_about").click(function(){
		return false;
	})
});
</script>

<div id="about_wrap" class="clearfix">
	<div class="profile_img">
		<img src="/src/img/about/shohei.jpg" alt="shohei sugano">
	</div>
	<div class="about_text_block">
		<div class="about_text_box">
			<div class="about_name_large">菅野翔平</div>
			<div class="about_profile">
				神奈川県生まれ、東京都在住<br>
				デザイン事務所にグラフィックデザイナーとして勤務。<br>
        その後、別のデザイン事務所にてウェブデザイナーとして勤務。<br>
        現在、フリーランスとして活動中。<br>
				<span class="hobby">趣味 : 木工、写真、スポーツ</span>
			</div>
		</div>
	</div>
</div>

<?php require_once __DIR__ .'/../footer.php'; ?>
</div><!-- #wrapper -->
<script src="/src/js/common.min.js"></script>
<script src="https://use.typekit.net/rsj8kqt.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
</body>
</html>
