var callbackCheckLogin="";
var account = {
	checkLogin : function() {
		$.post("User/checkLogin.html", function(r) {
			if (r && r.success) {
				$("#mname").html(r.t.userName);
				$("#unsignin").hide();
				$("#signin").show();
				if(isExitsVariable(callbackCheckLogin)){
					if(isExitsFunction(callbackCheckLogin))
						callbackCheckLogin(r.t);
				}
			}else{
				$("#mname").html("");
				$("#unsignin").show();
				$("#signin").hide();
			}
		}, "json");
	},
	logout : function() {
		if(confirm( '是否确认要需要退出？ ')){
			$.post("User/logout.html", function(r) {
				if (r && r.success) {
					$("#bbsScript").html(r.t.bbsLoginScriptString);
					$("#mname").html("");
					$("#unsignin").show();
					$("#signin").hide();
					setInterval(function(){
						location.reload();
					}, 2000)
//					location.reload();
				}
			}, "json");
		}
	}
}