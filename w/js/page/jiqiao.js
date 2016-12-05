function updateViewsDay(isPreview){
	if(isPreview==1)
		return ;
	$.get("webnews/updateViewsDay.do", {
		contentId : $("#contentId").val()
	});
}
function getHotNews(channelId,count){
	$.post("webnews/getHotNews.do",
		{channelId:channelId,count:count}, 
		function(r) {
		if (r) {
			if(r&&r.success)
				doTCompile("hot_news", r.rows);
		}
	}, "json");
}

