$(function() {
	myFeedback.getMyFeedback({
		page : 1,// 当前页
		rows : 10,
		elemet : "#listPage",
	});
});

function loadResult(id) {
    if ($("#tr_" + id).attr("flag") == "0") {
        $("#tr_" + id).show();
        $("#tr_" + id).attr("flag", "1")
    } else {
        $("#tr_" + id).hide();
        $("#tr_" + id).attr("flag", "0")
    }

}

var myFeedback = {
	getMyFeedback : function(pageOption) {
		pageOption.nextPageCallback = "";// 清空回调函数
		$.post("home/getMyFeedback.do", pageOption, function(r) {
			if (r) {
				pageOption.totalCount = r.totalCount;
				pageOption.nextPageCallback = myFeedback.getMyFeedback;
				doTCompile("feedback", r);
				new cpPage(pageOption).pagination();
			}
		}, "json");
	}
}