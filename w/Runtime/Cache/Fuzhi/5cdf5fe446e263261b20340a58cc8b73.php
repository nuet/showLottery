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

<link href="css/lot/style.css" rel="stylesheet" />

    <link href="css/lot/base.css" rel="stylesheet" />
    <link href="css/lot/<?php echo ($lottory); ?>.css" rel="stylesheet" />

	<script src="/Public/Home/js/pk10get.js" type="text/JavaScript" />

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
    <div class="body-content">
        <!-- 彩票大厅 头部 -->
        

        <!-- <ul class="lot-menu addTopLine">
  <!--   <li><a href="pk10/" game="pk10" class="cur">北京赛车pk10</a></li>
    <li><a href="cqssc/" game="cqssc">重庆时时彩</a></li>
    <li><a href="gdkl10/" game="gdkl10">广东快乐十分</a></li>
	<li><a href="xyft/" game="xyft">幸运飞艇</a></li>
    <li><a href="tjssc/" game="tjssc">天津时时彩</a></li>
    <li><a href="jsk3/" game="jsk3">江苏快3</a></li>
		      <li><a href="/xync/">幸运农场</a></li>
    <li><a href="shssl/" game="shssl" class="last">上海时时乐</a></li>
</ul>

<ul class="lot-menu delBottomLine" style="margin-top: 0px;"> 
 <!--  <li><a href="gd11x5/" game="gd11x5">广东11选5</a></li>
    <li><a href="xjssc/" game="xjssc">新疆时时彩</a></li>

   <!-- <li><a href="kl8/" game="kl8">北京快乐8</a></li>
    <li><a href="fc3d/" game="fc3d">福彩3d</a></li>
    <li><a href="pl3/" game="pl3">排列3</a></li>
</ul>-->
<script type="text/javascript">

    var pathname = window.location.pathname;
    if (pathname.indexOf("trend.html") >= 0)
    {
        $('.lot-menu').hide();
        $('.zst-menu').show();
        $('.zst-menu a').removeClass('cur');
        $('[game="'+beforPageJs.gameName+'"]').addClass('cur');
    }
    else
    {
        $('.zst-menu').hide();
        $('.lot-menu').show();
        $('.lot-menu a').removeClass('cur');
        $('[game="'+beforPageJs.gameName+'"]').addClass('cur');
    }
</script>

    <!-- 		<div class=lot-award1>
<ul class="lot-award mt5">
    <li class="logo">
        <img src="images/<?php echo ($lottory); ?>-logo.png"  alt="<?php echo ($lottoryName); ?>"/>
    </li>
    <li class="currentAward">
        <div class="title">
            最新开奖：
        </div>
        <div class="period" style="color: green;"> 期</div>
        <div class="period-info">每日销售<span><?php echo ($totalExpect); ?></span>期，今日剩余<span class="period-leave">--</span>期</div>
        <div class="lot-nums">
            <!-- <span class="no9">9</span>
            <span class="no2">2</span>
            <span class="no1">1</span>
            <span class="no7">7</span>
            <span class="no3">3</span>
            <span class="no9"></span>
            <span class="no2"></span>
            <span class="no1"></span>
            <span class="no7"></span>
            <span class="no3"></span>
            <p>正在加载中……<p>
        </div>
    </li>
    <li class="warnTime">
        <div class="title">
            <div id="period">&nbsp;</div>
            <div>距离下期开奖剩余</div>
        </div>
        <div class="minute" id="djsmm">00</div>
        <div class="t2">分</div>
        <div class="second" id="djsss">00</div>
        <div class="t2">秒</div>
        <div class="sound" id="countdown_sound" title="点击关闭提醒声音"></div>
        <audio src="images/du.mp3"  id="duSound" style="display:none;"></audio>
    </li>
    <li class="navi">
                <ul>
                    <li>
                        <a href="javascript:void(0);">PK10交流论坛</a>
                    </li>
                    <li>
                       <a href="javascript:void(0);" style="color:Red">调用开奖结果</a>
                    </li>
                    <li class="pk10_newIcon">
                        <a href="/pk10/positiontrend">PK10号码走势图</a>
                         <span class="pk10_wen_newIcon"></span>
                    </li>
                    <li>
                        <a href="/exitData/exitData.html#gameId=50"class="down">下载历史记录</a>
                    </li>
                </ul>
            </li> -->
