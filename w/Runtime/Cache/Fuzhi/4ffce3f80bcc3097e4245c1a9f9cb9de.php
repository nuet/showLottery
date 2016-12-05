<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html xmlns:v="urn:schemas-microsoft-com:vml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><?php echo ($title); ?></title>
<meta name="keywords" content="<?php echo ($keyword); ?>" />
<meta name="description" content="<?php echo ($description); ?>" />
<meta http-equiv="X-UA-Compatible" content="IE=7">
<base href="<?php echo ($BaseUrl); ?>"/>
<link href="css/base.css"  rel="stylesheet" />
<script src="js/util/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/util/cpCommon.js" ></script>
<script type="text/javascript" src="js/util/httpUtil.js" ></script>
<script type="text/javascript" src="js/beforPage.js" ></script>
<script type="text/javascript" src="js/util/doT/doT.min.js" ></script>
<script type="text/javascript" src="js/cookie.js" ></script>

    <link href="css/style.css" rel="stylesheet" />
    <link href="css/lot/<?php echo ($lottory); ?>.css" rel="stylesheet" />
    <link href="css/feedback.css" rel="stylesheet" />
    <link href="css/blue.css" rel="stylesheet" />

<?php echo hook('pageHeader');?>

        
        
</head>
<body>
	<!-- 头部 -->
    <script type="text/javascript">
    var pageNameTemp="home";
</script>
<style type="text/css">
.header{margin-bottom: 10px;}
</style>
<div id="bbsScript" style="display: none;"></div>
<!--top-->
<div class="top">

<link rel="stylesheet" href="css/nva_zise.css"  />
<link rel="stylesheet" href="css/footer.css"  />
	<div class="nav">
  <div class="wrap">
    <ul>
      <li class="./pk10/"><a href="/pk10/">网站首页</a></li>
      <li><a href="/pk10/">北京赛车<em class="hot-icon"></em></a> </li>
	  <li><a href="/xyft/">幸运飞艇<em class="hot-icon"></em></a> </li>
                </ul>
            </li>
			
        </ul>

    </div>
</div>
	<!-- /头部 -->
	
	<!-- 主体 -->
	
<div id="main-container">
    
 
<!--body-content-->
<div id="main">
    <div id="theme_fb">
        <h2>用户反馈</h2>
    </div>

    <!--意見反饋表單-->
    <div class="fb_ft">
        <form id="reform" method="post" onsubmit="return checkForm();">
            <table>
                <tbody>
                    <tr>
                        <td align="right" style="width: 100px;">
                            <strong class="imp_star">*</strong>请选择问题：
                        </td>
                        <td align="left" style="width: 660px;">
                            <p class="sel">
                                <a href="javascript:;" class="sel_btn">网站优化建议<i></i></a>
                                <span>
                                    <a href="javascript:;" tid="2">网站优化建议</a>
                                    <a href="javascript:;" tid="3">商务合作</a>
                                    <a href="javascript:;" tid="1">其它相关问题</a>
                                </span>
                            </p>
                            <span class="note_must"></span>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <strong class="imp_star">*</strong>问题描述：
                        </td>
                        <td align="left">
                            <textarea id="texContent"></textarea>
                            <span class="note_must" id="spcontent"></span>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><strong class="imp_star">*</strong>联系方式：
                        </td>
                        <td align="left">
                            <input type="text" maxlength="50" id="txtcontact" style="width: 200px;" />
                            <span class="note_must" id="spcontact"></span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" align="center">
                            <a href="javascript:;" class="button">提交</a>

                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
    </div>
</div>
<div class="clear"></div>
 <script type="text/javascript" src="js/util/jquery.artDialog.min.js" ></script>
<script type="text/javascript" src="js/uc/teatarea.js" ></script>
<script type="text/javascript" src="js/uc/feedback.js" ></script>

</div>
	<!-- /主体 -->

	<!-- 底部 -->
	<script type="text/javascript">
(function(){
	var ThinkPHP = window.Think = {
		"ROOT"   : "", //当前网站地址
		"APP"    : "/index.php?s=", //当前项目地址
		"PUBLIC" : "/Public", //项目公共目录地址
		"DEEP"   : "<?php echo C('URL_PATHINFO_DEPR');?>", //PATHINFO分割符
		"MODEL"  : ["<?php echo C('URL_MODEL');?>", "<?php echo C('URL_CASE_INSENSITIVE');?>", "<?php echo C('URL_HTML_SUFFIX');?>"],
		"VAR"    : ["<?php echo C('VAR_MODULE');?>", "<?php echo C('VAR_CONTROLLER');?>", "<?php echo C('VAR_ACTION');?>"]
	}
})();
</script>



<!--foot-->

<div class="footer">

  <div class="wrap">

  <div class="footer_bottom">接口网版权所有© 2016-224</div><?php echo $tontji;?>

</div>


<script type="text/javascript" src="js/account.js" ></script>

<script type="text/javascript">account.checkLogin();</script>

<script type="text/javascript" src="js/service.js" ></script>

<script type="text/javascript" src="js/util/jquery.easing.1.3.min.js" ></script>

<script type="text/javascript" src="js/util/jquery.slides.min.js" ></script>

<script type="text/javascript" src="js/util/highcharts.js" ></script>

<script type="text/javascript" src="js/util/jschart.js" ></script>

<script type="text/javascript" src="js/data/cfg/gameDate.js" ></script>

<script type="text/javascript" src="js/data/game/pk10.js" ></script>

<script type="text/javascript" src="js/page/index.js" ></script>

<?php echo hook('pageFooter', 'widget');?>

<div class="hidden">

	<?php echo $tontji;?>

</div>
        
	<!-- /底部 -->
</body>
</html>