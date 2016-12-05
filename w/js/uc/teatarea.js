/* *
* 限制textarea输入字数
* 调用举例：textareaDisplayValidator($('#SMS_CONTENT'),20,'<s:text name="validator.SMS_CONTENT.onfocus"/>');
* textArea，输入文字内容的文本域对象
* total，最大输入字数
* message，输入字数超过最大限制的提示消息
*/
function textareaDisplayValidator(textArea, total, message) {
    if ($.browser.msie) { //IE浏览器
        $(textArea).unbind("propertychange").bind("propertychange", function (e) {
            e.preventDefault();
            textareaMaxProc(textArea, total);
        });
    }
    else { //ff浏览器
        $(textArea).unbind("input").bind("input", function (e) {
            e.preventDefault();
            textareaMaxProc(textArea, total);
        });
    }
}

function textareaMaxProc(textArea, total) {
    var max;
    max = total;
    if ($(textArea).val().length > max) {
        $(textArea).val($(textArea).val().substring(0, max));
    }
}

function checkMobile(str) {
    var re = /^1[3|5|8]\d{9}$/
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}
function checkQQ(str) {
    var re = /^\d{5,15}$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}
function checkPhone(str) {
    var re = /^0\d{2,3}-?\d{7,8}$/;
    var res = /^\d{7,8}$/;
    if (re.test(str) || res.test(str)) {
        return true;
    } else {
        return false;
    }
}
function checkEmail(str) {
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}