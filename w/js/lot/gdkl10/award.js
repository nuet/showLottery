$(function () {
    var currentPeriodNumber = -1;
    var timeInterval = 5000;
    var nextPeriodNumber = -1;
    //请求出错次数
    var errorCount = 0;
    //请求次数
    var requireCount = 0;
    function afterAwarded() {
        var _page = $("#pageName").val();
        if (_page) {
            var _container = $("#pageName").attr("container");
            var _time = $("#pageName").attr("time");
            var unload = $("#pageName").attr("unload");
            if (unload && unload == "1") return;
            _time = ~ ~_time;
            _container = _container ? _container : "lot-wrap";
            setTimeout(function () {
                $.get('gdkl10/' + _page, { t: Math.random() }, function (text) {
                    $('#' + _container).html(text);
                    //文字闪烁
                    Glitter();
                });
            }, _time);
        }
        else {
            var fun = $("#callFun").val();
            var _time = $("#callFun").attr("time");
            if (fun) {
                var funs = fun.split('|');
                setTimeout(function () {
                    for (var i = 0; i < funs.length; i++) {
                        window[funs[i]]();
                    }
                }, _time);
            }
        }
    }
    var awardTick = function () {
        $.get('gdkl10/getGdkl10AwardData.do', { t: Math.random() }, function (data) {
            requireCount += 1;
            if ((data.current.periodNumber != currentPeriodNumber) && currentPeriodNumber != -1) {
                timeInterval = 16000;
                window.setTimeout(afterAwarded, 1000);
                $(".currentAward .period").css("color", "green");
                requireCount = errorCount = 0;
                hideLotPeriodNumWarn();
            }
            if (timeInterval != 0) {
                $(".currentAward .period").html(data.current.fullPeriodNumber + " 期");
                var nums = data.current.awardNumbers.split(',');
                var str = "";
                for (var i = 0; i < nums.length; i++) {
                    if (parseInt(nums[i]) > 18) {
                        str = str + "<span class='red'>" + nums[i] + "</span>";
                    }
                    else {
                        str = str + "<span class='no" + nums[i] + "'>" + nums[i] + "</span>";
                    }
                }
                $(".lot-nums").html(str);
                if (currentPeriodNumber == -1) {
                    $(".currentAward .period").css("color", "green");
                }
                if (currentPeriodNumber != -1 && $('.close').length == 0) {    //判断第一次加载
                	$('.sound').html('<object type="application/x-shockwave-flash"  width="0" height="0" data="js/clarion.swf-path=movie.swf" /></object>');
                }
                if (currentPeriodNumber == -1) {    //判断第一次加载
                    currentPeriodNumber = data.current.periodNumber;
                    luzhuFirstShow(currentPeriodNumber, ctimeOfPeriod);
                }
                
                currentPeriodNumber = data.current.periodNumber;
                nextPeriodNumber = data.next.periodNumber;
            }
            var _time = parseInt(parseInt(data.next.awardTimeInterval) + timeInterval + parseInt(Math.random() * 3000));
            window.setTimeout(awardTick, data.next.awardTimeInterval < 10 ? 1000 : _time);
            timeInterval = 0;
        }, 'json').error(function () {
            if (errorCount < 20) {
                window.setTimeout(awardTick, 1000 + Math.random() * 10000);
                errorCount++;
            }
        });
        if (errorCount >= 5 || requireCount > 90) {
            showLotPeriodNumWarn(nextPeriodNumber);
        }
    };

    var loadAwardTimesTimer, ctimeOfPeriod = -1;
    var cpCurrAwardData = null;
    var cpNextAwardTimeInterval = -1;
    function loadAwardTimes() {
        $.get('gdkl10/getGdkl10AwardTimes.do', { t: Math.random() }, function (data) {
            //请求到数据后需要做的事情
            cpCurrAwardData = data;

            //期数不同，则开始封盘倒计时
            if (data.current.periodNumber != cpNumber) {
                cpNextAwardTimeInterval = data.next.awardTimeInterval;
                if (countDownTimer) window.clearInterval(countDownTimer);
                countDownTimer = window.setInterval(function () {
                    cpNextAwardTimeInterval = Math.max(0, cpNextAwardTimeInterval - 1000);
                    showCountDown(cpNextAwardTimeInterval, data.next.periodNumber)
                }, 1000);
            }
            cpNumber = data.current.periodNumber;
            if (ctimeOfPeriod == -1) {//判断第一次加载
                ctimeOfPeriod = data.current.periodNumber;
                luzhuFirstShow(currentPeriodNumber, ctimeOfPeriod);
            }
            $(".warnTime #period").html("第" + data.next.periodNumber + "期");
            var leavePeriod = 84 - cpNumber;
            if (leavePeriod == 0) {
                var d = new Date();
                var nd = new Date(data.next.awardTime.split(' ')[0].replace("-", "/", "gi"));
                if (d.getDate() == nd.getDate()) leavePeriod = 84;
            }
            $(" .lot-award .currentAward .period-info .period-leave").html(leavePeriod);
            loadAwardTimesTimer = window.setTimeout(loadAwardTimes, data.next.awardTimeInterval < 10 ? 10000 : data.next.awardTimeInterval + 1000);
        }, 'json').error(function () {
            if (errorCount < 20) {
                window.setTimeout(loadAwardTimes, 1000 + Math.random() * 10000);
                errorCount++;
            }
        });
        if (errorCount >= 5) {
            showLotPeriodNumWarn(nextPeriodNumber);
        }
    }

    window.setTimeout(awardTick, 1000);
    //每10秒刷新开奖时间数据
    loadAwardTimesTimer = window.setTimeout(loadAwardTimes, 1000);
});


