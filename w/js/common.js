(function (d) {
    d['okValue'] = '确定';
    d['cancelValue'] = '取消';
    d['title'] = '消息';
    d['lock'] = true;
})($.dialog.defaults);

$(function(){
    $.dialog.loading = {
        show : function(content){
            var text = ' ' + (content ? content : '正在处理，请稍候……');
            if($.dialog.get('_diloag_loading')){
                $.dialog.get('_diloag_loading').content(text).visible();
            }else{
                $.dialog({title: false,
                    id: '_diloag_loading',
                    padding: '5px',
                    content: text,
                    ok: false,
                    cancel : false
                });
            }
        },
        hide : function(){
            $.dialog.get('_diloag_loading').hidden();
        }
    };
    $.dialog.alert = function(title, content, okfunc){
        $.dialog({title: title,
            padding: '5px',
            content: content,
            ok: function () {
                if(okfunc) return okfunc();
            }
        });
    };
    $.dialog.confirm = function(title, content, okfunc, cancelfunc){
        $.dialog({title: title,
            padding: '5px',
            content: content,
            ok: function () {
                if(okfunc) return okfunc();
                return true;
            },
            cancel : function(){
                if(cancelfunc) return cancelfunc();
                return true;
            }
        });
    };

    $('[jvcorrecttip]').each(function(){
        var o = $(this);
        if(o.attr('jvcorrecttip') == ''){
            o.attr('jvcorrecttip','<img src="template/images/true.gif" align="absmiddle" width="24" height="24" border="0" />');
        }
    });
});

//水印
(function ($) {
    $.fn.extend({
        "watermark": function (options) {
            var word = this.attr("watermark");
            var opts = $.extend({}, defualts, options);
            if (this.val() == "") {
                this.css("color", defualts.emptycolor);
                this.val(word);
            }
            this.focus(function () {
                if (this.value == word) {
                    $(this).css("color", defualts.emptycolor);
                    $(this).val("");
                } else {
                    if ($(this).getColor() == defualts.emptycolor.toUpperCase()) {
                        $(this).css("color", defualts.color);
                    }
                }
            });
            this.keyup(function () {
                if ($(this).getColor() == defualts.emptycolor.toUpperCase()) {
                    $(this).css("color", defualts.color);
                }
            });
            this.blur(function () {
                if (this.value == "") {
                    $(this).css("color", defualts.emptycolor);
                    $(this).val(word);
                } else {
                    if ($(this).getColor() == defualts.emptycolor.toUpperCase()) {
                        $(this).css("color", defualts.color);
                    }
                }
            });
            return this;
        }
    });
    var defualts = {
        emptycolor: "#aaaaaa",
        color: "#000000"
    };
})(window.jQuery);

$.fn.getColor = function () {
    var rgb = $(this).css('color');
    if (!rgb) {
        return '#FFFFFF'; //default color
    }
    var hex_rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) { return ("0" + parseInt(x).toString(16)).slice(-2); }
    if (hex_rgb) {
        return ("#" + hex(hex_rgb[1]) + hex(hex_rgb[2]) + hex(hex_rgb[3])).toUpperCase();
    } else {
        return rgb.toUpperCase(); //ie8 returns background-color in hex format then it will make                 compatible, you can improve it checking if format is in hexadecimal
    }
}