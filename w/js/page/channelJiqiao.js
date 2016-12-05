function getChannelNews(pageOption) {
	pageOption.nextPageCallback = "";
	$.post("webnews/getChannelNews.do", pageOption, function(r) {
		if (r) {
			pageOption.totalCount = r.totalCount;
			pageOption.nextPageCallback = getChannelNews;
			doTCompile("channel_news", r);
			new cpPage(pageOption).pagination();
		}
	}, "json");
}