</ul>

</div>
<!-- <script type="text/javascript" src="js/djs.js"></script> -->
<!-- <script type="text/javascript">
var pageDjs = new Djs();
//pageDjs.djsInit(1418391670978,"2014-12-12 21:44:00");
var getTableDade = function(){
            alert("开奖咯");
        };
pageDjs.djsInit(1418391670978,"2014-12-12 21:41:30",getTableDade);

</script> -->
<script type="text/javascript">    var lotteryLuzhu = "";</script>
<script src="js/lot/lotcommon.js"  type="text/javascript"></script>
<script src="js/lot/<?php echo ($lottory); ?>/award.js"  type="text/javascript"></script>
<script src="js/lot/warntime.js"  type="text/javascript"></script>

        <div class="lot-wrap">

          <div class="clear"></div>
		</div>
                		
<!--body-content-->
<div class="body-content">
	<!-- 彩票大厅 头部 -->
<div class="lot-wrap">
 <div class="clear"></div>
	<input type="hidden" id="callFun" value="callFun" time="1000"/>
		
		<div class="sub_bot_one" id="lot-wrap">
		    <ul class="ullilolo"style=" display: block;cursor: pointer; color: #A85E09; font-size: 14px;">
		        <li><span class="sub_bot_bt">开奖记录</span></li>
				<li id="showtext" onClick="showdiv('contentid','showtext')">
					<span class="checkbox checked"></span><label class="ckb-txt">今日双面统计</label>
				</li>
				<li id="showtext2">
					<span class="checkbox "></span><label class="ckb-txt">长龙提醒</label>
				</li>
				<li id="showtext3" onClick="showdiv('contentid3','showtext3')">
					<span class="checkbox checked"></span><label class="ckb-txt">查看车号分布</label>
				</li>
                <li id="showtext4">
					<span class="checkbox checked"></span><label class="ckb-txt">显示大小</label>
				</li>
                <li id="showtext5">
					<span class="checkbox checked"></span><label class="ckb-txt">显示单双</label>
				</li>
				<li id="showtext6">
					<span class="checkbox"></span><label class="ckb-txt">显示广告</label>
				</li>
				<li style="float: right;margin-right: 20px;">
					<span>
						<label style="margin: 0px;">选择日期：</label></span>
					<span>
						<input style="width:100px;border-radius:5px;margin-bottom:5px" name="dateData" type="text" id="dateData" onClick="WdatePicker();" 
						readonly="readonly" style="height:18px; margin:0px;"></span>
					<span style="padding-left: 10px;"><a style="margin: 0px;" href="javascript:Search();">查询</a></span>
				</li>
			</ul>
		</div>
        <script type="text/javascript" src="js/My97DatePicker/WdatePicker.js" ></script>
		<style>
		    .sub_bot_one {
		        background: url(images/sub_bot_bg.png) no-repeat;
		        height: 45px;
		        line-height: 45px;
		        color: #5b250d;
		        margin-bottom: 1px;
		    }
		    .ullilolo li {
		        float: left;
		    }
		    .sub_bot_bt {
		        color: #5b250d;
		        font-size: 18px;
		        margin-left: 20px;
		        float: left;
		        margin-right: 20px;
		        margin-top: 8px;
		        line-height: 30px;
		    }
		    .checkbox {
		        display: inline-block;
		        float: none;
		        vertical-align: middle;
		    }
		    .ckb-txt {
		        margin-right: 20px;
		        vertical-align: middle;
		    }
		</style>



<!---------------------------------------------------------------------------------------------------------------------------------------->

