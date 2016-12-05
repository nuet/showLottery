define('trendChart', function () {
    function TrendChart(options) {
        this.options = options || { css: { noyl: "noyl", bline: "bline", lines: [".firL"] }, lineWidth: 2, lineColor: "#BB8569", ckbDistribute: "#chkYL", ckbSplit: "#chkBZX", chkZX: "#chkZX" };
        this.canvasStr = "";
        this.canvas = null;
        this.isIE = navigator.userAgent.indexOf("MSIE");
        this.lineColor = { ".firL": "#BB8569", ".secL": "#836C90", ".thiL": "#BB8569", ".fouL": "#836C90", ".fifL": "#BB8569", ".sixL": "#836C90", ".redBall": "#BB8569", ".blueBall": "#836C90", ".attr1": "#957EA2", ".attr3": "#957EA2", ".attr5": "#957EA2", ".attr7": "#957EA2", ".attr9": "#957EA2", ".attr2": "#BB8569", ".attr4": "#BB8569", ".attr6": "#BB8569", ".attr8": "#BB8569", ".attr10": "#BB8569" }
    }

    TrendChart.prototype.reDraw = function () {
        this.distributeDisplay(); //遗漏显示与否
        this.splitDisplay();  //分割线显示与否
        this.lineDisplay(); //连线显示与否

        //document.getElementById("chkYL").onclick = function () { this_.distributeDisplay(); };
        //document.getElementById("chkBZX").onclick = function () { this_.splitDisplay(); };
        //document.getElementById("chkZX").onclick = function () { this_.lineDisplay([".firL"], 2, "#BB8569"); };
    }
    //遗漏数据显示与否
    TrendChart.prototype.distributeDisplay = function () {
        if (!this.options.ckbDistribute) return;
        if ($(this.options.ckbDistribute).is(":checked")) $("#chartTable").removeClass(this.options.css.noyl);
        else { $("#chartTable").addClass(this.options.css.noyl); }
    }
    //分隔线显示与否
    TrendChart.prototype.splitDisplay = function () {
        if (!this.options.ckbSplit) return;
        this.clearLines();
        var count = $("#chart tr").length;
        var lines = $("#chart tr").filter(function (index) { return index > 5 && (index - 7) % 5 == 0 && index != count-1 });
        if ($("b", $(this.options.ckbSplit)).hasClass("checked")) {
            lines.after('<tr class="bline"> </tr>');
        }
         this.lineDisplay();
        
    }
    //折线显示与否 classes线的类名，lineWith线的宽度，lineColor线的颜色
    TrendChart.prototype.lineDisplay = function () {
        if (!this.options.chkZX||$(this.options.chkZX).is(":checked")) { if ($("#canvas").length > 0) $("#canvas").show(); else { this.drawLine(this.options.css.lines, this.options.lineWidth, this.options.lineColor); } }
        else { if ($("#canvas").length > 0) $("#canvas").hide(); }
    }

    /*------------------------------------ 划线方法 -------------------------------------------------*/
    //整体划线方法  参数说明
    TrendChart.prototype.drawLine = function (classes, lineWidth, lineColor) {
        if (classes.length) {
            var vX = 0; var vY = 0;
            var vCX = 0; var vCY = 0;
            this_ = this;
            $("#trendChart").append("<div id='canvas'>");
            this.canvas = $("#canvas");
            for (var n = 0; n < classes.length; n++) {
                var allrds = $(classes[n]);

                $("#chart " + classes[n]).each(function (i) {
                    if (i > 0) {
                        lst = allrds.eq(i);
                        fst = allrds.eq(i - 1);
                        vCY = lst.offset().top + lst.height() / 2;
                        vCX = lst.offset().left + lst.width() / 2;
                        vY = fst.offset().top + fst.height() / 2;
                        vX = fst.offset().left + fst.width() / 2;
                        this_.line(vX, vY, vCX, vCY, lineWidth, lineColor);
                    }
                });
            }

            if (this.isIE > -1) { this.canvas.html(this.canvasStr); this.canvasStr = ""; }
        }
    }

    //单线制作 方法 
    TrendChart.prototype.line = function (x0, y0, x1, y1, nLineWidth, lineColor) {
        var oOffset = $("#trendChart").offset(); //相对于父元素定位
        x0 = x0 - oOffset.left;
        y0 = y0 - oOffset.top;
        x1 = x1 - oOffset.left;
        y1 = y1 - oOffset.top;

        if (this.isIE > -1) {
            var rate = (x1 - x0) / (y1 - y0);
            var diff = rate > 1 ? (rate - 1) * 1.8 / rate : 0;
            var dis = 5.2 + diff;
            if (x0 < x1) { //从左向右
                x0 = x0 + dis;
                y0 = y0 + dis / rate;
                x1 = x1 - dis;
                y1 = y1 - dis / rate;
            }
            else if (x0 > x1) { //从右向左
                x0 = x0 - dis;
                y0 = y0 - dis / rate;
                x1 = x1 + dis;
                y1 = y1 + dis / rate;
            } else {
                x0 = x0;
                y0 = y0 + 7;
                x1 = x1;
                y1 = y1 - 7;
            }
            try {
                this.canvasStr += "<v:line strokecolor=" + lineColor + " from='" + x0 + "px," + y0
        + "px' to='" + x1 + "px," + y1 + "px' strokeweight='" + nLineWidth + "px' style='left:0; top:0; position:absolute;'/>";
            }
            catch (e) { }
        } else {
            var minX = x0;
            var minY = y0;
            if (x1 < x0)
                minX = x1;
            if (y1 < y0)
                minY = y1;
            var w = Math.abs(x0 - x1);
            var h = Math.abs(y0 - y1);
            if (w == 0)
                w = nLineWidth;
            if (h == 0)
                h = nLineWidth;
            var canvas = this.createCanvas();
            var context = canvas.getContext("2d");
            $(canvas).attr("class", "cvs");
            $(canvas).css("left", minX + "px");
            $(canvas).css("top", minY + "px");
            $(canvas).attr("width", w);
            $(canvas).attr("height", h);
            context.strokeStyle = lineColor;
            context.lineWidth = nLineWidth;
            context.beginPath();
            var to_x0 = 0;
            var to_y0 = 0;
            var to_x1 = 0;
            var to_y1 = 0;
            var rate = (x1 - x0) / (y1 - y0);
            var diff = rate > 1 ? (rate - 1) * 1.5 / rate : 0;
            var dis = 5.5 + diff;
            if (x0 < x1) { //从左向右
                to_x0 = dis;
                to_y0 = dis / rate;
                to_x1 = w - dis;
                to_y1 = h - dis / rate;
            }
            else if (x0 > x1) { //从右向左
                to_x0 = w - dis;
                to_y0 = -dis / rate;
                to_x1 = dis;
                to_y1 = h + dis / rate;
            } else {
                to_x0 = 0;
                to_y0 = 7;
                to_x1 = 0;
                to_y1 = h - 7;
            }
            context.moveTo(to_x0, to_y0);
            context.lineTo(to_x1, to_y1);
            context.stroke();
        }

    }

    //canvas画布 生成
    TrendChart.prototype.createCanvas = function () {
        var canvas = document.createElement("canvas");
        this.canvas.append(canvas);
        return canvas;
    }

    TrendChart.prototype.clearLines = function () {
        $("#canvas").remove();
        $("#chart tr.bline").remove();
    };

    return TrendChart;
});