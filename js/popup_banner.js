$(function(){
    /*.btn을 클릭하면 .popup이 나타나고, close를 클릭하면 .popup이 사라진다.*/
    $(".popup_btn").click(function(){
        $(".popup_box").fadeIn();
        /*서서히 나타나게 하고 싶으면 fadeIn(), 그냥 나타나게 하고 싶으면 show()를 써준다.*/
    });
    $(".popup_box p").click(function(){
        $(".popup_box").fadeOut();
        /*서서히 사라지게 하고 싶으면 fadeOut(), 그냥 사라지게 하고 싶으면 hide()를 써준다.*/
        $('.popup_box').on('scroll touchmove mousewheel');
    });
});