function updateHistoryRecord() {
    $.get('gdkl10/ajax', { ajaxhandler: 'GetNewestRecord', t: Math.random() }, function (data) {
        var numbers = data.numbers.split(',');
        var longhu = data.longhu;
        var tr1 = $("#history tr").eq(1);
        var clsName = "odd";
        if (tr1) {
            clsName = tr1.attr("class") == "odd" ? "even" : "odd";
        }
        var html = '<tr class="' + clsName + '"><td><p class="p">' + data.period + '</p><p class="t">' + data.drawingTime;
        html += '</p></td><td class="nums">';
        for (var i = 0; i < numbers.length; i++) {
            html += '<span>' + numbers[i] + '</span>';
        }
        html += '</td>';
        html += '<td>' + data.total + '</td>';
        html += '<td><p ' + (data.totalOddorEven == "单" ? 'class="r"' : '') + '>' + data.totalOddorEven + '</p></td>';
        html += '<td><p ' + (data.totalBigOrSmall == "大" ? 'class="r"' : '') + '>' + data.totalBigOrSmall + '</p></td>';
        html += '<td><p ' + (data.totalMantissa == "大" ? 'class="r"' : '') + '>尾' + data.totalMantissa + '</p></td>';
        for (var i = 0; i < longhu.length; i++) {
            html += '<td><p ' + (longhu[i] == "龍" ? 'class="r"' : '') + '>' + longhu[i] + '</p></td>';
        }
        html += '</tr>';

        $("#history .head").after(html);
        drawColor();
    }, 'json');
    if (typeof reloadChangLong != 'undefined' && reloadChangLong instanceof Function) {
        reloadChangLong();
    }
}

function drawColor() {
    var firstTr = $("#history tr .nums").first().find('span');
    var firstNums = [];
    for (var i = 0; i < firstTr.length; i++) {
        firstNums.push($(firstTr[i]).text());
    }
    var allspan = $("#history tr .nums span");
    var count = allspan.length;
    for (var j = 0; j < count; j++) {
        var s = $(allspan[j]);
        if (s.text() == firstNums[0]) {
            s.attr("class", "no1");
        } else if (s.text() == firstNums[1]) {
            s.attr("class", "no2");
        } else if (s.text() == firstNums[2]) {
            s.attr("class", "no3");
        } else if (s.text() == firstNums[3]) {
            s.attr("class", "no4");
        } else if (s.text() == firstNums[4]) {
            s.attr("class", "no5");
        } else if (s.text() == firstNums[5]) {
            s.attr("class", "no6");
        } else if (s.text() == firstNums[6]) {
            s.attr("class", "no7");
        } else if (s.text() == firstNums[7]) {
            s.attr("class", "no8");
        } else {
            s.attr("class", "no9");
        }
    }
}


function LoadGdkl10TipSet() {
    var tip_changlong = parseInt($.cookie("gdkl10_tip_changlong") == null ? 1 : $.cookie("gdkl10_tip_changlong"));
    if (1 == tip_changlong) {
        if ($("#changlong-switch > b").attr("class") == "checkbox") {
            $("#changlong-switch > b").addClass("checked");
        }
    } else {
        $("#changlong-switch > b").removeClass("checked");
        $("#changlong_warn").hide();
    }
}