<div class="clear"></div>


	<div style="margin-bottom:20px;">
	  <!--
		<div class="lot-search">
			<div class="car-num">
				<ul style="margin-bottom: 10px;" class="lot-number-omit">
					<li style="padding-bottom: 2px;" class="ball">
					
						<script type="text/javascript" src="js/My97DatePicker/WdatePicker.js" ></script>
						<ul style="float: right; width: 220px; text-align: right;">
							<li>
								<span style="display: block; float: left;">
									<label style="margin: 0px;">选择日期：</label></span>
								<span style="display: block; float: left;">
									<input name="dateData" type="text" id="dateData" onClick="WdatePicker();" readonly="readonly" style="height:18px; margin:0px;"></span>
								<span style="padding-left: 10px;"><a style="margin: 0px;" href="javascript:Search();">查询</a></span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		      </div>
		      -->
		<div style="clear:both;display: none;" id="contentid" class="dataTableKuang">
			<div id="ball_stat_list-html"></div> 
			<script id="ball_stat_list-tmpl" type="text/template">
				<table width="100%" cellspacing="1" cellpadding="0" border="0">
			        <tbody><tr class="huisekColor">
			            <td class="firstTd" colspan="10"><span>今日双面统计</span></td>
			        </tr>
			        <tr class="huisekColor2">
			            <td>
			                <div class="web_ballPaiMing">冠&#12288;军</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
			            </td>
			            <td>
			                <div class="web_ballPaiMing">亚&#12288;军</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
			            </td>
			            <td>
			                <div class="web_ballPaiMing">第三名</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
			            </td>
			            <td>
			                <div class="web_ballPaiMing">第四名</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
			            </td>
			            <td>
			                <div class="web_ballPaiMing">第五名</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
			            </td>
			            <td>
			                <div class="web_ballPaiMing">第六名</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
			            </td>
			            <td>
			                <div class="web_ballPaiMing">第七名</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
			            </td>
			            <td>
			                <div class="web_ballPaiMing">第八名</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
			            </td>
			            <td>
			                <div class="web_ballPaiMing">第九名</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
		
			            </td>
			            <td>
			                <div class="web_ballPaiMing">第十名</div>
			                <div class="web_bigAndSmall">
			                    <ul>
			                        <li>大</li>
			                        <li>小</li>
			                        <li>单</li>
			                        <li>双</li>
			                    </ul>
			                </div>
			            </td>
			        </tr>
			        {{ 
				    	var rowsLen=it.length;

				    	var recArray=new Array();
			            function addRecArray(recTermNum){
			              var isExist=false;
			              for(var i=0;i<recArray.length;i++){
			                if(recArray[i]==recTermNum){
			                  isExist=true;
			                  break;
			                }
			              }
			              if (!isExist) {
			                recArray.push(recTermNum);
			              }
			              return isExist;
			            } 
				    	for(var i=0;i<rowsLen;i++){ /*循环开始A*/
				    		var rd=it[i];

				    		var dataType=rd.dataType;
				    		var ld=rd.lotteryDate;
				    		if(!addRecArray(ld)){
				     }}
			        <tr id="todayDoubleData" class="huisekColor">
				        <td>
				         <div class="web_bigAndSmall2">
				          <ul>
				           <li>{{=getVal(it,ld,1,6,1)}}</li>
				           <li>{{=getVal(it,ld,1,6,2)}}</li>
				           <li>{{=getVal(it,ld,1,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,1,5,2)}}</li>
				          </ul>
				         </div></td>
				        <td>
				         <div class="web_bigAndSmall2">
				         <ul>
				           <li>{{=getVal(it,ld,2,6,1)}}</li>
				           <li>{{=getVal(it,ld,2,6,2)}}</li>
				           <li>{{=getVal(it,ld,2,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,2,5,2)}}</li>
				          </ul>
				         </div></td>
				        <td>
				         <div class="web_bigAndSmall2">
				          <ul>
				           <li>{{=getVal(it,ld,3,6,1)}}</li>
				           <li>{{=getVal(it,ld,3,6,2)}}</li>
				           <li>{{=getVal(it,ld,3,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,3,5,2)}}</li>
				          </ul>
				         </div></td>
				        <td>
				         <div class="web_bigAndSmall2">
				          <ul>
				           <li>{{=getVal(it,ld,4,6,1)}}</li>
				           <li>{{=getVal(it,ld,4,6,2)}}</li>
				           <li>{{=getVal(it,ld,4,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,4,5,2)}}</li>
				          </ul>
				         </div></td>
				        <td>
				         <div class="web_bigAndSmall2">
				          <ul>
				           <li>{{=getVal(it,ld,5,6,1)}}</li>
				           <li>{{=getVal(it,ld,5,6,2)}}</li>
				           <li>{{=getVal(it,ld,5,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,5,5,2)}}</li>
				          </ul>
				         </div></td>
				        <td>
				         <div class="web_bigAndSmall2">
				         <ul>
				           <li>{{=getVal(it,ld,6,6,1)}}</li>
				           <li>{{=getVal(it,ld,6,6,2)}}</li>
				           <li>{{=getVal(it,ld,6,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,1,6,2)}}</li>
				          </ul>
				         </div></td>
				        <td>
				         <div class="web_bigAndSmall2">
				         <ul>
				           <li>{{=getVal(it,ld,7,6,1)}}</li>
				           <li>{{=getVal(it,ld,7,6,2)}}</li>
				           <li>{{=getVal(it,ld,7,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,7,5,2)}}</li>
				          </ul>
				         </div></td>
				        <td>
				         <div class="web_bigAndSmall2">
				         <ul>
				           <li>{{=getVal(it,ld,8,6,1)}}</li>
				           <li>{{=getVal(it,ld,8,6,2)}}</li>
				           <li>{{=getVal(it,ld,8,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,8,5,2)}}</li>
				          </ul>
				         </div></td>
				        <td>
				         <div class="web_bigAndSmall2">
				         <ul>
				           <li>{{=getVal(it,ld,9,6,1)}}</li>
				           <li>{{=getVal(it,ld,9,6,2)}}</li>
				           <li>{{=getVal(it,ld,9,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,9,5,2)}}</li>
				          </ul>
				         </div></td>
				        <td>
				         <div class="web_bigAndSmall2">
				         <ul>
				           <li>{{=getVal(it,ld,10,6,1)}}</li>
				           <li>{{=getVal(it,ld,10,6,2)}}</li>
				           <li>{{=getVal(it,ld,10,5,1)}}</li>
				           <li style="border:none;">{{=getVal(it,ld,10,5,2)}}</li>
				          </ul>
				         </div></td>
				       </tr> 
			      {{ 
				      }
			     	}
				  }}
			    </tbody>
		    </table>
		    </script>
		</div>
		<div id="contentid2" class="kaijiang_tiptool"  style="width:99.8%">
			<div class="tiptool_head">
				<ul>
					<li>长龙连开提醒</li>
				</ul>
			</div>
			<div id="changlong_info" class="tiptool_info">
				 <div id="cl_list-html" style="float: left;width: 104.3%;"></div> 
			     	 <script id="cl_list-tmpl" type="text/template">
				     	 {{
				            var rowsLen=it.length;

				            for(var i=0;i<rowsLen;i++){ /*循环开始A*/
				              var rd=it[i];
							  var tRank="";
							  if(rd.rank==1){
								  tRank="冠";
							  }else if(rd.rank==2){
								  tRank="亚";
							  }else if(rd.rank==3){
								  tRank="三";
							  }else if(rd.rank==4){
								  tRank="四";
							  }else if(rd.rank==5){
								  tRank="五";
							  }else if(rd.rank==6){
								  tRank="六";
							  }else if(rd.rank==7){
								  tRank="七";
							  }else if(rd.rank==8){
								  tRank="八";
							  }else if(rd.rank==9){
								  tRank="九";
							  }else if(rd.rank==10){
								  tRank="十";
							  }
							  var tNum=rd.num;
							  var tType="";
							  if(rd.dataType==2){
								  if(tNum%2==0){
									  tType="虎";
								  }else{
									  tType="龙";
								  }
							  }else if(rd.dataType==5){
								  if(tNum==1){
									  tType="单";
								  }else{
									  tType="双";
								  }
							  }else if(rd.dataType==6){
								  if(tNum==1){
									  tType="小";
								  }else{
									  tType="大";
								  }
							  }
				         }} 
							<div class="cl_s">
					      		 第{{=tRank}}名：{{=tType}}<span style="margin: 0px 10px;">连开</span>{{=rd.nowMissing}} 期
					      	</div>
				     	 {{
				     	 	} 
				     	 }}
			     	 </script>
			</div>
		      </div>


		      <style>
		          #contentid3 li {
		              float: left;
		              padding: 5px;
		          }
		      </style>
		<ul style="font-family: '微软雅黑';display:none;"  id="contentid3" >
			<li style="line-height: 13px;"><span style="font-size: 14px;">查看车号分布：</span></li>
			<li>
				<span class="pk10"><b data-c="1" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号1</label></span>
			</li>
			<li>
				<span class="pk10"><b data-c="2" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号2</label></span>
			</li>
			<li>
				<span class="pk10"><b data-c="3" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号3</label></span>
			</li>
			<li>
				<span class="pk10"><b data-c="4" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号4</label></span>
			</li>
			<li>
				<span class="pk10"><b data-c="5" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号5</label></span>
			</li>
			<li>
				<span class="pk10"><b data-c="6" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号6</label></span>
			</li>
			<li>
				<span class="pk10"><b data-c="7" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号7</label></span>
			</li>
			<li>
				<span class="pk10"><b data-c="8" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号8</label></span>
			</li>
			<li>
				<span class="pk10"><b data-c="9" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号9</label></span>
			</li>
			<li>
				<span class="pk10"><b data-c="10" class="checkbox"></b></span>
				<span class="ckb-txt">
					<label style="cursor: pointer">号10</label></span>
			</li>
			<li style="position:relative;margin-top:8px;">
				<div class="bg_u4">
				  <input type="button" onclick="SetChk()" value="还原" style="*padding-top:3px">
				</div>
			</li>
		</ul>
		<div style="clear: both"></div>

		<!-- 广告 -->
		 <?php for($i = 0;$i<12;$i++){ $gg[$i]['num'] = $i+1; $gg[$i]['link'] = '#'; } shuffle($gg); ?>
		<div class="at" id="at" style="">

			<table>
				<tr >
					<td><a href="<?php echo ($gg["1"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["1"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
					<td><a href="<?php echo ($gg["2"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["2"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
				</tr>
                <tr >
                    <td><a href="<?php echo ($gg["3"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["3"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                    <td><a href="<?php echo ($gg["4"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["4"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                </tr>
                <tr >
                    <td><a href="<?php echo ($gg["5"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["5"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                    <td><a href="<?php echo ($gg["6"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["6"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                </tr>
                <tr >
                    <td><a href="<?php echo ($gg["7"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["7"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                    <td><a href="<?php echo ($gg["8"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["8"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                </tr>
                <tr >
                    <td><a href="<?php echo ($gg["9"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["9"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                    <td><a href="<?php echo ($gg["10"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["10"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                </tr>
                <tr >
                    <td><a href="<?php echo ($gg["11"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["11"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                    <td><a href="<?php echo ($gg["0"]["link"]); ?>"><img src="/Public/Home/images/<?php echo ($gg["0"]["num"]); ?>.jpg" border=0 style="width: 485px; height: 60px; margin: 5px; margin-left: 5px;"></a></td>
                </tr>
			</table>

		</div>


		<!---------------------------------------------------------------------------------------------------------------------------------------->

		<div id="history-table">
			<table id="history" class="lot-table">
				<tbody>
					<tr class="head">
						<td width="220">时间</td>
						<td width="350">开奖号码</td>
						<td colspan="3">冠亚军和</td>
						<td colspan="5">1~5龙虎</td>
					</tr>
				</tbody>
			</table>
		</div>
		</div>


	<script>

		function showCarNum() {
			var datas = [];
			var ckbeds = $("#contentid3 li b.checked");
			for (var i = 0; i < ckbeds.length; i++) {
				datas.push($(ckbeds[i]).attr("data-c"));
			}

			$(".nums i").removeClass("noshade");
			if (datas.length > 0) {
				$(".nums").addClass("shade");
			}
			for (var i = 0; i < datas.length; i++) {
				var c = ".pk-no" + datas[i];
				$(c).addClass("noshade");
			}
			if (datas.length == 0) {
				$(".nums").removeClass("shade");
			}
		}

		$("#contentid3 li").click(function () {
			$(this).find(".checkbox").toggleClass('checked');
			showCarNum();
		})
		function SetChk() {
			$("#contentid3 b").removeClass("checked");
			$(".nums").removeClass("shade");
		}

		(function () {

			var timeid;

			timeid = setInterval(function () {

				var w = window.screen.availWidth;

				if (w == 0 || w > 1000) { return; }

				var rate = w / 250;

				$('body').css({

					"transform": "scale(" + rate + ")",

					"transform-origin": "0 0",

					"-webkit-transform": "scale(" + rate + ")",

					"-webkit-transform-origin": "0 0"

				});

				if (w > 0) {

					clearInterval(timeid);

				}

			}, 1000)

		})()

	</script>




	<div class="clear"></div>
    </div>
</div>
<div class="clear"></div>

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