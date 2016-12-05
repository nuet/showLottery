<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo C('WEB_SITE_TITLE');?></title>
<meta name="keywords"
	content="<?php echo C('WEB_SITE_KEYWORD');?>" />
<meta name="description"
	content="<?php echo C('WEB_SITE_DESCRIPTION');?>" />
<style type="text/css">
* {
	margin: 0;
	padding: 0;
}

html, body {
	background: #fff;
	font-family: Arial, '宋体', '黑体', Verdana, Geneva, sans-serif;
	font-size: 12px;
	color: #333;
	text-align: center;
}

table {
	border-collapse: collapse;
}

img {
	border: none;
}

li {
	list-style: none;
}

a {
	text-decoration: none;
	color: #333;
}

a:hover {
	color: #b15424;
}

.clear { /*清除补丁*/
	clear: both;
	height: 1px;
	visibility: hidden;
	overflow: hidden;
}

.FLOAT_LEFT {
	float: left;
}

.main {
	width: 1000px;
	text-align: left;
	margin: 0 auto;
}

.logo {
	float: left;
	height: 125px;
	border-bottom: 1px solid #ccc;
	width: 100%;
	padding: 48px 0 0 30px;
}

.logo img {
	padding: 48px 0 0 30px;
}

.head {
	padding-left: 30px;
	float: left;
}

.head h1 {
	font-size: 32px;
	font-weight: normal;
	color: #ff8a4f;
	padding-top: 60px;
	float: left;
}

.head p {
	clear: both;
	float: left;
}

.info {
	clear: both;
	float: left;
	padding: 50px 0 0 30px;
}

.info p {
	line-height: 24px;
}

.info a {
	color: #ff8a4f;
	text-decoration: underline;
}

.info a:hover {
	color: #b15424;
}

.search {
	width: 100%;
	float: left;
}

.search input {
	border: 1px solid #999;
	border-right: none;
	line-height: 24px;
	height: 24px;
	width: 200px;
	float: left;
	color: #666;
	font-family: Verdana, Geneva, sans-serif;
}

.search a {
	background: #666;
	color: #fff !important;
	font-weight: bold;
	text-decoration: none;
	line-height: 26px;
	height: 26px;
	float: left;
	padding: 0 8px;
}

.search a:hover {
	background: #333;
}

.nav {
	clear: both;
	float: left;
	line-height: 24px;
	padding: 100px 0 0 30px;
}

.nav a {
	padding-right: 5px;
	text-decoration: underline;
}

.nav a:hover {
	color: #b15424;
}

.footer {
	clear: both;
	float: left;
	text-align: center;
	width: 100%;
	padding-top: 40px;
}
</style>
</head>

<body>
	<div class="main">
		<div class="logo">
			<h1><?php echo C('WEB_SITE_NAME');?></h1>
		</div>
		<div class="head">
			<h1>404 Not Found</h1>
			<p>很抱歉，您要访问的页面不存在!</p>
		</div>
		<div class="info">
			<p>请检查您访问的网址是否正确。</p>
			<p>
				如果您不能确认访问的网址，请浏览<a href="/"
					style="font-size: 16px;"><?php echo C('WEB_SITE_NAME');?></a>。
			</p>
		</div>
		<div class="nav">
			推荐访问： <a href="/pk10/">北京赛车PK10</a> <a
				href="/cqssc/">重庆时时彩</a> <a
				href="/gdkl10/">广东快乐十分</a> <a
				href="/jsk3/">江苏骰宝</a> <a
				href="/xync/">幸运农场</a>
		</div>
		<div class="footer"></div>
	</div>
</body>
</html>