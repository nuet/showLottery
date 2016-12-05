$(" .lot-award .currentAward .period-info").html('')
function updateHistoryRecord() {
	$.get("fc3d/getNewestRecord.do", {
		ajaxhandler: "GetNewestRecord",
		t: Math.random()
	}, function(a) {
		var e, f, b = a.numbers.split(","),
			c = $("#history tr").eq(1),
			d = "odd";
		for (c && (d = "odd" == c.attr("class") ? "even" : "odd"), e = '<tr class="' + d + '"><td><p class="p">' + a.period + '</p><p class="t">' + a.drawingTime, e += '</p></td><td class="nums">', f = 0; f < b.length; f++) e += "<span>" + b[f] + "</span>", 9 == f && (e += "<div class='clear'></div>");
		e += "</td>", e += "<td>" + a.pan + "</td>", e += "<td><p " + ("单" == a.totalOddorEven ? 'class="r"' : "") + ">" + a.totalOddorEven + "</p></td>", e += "<td><p " + ("大" == a.totalBigOrSmall ? 'class="r"' : "") + ">" + a.totalBigOrSmall + "</p></td>", e += "<td><p " + ("上" == a.panhao ? 'class="r"' : "") + ">" + a.panhao + "</p></td>", e += "<td>" + a.total + "</td>", e += "<td>" + a.wuhang + "</td>", e += "</tr>", $("#history .head").after(e)
	}, "json")
}
$(function() {
	function f() {
		var b, c, d, e, f, a = $("#pageName").val();
		if (a) {
			if (b = $("#pageName").attr("container"), c = $("#pageName").attr("time"), d = $("#pageName").attr("unload"), d && "1" == d) return;
			c = ~~c, b = b ? b : "lot-wrap", setTimeout(function() {
				$.get("fc3d/" + a, {
					t: Math.random()
				}, function(a) {
					$("#" + b).html(a), Glitter()
				})
			}, c)
		} else e = $("#callFun").val(), c = $("#callFun").attr("time"), e && (f = e.split("|"), setTimeout(function() {
			for (var a = 0; a < f.length; a++) window[f[a]]()
		}, c))
	}

	function l() {
		$.get("fc3d/getxjsscAwardTimes.do", {
			ajaxhandler: "GetxjsscAwardTimes",
			t: Math.random()
		}, function(b) {
			j = b, b.current.periodNumber != cpNumber && (k = b.next.awardTimeInterval, countDownTimer && window.clearInterval(countDownTimer), countDownTimer = window.setInterval(function() {
				k = Math.max(0, k - 1e3), showCountDown(k, b.next.periodNumber)
			}, 1e3)), cpNumber = b.current.periodNumber, -1 == i && (i = b.current.periodNumber, luzhuFirstShow(a, i)), $(".warnTime #period").html("第" + b.next.periodNumber + "期"), h = window.setTimeout(l, b.next.awardTimeInterval < 10 ? 1e4 : b.next.awardTimeInterval + 1e3)
		}, "json").error(function() {
			20 > d && (window.setTimeout(l, 5e3 + 1e4 * Math.random()), d++)
		}), d >= 5 && showLotPeriodNumWarn(c)
	}
	var h, a = -1,
		b = 8e3,
		c = -1,
		d = 0,
		e = 0,
		g = function() {
			$.get("fc3d/getxjsscAwardData.do", {
				ajaxhandler: "GetFc3dAwardData",
				t: Math.random()
			}, function(h) {
				var j, k, l, m;
				if (e += 1, h.current.periodNumber != a && -1 != a && (b = 38e3, window.setTimeout(f, 5e3), $(".currentAward .period").css("color", "green"), e = d = 0, hideLotPeriodNumWarn()), 0 != b) {
					for ($(".currentAward .period").html(h.current.periodNumber + " 期  "), j = h.current.awardNumbers.split(","), k = "", l = 0; l < j.length; l++) 10 == l && (k += "<br/>"), k = k + "<span class='no" + j[l] + "'>" + j[l] + "</span>";
					$(".lot-nums").html(k), -1 == a && $(".currentAward .period").css("color", "green"), -1 == a && (a = h.current.periodNumber, luzhuFirstShow(a, i)), a = h.current.periodNumber, c = h.next.periodNumber
				}
				m = parseInt(parseInt(h.next.awardTimeInterval) + b + parseInt(1e3 * Math.random())), window.setTimeout(g, h.next.awardTimeInterval < 10 ? 1e3 : m), b = 0
			}, "json").error(function() {
				20 > d && (window.setTimeout(g, 5e3 + 1e4 * Math.random()), d++)
			}), (d >= 5 || e > 6) && showLotPeriodNumWarn(c)
		}, i = -1,
		j = null,
		k = -1;
	window.setTimeout(g, 1000), h = window.setTimeout(l, 1e3)
});