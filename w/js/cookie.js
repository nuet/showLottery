var Cookies = {};
Cookies.getCookie = function(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if (c_end == -1)
				c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}

Cookies.setCookie = function(c_name, value, path, expiredays) {
	var exdate = new Date()
	var cookie =c_name + "=" + value+";";
	if(path){
		cookie+="path=" + path + ";"
	}
	if(expiredays){
		exdate.setDate(exdate.getDate() + expiredays);
		cookie+="expires="+exdate.toGMTString()+";";
	}
	document.cookie = cookie;
}

Cookies.checkCookie = function() {
	username = getCookie('username')
	if (username != null && username != "") {
		alert('Welcome again ' + username + '!')
	} else {
		username = prompt('Please enter your name:', "")
		if (username != null && username != "") {
			setCookie('username', username, 365)
		}
	}
}