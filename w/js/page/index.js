var indexJs = {
    // 显示游戏类型
    showGameType : function() {
        for(var key in gameType){
            var gamesStr = "";
            var games = gameType[key];
            for(var key2 in games){
                gamesStr+='<a href="'+games[key2]+'">'+key2+'</a>';
            }
            $('#'+key).html(gamesStr);
        }
    },
    // 绑定 第几名次的走势图 click事件
    chooseBall : function() {
        $(".lot-trend .play-name a").each(function () {
            $(this).bind("click", function () {
                $(".lot-trend .play-name a").removeClass("cur");
                $(this).addClass("cur");
                indexJs.drawTrend();
            });
        });
    },
    // 绘制走势图
    drawTrend : function() {
        var ball = $(".lot-trend .play-name .cur").attr("ball");
        if (!ball) ball = 1;
        var data = numbertrendData_pk10[ball];
        showChartline("号码走势图", data, function () { return this.x + '期:' + this.y }, 0, 10, true, 1, 'lot-trend-container');
    }
};


$(document).ready(function () {
    var ad;
    var page = 1;//初始化当前的版面为1
    var $show = $("#lanrenzhijia").find(".web_video_listTwo");//找到图片展示区域
    var page_count = $show.find("ul").length;
    var $width_box = $show.parents("#wai_box").width();//找到图片展示区域外围的div



    $("#lanrenzhijia").find("#nav li").click(function () {
        $index = $(this).index();
        page = $index + 1;

        $show.animate({ left: -($width_box * $index) }, "normal");
        $(this).addClass("hover").siblings("li").removeClass("hover");
        return false;
    })

    ad = setInterval(function () { nextAnimated() }, 5000);

    $("#wai_box").hover(
        function () {
            clearInterval(ad);
        },
        function () {
            ad = setInterval(function () { nextAnimated() }, 5000);
        }
    )
    function nextAnimated() {
        //首先判断展示区域是否处于动画
        if (!$show.is(":animated")) {
            if (page >= 2) {
                $show.animate({ left: 0 }, "normal");
                page = 1;
                $number = 0;
            } else {
                $show.animate({ left: '-=' + $width_box }, "normal");
                page++;
                $number = page - 1;
            }

            $("#lanrenzhijia").find("#nav li:eq(" + $number + ")").addClass("hover").siblings("li").removeClass("hover");
            return false;
        }
    }
});
$(function() {
    // 游戏类型
    indexJs.showGameType();
    // 走势图点击事件
    indexJs.chooseBall();
});