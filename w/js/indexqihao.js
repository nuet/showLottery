indexdata();
window.setInterval("indexdata()",30000);
function indexdata(){
$.getJSON("/pk10/getPk10AwardTimes.do",
 function(data){
 $("#pk10-timeqihaob").html("第"+data.next.periodNumber+"期");
 $("#pk10period").html(data.current.periodNumber);
 $("#pk10-timeqihao").html(data.next.periodNumber);
 timer(parseInt((data.next.awardTimeInterval)/1000),"pk10-time");
 timers(parseInt((data.next.awardTimeInterval)/1000),"bpk10-time");
 var str = new Array();
 var codenum = data.current.awardNumbers;
 /* if(codenum==""){
	 alert("s");
 } */
 str = codenum.split(",");
 codenum = "";
 for (i=0;i<str.length;i++ ) 
{ 
 codenum+= '<span class="no'+str[i]+'"></span>';
} 

 $("#pk10").html(codenum);
 
 });
 $.getJSON("/xyft/getPk10AwardTimes.do",
 function(data){
 $("#xyft-timeqihaob").html("第"+data.next.periodNumber+"期");
 timers(parseInt((data.next.awardTimeInterval)/1000),"bxyft-time");
 });
 $.getJSON("/cqssc/getPk10AwardTimes.do",
 function(data){
 $("#cqssc-timeqihaob").html("第"+data.next.periodNumber+"期");
 $("#cqsscperiod").html(data.current.periodNumber);
 $("#cqssc-timeqihao").html(data.next.periodNumber);
 timer(parseInt((data.next.awardTimeInterval)/1000),"cqssc-time");
 timers(parseInt((data.next.awardTimeInterval)/1000),"bcqssc-time");
 
 var str = new Array();
 var codenum = data.current.awardNumbers;

 str = codenum.split(",");
 codenum = "";
 for (i=0;i<str.length;i++ ) 
{ 
 codenum+= '<span class="red">'+str[i]+'</span>';
} 

 $("#cqssc").html(codenum);
 
 });
 $.getJSON("/gdkl10/getPk10AwardTimes.do",
 function(data){
 $("#gdkl10-timeqihaob").html("第"+data.next.periodNumber+"期");
 $("#gdkl10period").html(data.current.periodNumber);
 $("#gdkl10-timeqihao").html(data.next.periodNumber);
 timer(parseInt((data.next.awardTimeInterval)/1000),"gdkl10-time");
 timers(parseInt((data.next.awardTimeInterval)/1000),"bgdkl10-time");
 var str = new Array();
 var codenum = data.current.awardNumbers;

 str = codenum.split(",");
 codenum = "";
 for (i=0;i<str.length;i++ ) 
{ 
 if(str[i]==19 || str[i]==20){
	codenum+= '<span class="blue">'+str[i]+'</span>'; 
 }else{
    codenum+= '<span class="red">'+str[i]+'</span>';
 }
 } 

 $("#gdkl10").html(codenum);
 });
 $.getJSON("/xync/getPk10AwardTimes.do",
 function(data){
 $("#xync-timeqihaob").html("第"+data.next.periodNumber+"期");
 $("#xyncperiod").html(data.current.periodNumber);
 $("#xync-timeqihao").html(data.next.periodNumber);
 timer(parseInt((data.next.awardTimeInterval)/1000),"xync-time");
 timers(parseInt((data.next.awardTimeInterval)/1000),"bxync-time");
 var str = new Array();
 var codenum = data.current.awardNumbers;

 str = codenum.split(",");
 codenum = "";
 for (i=0;i<str.length;i++ ) 
{ 
 codenum+= '<span class="no'+str[i]+'"></span>';
} 

 $("#xync").html(codenum);
 });
 $.getJSON("/xjssc/getPk10AwardTimes.do",
 function(data){
 $("#xjssc-timeqihaob").html("第"+data.next.periodNumber+"期");
 timers(parseInt((data.next.awardTimeInterval)/1000),"bxjssc-time");
 });
 $.getJSON("/tjssc/getPk10AwardTimes.do",
 function(data){
 $("#tjssc-timeqihaob").html("第"+data.next.periodNumber+"期");
 timers(parseInt((data.next.awardTimeInterval)/1000),"btjssc-time");
 });
 $.getJSON("/gd11x5/getPk10AwardTimes.do",
 function(data){
 $("#gd11x5-timeqihaob").html("第"+data.next.periodNumber+"期");
 $("#gd11x5period").html(data.current.periodNumber);
 $("#gd11x5-timeqihao").html(data.next.periodNumber);
 timer(parseInt((data.next.awardTimeInterval)/1000),"gd11x5-time");
 timers(parseInt((data.next.awardTimeInterval)/1000),"bgd11x5-time");
 var str = new Array();
 var codenum = data.current.awardNumbers;

 str = codenum.split(",");
 codenum = "";
 for (i=0;i<str.length;i++ ) 
{ 
 codenum+= '<span class="red">'+str[i]+'</span>';
} 

 $("#gd11x5").html(codenum);
 });
  $.getJSON("/jsk3/getPk10AwardTimes.do",
 function(data){
 $("#jsk3-timeqihaob").html("第"+data.next.periodNumber+"期");
 });
}
 
 function timer(intDiff,div){
	window.setInterval(function(){
	var day=0,
		hour=0,
		minute=0,
		second=0;//时间默认值		
	if(intDiff > 0){
		day = Math.floor(intDiff / (60 * 60 * 24));
		hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
		minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
		second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
	}
	var str='<s></s>'+minute+'分'+'<s></s>'+second+'秒';
	$("#"+div).html(str);
	intDiff--;
	}, 1000);
}
function timers(intDiff,div){
	window.setInterval(function(){
    var str = intDiff;
	$("#"+div).html(str);
	intDiff--;
	if(intDiff==0) location.reload();
	}, 1000);
}