$(function(){
    $("#notice .tab_content ul li").click(function(){
        $(this).children("div.notice_text").slideDown();
		$(this).siblings().children("div.notice_text").slideUp();
    });
});