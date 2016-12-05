function show_error(t) {
    $("#error_msg").css("visibility", "visible").html(t);
}
function hide_error() {
    $("#error_msg").css("visibility", "hidden");
}

var gotoPage = function(second, url) {
    setTimeout(function() {
        window.location.href = url;
    }, second * 1000);// x秒后执行
}

function getJsData(src,callback){
    var head=document.getElementsByTagName("head")[0];
    var js=document.createElement("script");
    js.setAttribute("src",src);
    js.onload=js.onreadystatechange=function(){
        if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){
            head.removeChild(js);
            if(callback) callback();
        }
    }
    head.appendChild(js);
}


var requestUrl=function(urls,i,callback){
    var url="";
    if(urls)
        url=urls[i];
    getJsData(url,function(){
        if(i==urls.length-1){
            callback();
        }else{
            requestUrl(urls,i+=1,callback);
        }
    });
}

var isLogin=false;
var login = function(nameVal, pwdVal) {
    if(isLogin)
        return;
    isLogin=true;
    keepLogin = false;
    if($("#keepLogin").val()=="true"){
        keepLogin = true;
    }
    $.getJSON("ucaccount/login.do", {
        userName : nameVal,
        userPwd : pwdVal,
        keepLogin : keepLogin
    }, function(result) {
        if (result.success) {
//			$("#bbsScript").html(result.t.bbsLoginScriptString);
            var urls=[];
            var a=result.t.bbsLoginScriptString
            a.replace(/<script [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                urls.push(capture)
            });
            requestUrl(urls,0,function(){window.location.href = "/";});
            isLogin=false;
        } else {
            isLogin=false;
            alert(result.msg);
        }
    }).error(function() {
        isLogin=false;
        show_error("网络链接失败，請稍后再试！");
    });
}

$(function() {
    $.post("ucaccount/findCookie.do", {
    }, function(data) {
        if(data){
            $("#name").val(data.userName);
            $("#password").val(data.temporaryPwd);
        }
    }, "json");
    // 登录
    var $lName = $("#name");
    var $lPassWord = $("#password");

    $("#btnLogin").on('click', function() {
        if ($lName.val() == "") {
            show_error("用戶名不能為空");
            $lName.focus();
            return false;
        }
        if ($lPassWord.val() == "") {
            show_error("密碼不能為空");
            $lPassWord.focus();
            return false;
        }
        hide_error();
        login($lName.val(), $lPassWord.val());
        return false;
    });
    // end 登录
    // 注册
    $(".reg_button a").on('click', function() {
        $btnRegister.click();
    });

    var $rName = $("#registerName");
    var $rMobilePhone = $("#mobliePhone");
    var $rEmail = $("#email");
    var $rPassWord = $("#registerPassword");
    var $rPassWord2 = $("#registerPassword2");
    var $code = $("#code");
    var $btnRegister = $("#btnRegister");
    $rName.blur(function() {
        if ($rName.val() == "") {
            show_error("用戶名不能為空");
            return false;
        }
        $.post("ucaccount/checkAccount.do", {
            "userName" : $rName.val()
        }, function(data) {
            if (data == 0) {
                hide_error();
            } else {
                show_error("用戶已存在");
            }
        }, "json");
    });

    $rEmail.blur(function() {
        if ($rEmail.val() == "") {
            show_error("請填寫正確郵箱地址。");
            // $rEmail.focus();
            return false;
        } else if (!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
                .test($rEmail.val()))) {
            show_error("郵箱地址格式錯誤。");
            // $rEmail.focus();
            return false;
        }

        $.post("ucaccount/checkEmail.do", {
            "userEmail" : $rEmail.val()
        }, function(data) {
            if (data == 0) {
                hide_error();
            } else {
                show_error("郵箱已存在");
            }
        }, "json");
    });
    var isPost = false;
    $btnRegister.click(function() {
        if ($rName.val() == "") {
            show_error("用戶名不能為空");
            $rName.focus();
            return false;
        }
        if ($rPassWord.val() == "") {
            show_error("密碼不能為空");
            $rPassWord.focus();
            return false;
        }
        if ($rPassWord.val().length < 4) {
            show_error("請輸入至少4位字符作為密碼");
            $rPassWord.focus();
            return false;
        }
        if ($rPassWord2.val() == "") {
            show_error("确认密碼不能為空");
            $rPassWord2.focus();
            return false;
        }
        if ($rPassWord.val() != $rPassWord2.val()) {
            show_error("两次密碼输入不一致");
            $rPassWord2.focus();
            return false;
        }
        if ($rMobilePhone.val() == "") {
            show_error("請填寫真实手機號碼，以方便接收短信提醒功能。");
            $rMobilePhone.focus();
            return false;
        } else if ($rMobilePhone.val().length != 11) {
            show_error("手機號碼格式錯誤。");
            $rMobilePhone.focus();
            return false;
        }
        if ($rEmail.val() == "") {
            show_error("郵箱地址不能為空");
            $rEmail.focus();
            return false;
        }
        if ($code.val() == "") {
            show_error("驗證碼不能為空");
            $code.focus();
            return false;
        }
        // if (!$("#agree").is(":checked")) {
        if ($("#agree").val() != "true") {
            show_error("請先同意使用協議");
            return false;
        }
        isPost = true;
        hide_error();
        $(".black_shade,.loading_img").show();
        $.post("ucaccount/regAccount.do", {
            "userName" : $rName.val(),
            "userPwd" : $rPassWord.val(),
            "userEmail" : $rEmail.val(),
            "mobliePhone" : $rMobilePhone.val(),
            "code" : $code.val()
        }, function(data) {
            isPost = false;
            if (data.success) {
                // $("#go_to_mail").attr("href",
                // getMailAddr($("#email").val()));
                setTimeout(function () {
                    $(".black_shade,.loading_img").hide();
                    popup.show(1);
                }, 1000);
            } else {
                $(".black_shade,.loading_img").hide();
                show_error(data.msg);
                refValidCode();
            }
        }, "json").error(function() {
            $(".black_shade,.loading_img").hide();
            isPost = false;
            show_error("网络链接失败，請稍后再试！");
        });
        return false;
    });

    // 注册 end
});
function afterLoginSuccess() {
    var cfaction = $('#cfaction');
    if (cfaction.val() == '') {
        cfaction.val('login');
    }
    $('#callbackForm').submit();
}

