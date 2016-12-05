$(document).ready(function () {
    $("#floatShow").bind("click", function () {
        $('#onlineService').animate({ width: 'show', opacity: 'show' }, 'normal', function () { $('#onlineService').show(); }); $('#floatShow').attr('style', 'display:none'); $('#floatHide').attr('style', 'display:block');
        return false;
    });
    $("#floatHide").bind("click", function () {
        $('#onlineService').animate({ width: 'hide', opacity: 'hide' }, 'normal', function () { $('#onlineService').hide(); }); $('#floatShow').attr('style', 'display:block'); $('#floatHide').attr('style', 'display:none');
    });
    $(document).bind("click", function (event) {
        if ($(event.target).isChildOf("#online_qq_layer") == false) {
            $('#onlineService').animate({ width: 'hide', opacity: 'hide' }, 'normal', function () { $('#onlineService').hide(); }); $('#floatShow').attr('style', 'display:block'); $('#floatHide').attr('style', 'display:none');
        }
    });
    jQuery.fn.isChildAndSelfOf = function (b) {
        return (this.closest(b).length > 0);
    };
    jQuery.fn.isChildOf = function (b) {
        return (this.parents(b).length > 0);
    };
    $(".lot-items").hover(function () {
        $(this).find(".vertical-line").css("display", "none");
        $(".items-cont").css("display", "block");
    }, function () {
        $(this).find(".vertical-line").css("display", "block");
        $(".items-cont").css("display", "none");
    });
    $(".items-cont").hover(function () {
        $(".lot-item").addClass("lot-item-hover");
        $(".lot-item b").addClass("b-hover");
    }, function () {
        $(".lot-item").removeClass("lot-item-hover");
        $(".lot-item b").removeClass("b-hover");
    });
    $("#bookmarkli").hover(function () {
        if ($("#inbox li").length > 0)
            $("#inbox").stop(true, true).slideDown(0);
    }, function () {
        $("#inbox").stop(true, true).slideUp(150);
    });
    $("#inbox").hover(function () {
        $("#bookmarkli b").addClass("b-hover");
        $("#bookmarkli a").addClass("bookmarkli-hover");
    }, function () {
        $("#bookmarkli b").removeClass("b-hover");
        $("#bookmarkli a").removeClass("bookmarkli-hover");
    });
    $('#logout').click(function () {
        if (confirm('是否确认要退出？')) {
            self.location.href = "/home/logout";
        }
        return true;
    });
});
function addFavorite(sUrl, sTitle) {
    try {
        window.external.addFavorite(sUrl, sTitle);
    } catch (e) {
        try {
            window.external.addToFavoritesBar(sUrl, sTitle);
        } catch (e) {
            try {
                window.sidebar.addPanel(sTitle, sUrl, "");
            }
            catch (e) {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    }
}

function SetHome(obj,url){
    try
    {
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }
    catch(e)
    {
        if(window.netscape)
        {
            try
            {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e)
            {
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");     }    }else{    alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
        }
    }
}

var member = {};
member.userLogined = false;

/*$.post('/sso/ticket', null, function (data) {
 if (data) {
 $('#mname').text(data.name);
 $('#signin').show();
 $('#unsignin').hide();
 GetBookMarkUrl();
 member.userLogined = true;

 if (data.feedback != 0) {
 $("#msg_feedback").text(data.feedback);
 $("#myfeedback").text(data.feedback);
 $("#myfeedback").show();
 } else {
 $("#msg_feedback").remove();
 $("#myfeedback").hide();
 }

 } else {
 $('#unsignin').show();
 $('#signin').hide();
 }
 }, 'json');*/

function GetBookMarkUrl() {
    $.post('/home/getbookmarkurl', null, function (data) {
        if (data) {
            if (data.success == true) {
                var htmlUrl = "";
                for (var i = 0; i < data.bookMarkUrl.length; i++) {
                    htmlUrl = htmlUrl + "<li><a href='" + data.bookMarkUrl[i].url + "' target='_blank'>" + data.bookMarkUrl[i].name + "</a></li>";
                }
                $("#inbox").html(htmlUrl);
            }
        }
    });
}
String.prototype.replaceWith = function (d) {
    return this.replace(/\{\$(\w+)\}/g, function (a, c) {
        if (c in d) {
            return d[c];
        }
        else {
            return a;
        }
    });
};