$(function(){
    /*버튼을 누르면 슬라이드가 내려가고 다시 한번 누르면 슬라이드가 올라온다. */
    $(".community_inner .more").click(function(){
        $(".community_inner .add_container").slideToggle();
    });
    $(".community_inner .more").click(function(){
        $(this).toggleClass("on");
    });
});