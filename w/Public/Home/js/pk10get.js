$(function () {
    callFun();
});
function callFun() {
    LoadPk10TipSet();
    getHistoryData(180);
    reloadBallStatRemind();
    reloadChangLong();
}
function reloadBallStatRemind() {
    $.get("/pk10/getBallStat.do?today=1", function (r) {
        if (r) {
            doTCompile("ball_stat_list", r);
        }
    }, "json");
}
function getVal(datas, date, rank, dataType, num) {
    var dayTotalNum = "0";
    for (var i = 0; i < datas.length; i++) {
        var d = datas[i];
        if (d.lotteryDate == date && d.num == num && d.dataType == dataType && d.rank == rank) {
            dayTotalNum = d.dayTotalNum;
            break;
        }
    }
    return dayTotalNum;
}
var NUM_INDEX = { 1: '冠　军', 2: '亚　军', 3: '季　军', 4: '第四名', 5: '第五名',
    6: '第六名', 7: '第七名', 8: '第八名', 9: '第九名', 10: '第十名'
};
var NUM_TYPE = { 1: '大', 2: '小', 3: '单', 4: '双', 5: '龙', 6: '虎' };
function reloadChangLong() {
    $.post("/pk10/getMergeData.do",
        function (r) {
            if (r) {
                doTCompile("cl_list", r.clList);
            }
        }, "json");
}
function Search() {
    $.get("/pk10/kaijiang.do", { date: $("#dateData").val() }, function (result) {
        if (result && result.rows && result.rows.length > 0) {
            var j = 0;
            var html = '';
            for (var i in result.rows) {
                var data = result.rows[i];
                var clsName = "even";
                if (j % 2 == 0) {
                    clsName = "odd";
                }
                html += '<tr class="' + clsName + '"><td><p class="p">' + data.termNum + '</p><p class="t">'
                    + data.lotteryTime.substring(5, 16);
                html += '</p></td><td class="nums">';
                html += '<i class="pk-no' + data.n1 + '"></i>';
                html += '<i class="pk-no' + data.n2 + '"></i>';
                html += '<i class="pk-no' + data.n3 + '"></i>';
                html += '<i class="pk-no' + data.n4 + '"></i>';
                html += '<i class="pk-no' + data.n5 + '"></i>';
                html += '<i class="pk-no' + data.n6 + '"></i>';
                html += '<i class="pk-no' + data.n7 + '"></i>';
                html += '<i class="pk-no' + data.n8 + '"></i>';
                html += '<i class="pk-no' + data.n9 + '"></i>';
                html += '<i class="pk-no' + data.n10 + '"></i>';
                var guanyahe = data.n1 + data.n2;
                html += '</td>';
                html += '<td>' + guanyahe + '</td>';
                var guanyahedx = '大';
                if (guanyahe == 11) {
                    guanyahedx = '和';
                } else if (guanyahe < 11) {
                    var guanyahedx = '小';
                }
                html += '<td><p ' + (guanyahedx == "大" ? 'class="r"' : '') + '>' + guanyahedx + '</p></td>';
                var guanyaheds = '单';
                if (guanyahe == 11) {
                    guanyaheds = '和';
                } else if (guanyahe % 2 == 0) {
                    guanyaheds = '双';
                }
                html += '<td><p ' + (guanyaheds == "单" ? 'class="r"' : '') + '>' + guanyaheds + '</p></td>';
                var longhu = new Array();
                longhu[0] = (data.n1 > data.n10) ? "龙" : "虎";
                longhu[1] = (data.n2 > data.n9) ? "龙" : "虎";
                longhu[2] = (data.n3 > data.n8) ? "龙" : "虎";
                longhu[3] = (data.n4 > data.n7) ? "龙" : "虎";
                longhu[4] = (data.n5 > data.n6) ? "龙" : "虎";
                for (var i = 0; i < longhu.length; i++) {
                    html += '<td><p ' + (longhu[i] == "龙" ? 'class="r"' : '') + '>' + longhu[i] + '</p></td>';
                }
                html += '</tr>';
                j++;
            }
            $("#history .head").nextAll().remove();
            $("#history .head").after(html);
        } else {
            $("#history tr:gt(0)").remove();
        }
    }, "json");
}



function showdiv(targetid, objN) {
    var target = document.getElementById(targetid);

    $('#' + objN).find(".checkbox").toggleClass('checked');

    if (target.style.display == "block") {
        target.style.display = "none";
    } else {
        target.style.display = "block";
    }
}
$(function () {
    $('#showtext2').click(function () {
        var checkbox = $(this).find(".checkbox");
        checkbox.toggleClass('checked');
        if (!checkbox.hasClass('checked')) {
            var target = document.getElementById("contentid2");
            target.style.display = "block";
        } else {
            var target = document.getElementById("contentid2");
            target.style.display = "none";
        }
    });

    $('#showtext4').click(function () {
        var checkbox = $(this).find(".checkbox");
        checkbox.toggleClass('checked');
        //
        var target = $('#history');
        //
        if (!checkbox.hasClass('checked')) {
            target.find('[class^="pk-no"]').each(function () {
                var num = $(this).attr('class').match(/pk-no(\d*)/)[1];
                if (parseInt(num) > 5) {
                    $(this).addClass('pk-dx-da');
                } else {
                    $(this).addClass('pk-dx-xiao');
                }
            });
        } else {
            target.find('[class^="pk-no"]').removeClass('pk-dx-da pk-dx-xiao');
        }
    });
    $('#showtext5').click(function () {
        var checkbox = $(this).find(".checkbox");
        checkbox.toggleClass('checked');
        //
        var target = $('#history');
        //
        if (!checkbox.hasClass('checked')) {
            target.find('[class^="pk-no"]').each(function () {
                var num = $(this).attr('class').match(/pk-no(\d*)/)[1];
                if (parseInt(num) % 2 == 1) {
                    $(this).addClass('pk-ds-dang');
                } else {
                    $(this).addClass('pk-ds-shuang');
                }
            });
        } else {
            target.find('[class^="pk-no"]').removeClass('pk-ds-dang pk-ds-shuang');
        }
    });
    $('#showtext6').click(function () {
        var checkbox = $(this).find(".checkbox");
        checkbox.toggleClass('checked');

        //
        if (!checkbox.hasClass('checked')) {
            var target = document.getElementById("at");
            target.style.display = "block";

        } else {
            var target = document.getElementById("at");
            target.style.display = "none";
        }
    });
})