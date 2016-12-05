/**
 * 在页面内容之前执行
 */
var beforPageJs = {
	getGameName : function() {
		var pathname = window.location.pathname;
		if (pathname.indexOf("/fc3d/") >= 0
				|| pathname.indexOf("/gdkl10/") >= 0
				|| pathname.indexOf("/jsk3/") >= 0
				|| pathname.indexOf("/tjssc/") >= 0
				|| pathname.indexOf("/kl8/") >= 0
				|| pathname.indexOf("/pk10/") >= 0
				|| pathname.indexOf("/cqssc/") >= 0
				|| pathname.indexOf("/shssl/") >= 0
				|| pathname.indexOf("/xjssc/") >= 0
				|| pathname.indexOf("/gd11x5/") >= 0
				|| pathname.indexOf("/xyft/") >= 0
				|| pathname.indexOf("/fc3d/") >= 0
				|| pathname.indexOf("/xync/") >= 0
				|| pathname.indexOf("/pl3/") >= 0) {
            var i = 0;
            if(pathname.split("/")[1] == 'fuzhi')
                i = 1;
			beforPageJs.gameName = pathname.split("/")[1+i];
			// console.log("当前页面游戏名称： beforPageJs.gameName = " +
			// beforPageJs.gameName);
			beforPageJs.pageName = pathname.split("/")[2+i].split(".")[0];
			// console.log("当前页面： beforPageJs.pageName = " +
			// beforPageJs.pageName);
		}
	}
};
// 不等页面加载完，先处理
beforPageJs.getGameName();
