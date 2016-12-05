/**
 * 获取url #后面参数
 * @returns {Object}
 */
function GetRequest() { 
	  var url = location.href; //获取url中"#"符后的字串 
	  var array= new Array(); 
	  array=url.split("#"); //字符分割
	  url = "#"+array[1];
	   var theRequest = new Object(); 
	   if (url.indexOf("#") != -1) { 			   
	      var str = url.substr(1); 
	      strs = str.split("&"); 
	      for(var i = 0; i < strs.length; i ++) { 
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
	      } 
	   } 
	   return theRequest; 
}
/**
* 获取url地址"?"后面的参数
*/
/**
* 获取url地址"?"后面的参数
*/
function GetPara() { 
	  return GetUrlPara(location.href);
}
function GetUrlPara(url) { 
	  var array= new Array(); 
	  array=url.split("?"); //字符分割
	  url = "?"+array[1];
	   var theRequest = null; 
	   if (url.indexOf("?") != -1) { 			   
	      var str = url.substr(1); 
	      strs = str.split("&"); 
	      if(strs&&strs.length>0){
	    	  theRequest = new Object(); 
	    	  for(var i = 0; i < strs.length; i ++) { 
	    		  var arr = strs[i].split("=");
			      theRequest[arr[0]]=unescape(arr[1]); 
			  } 
	      }
	   } 
	   return theRequest; 
}
//动态打开连接
function openwin(url) {
    var a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("id", "openwin");
    document.body.appendChild(a);
    a.click();
}
/**
 * 获取根域名
 * @returns
 */
function getRootDomain(){
	var domain = '';   
	var tmp = location.hostname.split('.');   
	if(tmp.length > 2) 
		domain = tmp.slice(tmp.length-2).join('.');
	else
		domain = tmp.join('.');
	return domain;
}

var Cookie = {};
/**
 * 设置cookie值
 * @param	name	名称
 * @param	value	值
 * @param	expTime 过期时间，单位秒,<=0为会话模式
 */
Cookie.set = function(name, value, expTime) {
	var argv = arguments;
	var argc = arguments.length;
	var expires = new Date();
	if(expTime>0)
		expires.setTime(expires.getTime() + expTime * 1000);
	var path = (argc > 3) ? argv[3] : '/';
	var secure = (argc > 5) ? argv[5] : false;
	var domain = getRootDomain();   
	document.cookie = name + "=" + escape(value)
			+ ((expTime>0) ? ("; expires=" + expires.toGMTString()): "")
			+ ((path == null) ? "" : ("; path=" + path))
			+ ((domain == null) ? "" : ("; domain=" + domain))
			+ ((secure == true) ? "; secure" : "");
};
/**
 * 获取cookie值
 */
Cookie.get = function(name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	var j = 0;
	while (i < clen) {
		j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return Cookie.getCookieVal(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0)
			break;
	}
	return null;
};
/**
 * 删除cookie值
 */
Cookie.clear = function(name) {
	var path = '/';
	var domain = document.domain;   
	var tmp = location.hostname.split('.');   
	if(tmp.length > 2) 
		domain = tmp.slice(1).join('.');
	
	if (Cookie.get(name)) {
		document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
						+"; path=" + path + "; domain=" + domain;
	}
};

Cookie.getCookieVal = function(offset) {
	var endstr = document.cookie.indexOf(";", offset);
	if (endstr == -1) {
		endstr = document.cookie.length;
	}
	return unescape(document.cookie.substring(offset, endstr));
};



