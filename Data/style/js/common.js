
var Common = new Object();
Common.htmlEncode = function(str)
{
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

Common.trim = function(str)
{
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

Common.strlen = function(str) {
    if (is_moz)
    {
        Charset = document.characterSet;
    }
    else
    {
        Charset = document.charset;
    }
    if (Charset.toLowerCase() == 'utf-8')
    {
        return str.replace(/[\u4e00-\u9fa5]/g, "***").length;
    }
    else
    {
        return str.replace(/[^\x00-\xff]/g, "**").length;
    }
}

Common.init = function() {

//changer
    $(".tab ul li:first-child").addClass("on");
    $(".box .BoxContent:first-child").addClass("on");
    $(".tab ul li").hover(function() {
        $(this).addClass("on").siblings().removeClass("on");
        var $box = $(this).closest(".tab").siblings(".box").find(".BoxContent");
        var index = $(this).index();
        $box.eq(index).show().siblings().hide();
    });

    $(".suspend").mouseover(function() {
        $(this).stop();
        $(this).animate({width: 200}, 400);
    })
    $(".suspend").mouseout(function() {
        $(this).stop();
        $(this).animate({width: 40}, 400);
    })


}

