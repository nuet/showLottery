var classArray = [ "infomation", "safetycenter", "mailcenter", "phonecenter" ];
var classArrayLen = classArray.length;
// 切换选项卡
function showUpUserInfo(thisObj) {
	for (var i = 0; i < classArrayLen; i++) {
		var tempClass = classArray[i];
		$("#" + tempClass).removeClass(tempClass + "-cur");
		$("#" + tempClass).addClass(tempClass);
		$("#" + tempClass + "HTML").hide();
	}
	$("#" + thisObj + "HTML").show();
	$("#" + thisObj).addClass(thisObj + "-cur");
}

function openUpInfo(_type) {
	$.post("User/getLoginUserInfo.html", function(r) {
		if (r && r.success) {
			var udata=r.t;
			$("#realname").val(udata.realName);
			if (udata.gender) {
				$("input[name='gender'][value='"+udata.gender+"']").attr("checked", true);
			}
			$("#mobilephone").val(udata.mobliePhone);
			$("#email").val(udata.userEmail);
			
			var title;
			var url;
			var classStr;
			switch (_type) {
			case "info":
				title = "更改资料";
				classStr = "infomation";
				break;
			case "password":
				title = "修改密码";
				classStr = "safetycenter";
				break;
			case "bindmail":
				title = "绑定邮箱";
				classStr = "mailcenter";
				break;
			case "bindphone":
				title = "激活手机";
				classStr = "phonecenter";
				break;
			default:
				return;
			}
			showUpUserInfo(classStr)
			$.dialog({
				title : title,
				padding : '5px',
				width : 800,
				height : 500,
				content : document.getElementById('upUserInfo'),
				ok : false
			});
		}else{
			alert(r.msg)
		}
	}, "json");
}
$(function() {
	$.Tipmsg.r="";//默认成功消息
	$("#updateform").Validform({
		tiptype:3,
		ajaxPost:true,
		callback:function(result) {
			$("#Validform_msg").hide();
			if(result.status&&result.status==500){
				alert("網絡異常");
			}else{
				if (result.success) {
					alert("修改成功。");
				} else {
					alert(result.msg);
				}
			}
		}
	});
	$("#upPwForm").Validform({
		tiptype:3,
		ajaxPost:true,
		callback:function(result) {
			if(result.status&&result.status==500){
				alert("網絡異常");
			}else{
				if (result.success) {
					alert("修改成功。");
				} else {
					alert(result.msg);
				}
			}
		}
	});
});
