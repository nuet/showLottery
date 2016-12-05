var vtype = "2";
$(function() {
	// 模擬下拉框
	// 1下拉
	$('.sel a.sel_btn').on({
		click : function(e) {
			e.preventDefault();
			e.stopPropagation(); // 阻止冒泡到document
			$(this).siblings('span').fadeIn(100).css({
				display : 'block'
			}).end().parent().siblings('.sel').find('span').fadeOut(100);
		}
	});
	// 2選擇
	$('p.sel span a').on(
			{
				click : function(e) {
					e.preventDefault();
					e.stopPropagation(); // 阻止冒泡到document
					var strSelect = $(this).text();
					vtype = $(this).attr("tid");
					$(this).parent().fadeOut(230).siblings('a.sel_btn').html(
							strSelect + '<i></i>');
				}
			});
	// 3任意位置點擊(document)消失下拉框
	$(document).on('click', function() {
		$('p.sel span').css({
			display : 'none'
		});
	});
	// 有什么想说的，尽管来咆哮吧....
	$('.fb_ft tbody textarea').blur(function() {
		// alert($(this).val());
		// $(this).val()!='' && $(this).css({backgroundPosition:'right
		// bottom'});
		$(this).val().match(/^\s*$/g) && $(this).css({
			backgroundPosition : 'center center'
		}).val('');
	}).focus(function() {
		$(this).css({
			backgroundPosition : 'right bottom'
		});
	})
	$("#texContent").bind("focus", function() {
		$("#spcontent").text("");
	});
	$("#txtcontact").bind("focus", function() {
		$("#spcontact").text("");
	});
	$(".button").bind("click", function() {

		checkForm();

	});

	textareaDisplayValidator($('#texContent'), 490);
})

function checkForm() {
	var vcontent = $.trim($("#texContent").val());
	var vcontact = $.trim($("#txtcontact").val());
	if (vcontent.length <= 0) {
		$("#spcontent").text("反馈内容不能为空！");
		return false;
	} else if (vcontact.length <= 0) {
		$("#spcontact").text("联系方式不能为空！");
		return false;
	} else {
		if (checkMobile(vcontact) == false && checkPhone(vcontact) == false
				&& checkQQ(vcontact) == false && checkEmail(vcontact) == false) {
			$("#spcontact").text("联系方式格式不正确，必须是邮箱/电话/QQ/手机号码！");
			return false;
		} else {

			$.post("User/subFeedback.html", {
				fbType : vtype,
				fbContent : escape(vcontent),
				fbContact : vcontact
//				,s : encodeURI(document.referrer)
			}, function(data) {
				if (data.success) {
					$("#texContent").val("");
					$("#texContent").text("");
					$("#txtcontact").val("");
					vtype = "2";
					$("a.sel_btn").html("网站优化建议<i></i>")
					$.dialog({
						title : "用户反馈",
						padding : '5px',
						width : 400,
						height : 50,
						content : "感谢您的反馈！我们将尽快联系您！",
						ok : false
					});
				} else {
					$.dialog({
						title : "用户反馈",
						padding : '5px',
						width : 400,
						height : 50,
						content : data.msg,
						ok : false
					});
				}
			}, "json");
		}
	}
	return false;
}