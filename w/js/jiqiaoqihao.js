
$.getJSON("/pk10/getPk10AwardTimes.do",
 function(data){
 timers(parseInt((data.next.awardTimeInterval)/1000),"bpk10-time");
 });
 $.getJSON("/xyft/getPk10AwardTimes.do",
 function(data){
 timers(parseInt((data.next.awardTimeInterval)/1000),"bxyft-time");
 });
 $.getJSON("/cqssc/getPk10AwardTimes.do",
 function(data){
 timers(parseInt((data.next.awardTimeInterval)/1000),"bcqssc-time");
 });
 $.getJSON("/gdkl10/getPk10AwardTimes.do",
 function(data){
 timers(parseInt((data.next.awardTimeInterval)/1000),"bgdkl10-time");
 });
 $.getJSON("/xync/getPk10AwardTimes.do",
 function(data){
 timers(parseInt((data.next.awardTimeInterval)/1000),"bxync-time");
 });
 $.getJSON("/xjssc/getPk10AwardTimes.do",
 function(data){
 timers(parseInt((data.next.awardTimeInterval)/1000),"bxjssc-time");
 });
 $.getJSON("/tjssc/getPk10AwardTimes.do",
 function(data){
 timers(parseInt((data.next.awardTimeInterval)/1000),"btjssc-time");
 });
 $.getJSON("/gd11x5/getPk10AwardTimes.do",
 function(data){
 timers(parseInt((data.next.awardTimeInterval)/1000),"bgd11x5-time");
 });
 $.getJSON("/jsk3/getPk10AwardTimes.do",
 function(data){
 timers(parseInt((data.next.awardTimeInterval)/1000),"bjsk3-time");
 });
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