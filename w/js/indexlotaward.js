$(function () {
    var cq_currentPeriodNumber = -1;
    var pk10_currentPeriodNumber = -1;
    var gd_currentPeriodNumber = -1;

    /*var cq_awardTick = function () {
     $.get('cqssc/ajax?' + Math.random(), { ajaxhandler: 'GetCqsscAwardData' }, function (data) {
     if ((data.current.periodNumber != cq_currentPeriodNumber)) {
     var nums = data.current.awardNumbers.split(',');
     var str = "";
     for (var i = 0; i < nums.length; i++) {
     str = str + "<span>" + nums[i] + "</span>";
     }
     $(".awardCont02 .cqssc-nums").html(str);
     var _date = data.current.awardTime.substring(0, 10).replace('-', '').replace('-', '');
     var _time = data.current.awardTime.substring(11, 16);
     $(".awardCont02 .period").html(_date + "-" + data.current.periodNumber + " " + _time);

     }

     cq_currentPeriodNumber = data.current.periodNumber;

     window.setTimeout(cq_awardTick, data.next.awardTimeInterval < 10 ? 10000 : data.next.awardTimeInterval);
     }, 'json');
     };*/

    var pk10_awardTick = function () {
        $.get('pk10/getPk10AwardData.do?' + Math.random(), { ajaxhandler: 'GetPk10AwardData' }, function (data) {
            if(!data)
                return;
            if ((data.current.periodNumber != pk10_currentPeriodNumber)) {
                var nums = data.current.awardNumbers.split(',');
                var str = "";
                for (var i = 0; i < nums.length; i++) {
                    str = str + "<span class='no" + nums[i] + "'></span>";
                }
                $(".awardCont01 .pk10-nums").html(str);
                var _time = data.current.awardTime.substring(11, 16);
                $(".awardCont01 .period").html(data.current.periodNumber + " " + _time);

                drawTrend();
            }
            pk10_currentPeriodNumber = data.current.periodNumber;
            window.setTimeout(pk10_awardTick, data.next.awardTimeInterval < 10 ? 10000 : data.next.awardTimeInterval);
        }, 'json');
    };

    /*var gd_awardTick = function () {
     $.get('gdkl10/ajax?' + Math.random(), { ajaxhandler: 'GetGdkl10AwardData' }, function (data) {
     if ((data.current.periodNumber != gd_currentPeriodNumber)) {
     var nums = data.current.awardNumbers.split(',');
     var str = "";
     for (var i = 0; i < nums.length; i++) {
     if (nums[i] > 18) {
     str = str + "<span class='red'>" + nums[i] + "</span>";
     }
     else{
     str = str + "<span>" + nums[i] + "</span>";
     }
     }
     $(".awardCont03 .cqssc-nums").html(str);
     var _date = data.current.awardTime.substring(0, 10).replace('-', '').replace('-', '');
     var _time = data.current.awardTime.substring(11, 16);
     $(".awardCont03 .period").html(_date + "-" + data.current.periodNumber + " " + _time);
     }
     gd_currentPeriodNumber = data.current.periodNumber;
     window.setTimeout(gd_awardTick, data.next.awardTimeInterval < 10 ? 15000 : data.next.awardTimeInterval);
     }, 'json');
     };*/

//    window.setTimeout(cq_awardTick, 500);
    window.setTimeout(pk10_awardTick, 500);
//    window.setTimeout(gd_awardTick, 500);

    $(".award .lot-menu").hover(function () {
        $(this).parents(".lot").children(".lot-menu").removeClass("cur");
        $(this).addClass("cur");
        $(".awardCont01,.awardCont02,.awardCont03").hide();
        $("." + $(this).attr("name")).show();
    })

    $(".lot-trend .play-name a").each(function () {
        $(this).bind("click", function () {
            $(".lot-trend .play-name a").removeClass("cur");
            $(this).addClass("cur");
            drawTrend();
        });
    });
    $(".lot-trend .play-name a").first().click();
});

//绘制走势图
function drawTrend() {
    var ball = $(".lot-trend .play-name .cur").attr("ball");
    if (!ball) ball = 1;

    $.get("pk10/numbertrendData.do", { ball: ball, count: 25, t: Math.random() }, function (result) {
        var data = eval(result);
        showChartline("号码走势图", data, function () { return this.x + '期:' + this.y }, 0, 10, true, 1, 'lot-trend-container');
    }, "json");
}