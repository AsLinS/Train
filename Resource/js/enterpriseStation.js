$(document).ready(function () {
    //每个固定时间移动图片
    var timer = setInterval(picLoop, 1000);
    var index = 0;

    function picLoop() {
        index++;
        if (index == 3) {
            index = 0
        }
        $('#imgList').animate({
            "left": -1500 * index
        }, 300);
        $('.navDiv a').eq(index).css("background-color", "red").siblings().css("background-color",
            "rgba(100,100,100,0.3)");
    }
    //定时器的控制
    //移入图片区显示左右>和<
    $("#imgList").hover(function () {
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    }, function () {
        timer = setInterval(picLoop, 1000);
        $(".left").hide();
        $(".right").hide();
    })
    $('.navDiv a').mouseover(function () {
        clearInterval(timer);
        $(this).css("background-color", "red").siblings().css("background-color",
            "rgba(100,100,100,0.3)");
        index = $(this).index();
        $('#imgList').animate({
            "left": -1500 * index
        }, 300);
    })
    $('.navDiv a').mouseout(function () {
        timer = setInterval(picLoop, 1000);
    })
    $(".left").mouseover(function () {
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    });

    $(".left").click(function () {
        index--;
        if (index == -1) {
            index = 4;
        }
        $("#imgList").animate({
            "left": -1500 * index
        }, 300);
        $('.navDiv a').eq(index).css("background-color", "red")
            .siblings().css("background-color", "rgba(100,100,100,0.3)");
    })
    $(".right").mouseover(function () {
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    })
    $(".right").click(function () {
        index++;
        if (index == 5) {
            index = 0
        }
        $("#imgList").animate({
            "left": -1500 * index
        }, 300);
        $('.navDiv a').eq(index).css("background-color", "red")
            .siblings().css("background-color", "rgba(100,100,100,0.3)");
    })
})
