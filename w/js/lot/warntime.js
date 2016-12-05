function showCountDown(a, b) {
    timeold = a,
        sectimeold = timeold / 1e3,
        secondsold = Math.floor(sectimeold),
        msPerDay = 864e5,
        e_daysold = timeold / msPerDay,
        daysold = Math.floor(e_daysold),
        e_hrsold = 24 * (e_daysold - daysold),
        hrsold = Math.floor(e_hrsold),
        e_minsold = 60 * (e_hrsold - hrsold),
        minsold = Math.floor(60 * (e_hrsold - hrsold)),
        seconds = Math.floor(60 * (e_minsold - minsold)),
    0 > daysold && (daysold = 0, hrsold = 0, minsold = 0, seconds = 0),
    0 == seconds && 0 == minsold && 0 == hrsold && ($(".currentAward .period").css("color", "#C3271D"), $(".lot-nums").html("<p>等待开奖...<p>"), $(".currentAward .period").html(b + " 期"), $(".roadmap-table tr").find("td[class]:last").find("p:last,label:last,span:last").css("font-weight", "normal"), window.clearInterval(countDownTimer)),
        0 == minsold && 0 == hrsold && 31 > seconds ? ($(".minute,.second").addClass("red-bg"), $(".warnTime #period").css("color", "#C3271D"), 30 == seconds && doPlay()) : ($(".minute,.second").removeClass("red-bg"), $(".warnTime #period").css("color", "green"));
    var c = parseInt(minsold) + parseInt(60 * hrsold);
    10 > c && (c = "0" + c),
    10 > seconds && (seconds = "0" + seconds),
        $(".warnTime .minute").html(c),
        $(".warnTime .second").html(seconds),
    -1 == cpNumber && cpNumber != b && (cpNumber = b)
}
function doPlay() {
    tempCount++;
    try {
        if (checkSound()) {
            var a = $("#duSound");
            a[0].load ? (a[0].load(), a[0].play()) : (a.length && a.remove(), a = document.createElement("bgsound"), a.id = "duSound", a.src = "/res/themes/images/du.mp3", a.loop = 1, $(a).appendTo(document.body))
        }
    } catch(b) {}
    warnCount > tempCount ? window.setTimeout("doPlay()", 1e3) : tempCount = 0
}
function parseToDate(a) {
    var b = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/g,
        c = b.exec(a);
    return null != c ? new Date(c[1], c[2], c[3], c[4], c[5], c[6]) : null
}
function checkSound() {
    return "0" != $.cookie("countdown_sound") ? (openSound(), !0) : (closeSound(), !1)
}
var warnTime = "",
    warnCount = 1,
    tempCount = 0,
    cpNumber = -1,
    countDownTimer = null;