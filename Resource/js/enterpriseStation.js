// // $(document).ready(function () {
// //     //每个固定时间移动图片
// //     var timer = setInterval(picLoop, 1000);
// //     var index = 0;

// //     function picLoop() {
// //         index++;
// //         if (index == 3) {
// //             index = 0
// //         }
// //         $('#header-right-list').animate({
// //             "left": -1500 * index
// //         }, 300);
// //         $('.navDiv a').eq(index).css("background-color", "red").siblings().css("background-color",
// //             "rgba(100,100,100,0.3)");
// //     }
// //     //定时器的控制
// //     //移入图片区显示左右>和<
// //     $("#header-right-list").hover(function () {
// //         clearInterval(timer);
// //         $(".left").show();
// //         $(".right").show();
// //     }, function () {
// //         timer = setInterval(picLoop, 1000);
// //         $(".left").hide();
// //         $(".right").hide();
// //     })
// //     $('.navDiv a').mouseover(function () {
// //         clearInterval(timer);
// //         $(this).css("background-color", "red").siblings().css("background-color",
// //             "rgba(100,100,100,0.3)");
// //         index = $(this).index();
// //         $('#header-right-list').animate({
// //             "left": -1500 * index
// //         }, 300);
// //     })
// //     $('.navDiv a').mouseout(function () {
// //         timer = setInterval(picLoop, 1000);
// //     })
// //     $(".left").mouseover(function () {
// //         clearInterval(timer);
// //         $(".left").show();
// //         $(".right").show();
// //     });

// //     $(".left").click(function () {
// //         index--;
// //         if (index == -1) {
// //             index = 4;
// //         }
// //         $("#header-right-list").animate({
// //             "left": -1500 * index
// //         }, 300);
// //         $('.navDiv a').eq(index).css("background-color", "red")
// //             .siblings().css("background-color", "rgba(100,100,100,0.3)");
// //     })
// //     $(".right").mouseover(function () {
// //         clearInterval(timer);
// //         $(".left").show();
// //         $(".right").show();
// //     })
// //     $(".right").click(function () {
// //         index++;
// //         if (index == 5) {
// //             index = 0
// //         }
// //         $("#header-right-list").animate({
// //             "left": -1500 * index
// //         }, 300);
// //         $('.navDiv a').eq(index).css("background-color", "red")
// //             .siblings().css("background-color", "rgba(100,100,100,0.3)");
// //     })
// // })

// var box=document.getElementById('content-rockTop');
// var liList=document.getElementsByName('#content-rockTop-imgslist li');
// var olList=document.getElementsByName('ol li');
// var timer=null;
// var count=0;

// function rock(){
//     console.log("!!");
//     count++;
//     if(count>liList.length-1)
//         count=0;
//     for(var i=0;i<liList.length;i++){
//         liList[i].style='display:none';
//         olList[i].className='';
//     }
//     liList[count].style='display:block';
//     olList[count].className='active';
    
// }
// timer=setInterval(rock,1000);
// // $('#right').click(function(){
// //     rock();
// // })
// // $('#left').click(function(){
// //     count--;
// //     if(count<0)
// //         count=liList.length-1;
// //     for(let i=0;i<liList.length;i++){
// //         liList[i].style='display:none';
// //         olList[count].className='';
// //     }
// //     liList[count].style='display:block';
// //     olList[count].className='active';
// // })

// $('content-rockTop').onmouseover =function(){
//     console.log("123")
//     clearInterval(timer);
// }
// $('content-rockTop').onmouseout =function(){
//     console.log("233");
//     timer=setInterval(rock,1000);
// }