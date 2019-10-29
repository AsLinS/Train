
var timers=[];

function createBullet(strBarrage){
    var dom=$("<div class='bullet'>"+strBarrage+"</div>");
    var fontColor="rgb("+Math.floor((Math.random())*256)+","+Math.floor(Math.random()*256)+","
                    +Math.floor(Math.random())+")";
    var fontSize=Math.floor((Math.random()+1)*24)+"px";
    var left=$(".content").width()+"px";
    var top=Math.floor(Math.random()*400)+"px";
    top=parseInt(top)>352?"352px":top;
    dom.css({
        "position":'absolute',
        "color":fontColor,
        "font-size":fontSize,
        "left":left,
        "top":top,
        "white-space":'nowrap'
    });
    $(".content").append(dom);
    return dom;

}

function addInterval(jqueryDom) {
    var left = jqueryDom.offset().left - $(".content").offset().left;
    var timer = setInterval(function () {
        left--;
        jqueryDom.css("left", left + "px");
        if (jqueryDom.offset().left + jqueryDom.width() < $(".content").offset().left) {
            jqueryDom.remove();
            clearInterval(timer);
        }
    }, 10);
    timers.push(timer);
}

function spaw(){
    var dom=createBullet($("#input").val());
    
    console.log("2333");
    addInterval(dom);
}


function del(){
    console.log("123");
    $(".bullet").remove();
}