function refValidCode() {
    document.getElementById("validcode").src = "/ucutil/getValidateCode.do?"
    + Math.random();
}

/** 動畫* */
// login_pro JavaScript Document edit by Thilina Fong Hok Cung
$(function() {
    var IE6 = !-[ 4, ] && !window.XMLHttpRequest;

    $('#back_to_login').on('click', function(e) {
        e.preventDefault();
        popup.hide()
    });

    function ss() {
        $('div.allserv_wrap').stop().animate({
            bottom : "-190px"
        }, 200, function() {
            $('a.dropdown_as').addClass('unfold');
        });
        return isUnFold = false;
    }
    function zk() {
        $('div.allserv_wrap').stop().animate({
            bottom : "0px"
        }, 200, function() {
            $('a.dropdown_as').removeClass('unfold');
        });
        return isUnFold = true;
    }

    // 全部服務 按鈕點擊
    var isUnFold = true; // default:展開的狀態
    $('a.dropdown_as').on({
        click : function(e) {
            e.preventDefault();
            isUnFold ? ss() : zk();
        }
    });

    // 4.展開還是收縮
    function needed(ssV) {
        var fWH = $(window).height();
        fWH < ssV ? ss() : zk();
    }
    needed(776); // onload就運行它一把

    // 調整窗口大小
    // 登錄776----註冊1010
    window.onresize = function() {
        enterInToLog ? needed(776) : needed(1010);
    };

    // checkbox
    $('div.ckb').on('click', 'b,label', function() {
        var $b = $(this).parent().children('b');
        $b.toggleClass('checked');
        if (IE6) {
            $b.hasClass('checked') && $b.css({
                backgroundPosition : "0 -74px"
            });
            !$b.hasClass('checked') && $b.css({
                backgroundPosition : "0 -50px"
            });
        }
        var $ckb = $(this).parent().find('input');
        if ($ckb) {
            $b.hasClass('checked') && $ckb.val("true");
            !$b.hasClass('checked') && $ckb.val("");
        }
    });

    // 登錄 切換 註冊
    var enterInToLog = true;
    $('#register').on('click', function(e) {
        e.preventDefault();
        $('#loginform').css({
            display : "none"
        }).removeClass('fadeInUp');
        $('#registerform').css({
            display : "block"
        }).addClass('fadeInUp');
        needed(1010);
        $(".reg_warnmsg").css({
            display : "block"
        });
        return enterInToLog = false; // return之後的代碼將不再執行
        hide_error();
    });
    $('#login').on('click', function(e) {
        e.preventDefault();
        $('#registerform').css({
            display : "none"
        }).removeClass('fadeInUp');
        $('#loginform').css({
            display : "block"
        }).addClass('fadeInUp');
        $('#loginform input:first-child').focus();
        needed(776);
        hide_error();
        $(".reg_warnmsg").css({
            display : "none"
        });
        return enterInToLog = true;
    });

});

var popup = {
    type : null,
    show : function(type) {
        $('.black_shade,.popup1').css({
            display : "block"
        });
        $('#container').height($('.black_shade').height()).css({
            overflow : 'hidden'
        });
        this.type = type;
    },
    hide : function() {
        $('.black_shade').fadeOut();
        $('.popup1').css({
            display : "none"
        });
        $('#container').height('100%').css({
            overflow : 'visible'
        });
        if (this.type && this.type == 1) {
            login($("#registerName").val(), $("#registerPassword").val());
//			$('#registerform')[0].reset();
        } else {
            $('#login').trigger('click');
        }
    }
};

function show_error(t) {
    $("#error_msg").css("visibility", "visible").html(t);
}
function hide_error() {
    $("#error_msg").css("visibility", "hidden");
}