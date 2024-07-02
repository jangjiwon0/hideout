$(function(){
    /*.btn을 클릭하면 .popup이 나타나고, close를 클릭하면 .popup이 사라진다.*/
    $(".popup_1").click(function(){
        $(".video_1").fadeIn();
        /*서서히 나타나게 하고 싶으면 fadeIn(), 그냥 나타나게 하고 싶으면 show()를 써준다.*/
    });
    $(".popup_2").click(function(){
        $(".video_2").fadeIn();
    });
    $(".popup_3").click(function(){
        $(".video_3").fadeIn();
    });
    $(".popup_4").click(function(){
        $(".video_4").fadeIn();
    });
    $(".popup_5").click(function(){
        $(".video_5").fadeIn();
    });
    $(".popup_6").click(function(){
        $(".video_6").fadeIn();
    });
    $('.archive_popup').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
		});
    $(".close").click(function(){
        $(".archive_popup").fadeOut();
        /*서서히 사라지게 하고 싶으면 fadeOut(), 그냥 사라지게 하고 싶으면 hide()를 써준다.*/
        $('.archive_popup').on('scroll touchmove mousewheel');
    });
});