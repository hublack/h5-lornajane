/**
 * Created by createc Chris on 12/12/16.
 */
$(document).ready(function(){

    document.querySelector("html").addEventListener('touchmove', function (ev) {
        event.preventDefault();
    });
    $(document).bind('orientationchange',function(){
        if(window.orientation==90 || window.orientation==-90){
            alert("请使用竖屏访问!");
        }
    });

    //audio
    $('.audio-icon').addClass('audio-icon-animation');
    // $('#audio-player').attr('autoplay','autoplay');
    var audio = document.getElementById('audio-player');
    $('.audio-icon').on('touchend',function(){
        $('.audio-icon').toggleClass('audio-icon-animation');
        if(audio!==null){
            if(!audio.paused)
            {
                audio.pause();
            }else {
                audio.play();
            }
        }
    });

    var pagePlayer = document.getElementById('page-player');
    var tearPlayer = document.getElementById('tear-player');

    //Prepage
    //doto
    function dotoPlay(){
        $('.doto-one').fadeIn(100).delay(400).fadeOut(100);
        $('.doto-two').delay(200).fadeIn(100).delay(500).fadeOut(100);
        $('.doto-three').delay(300).fadeIn(100).delay(600).fadeOut(100);
    }
    setInterval(dotoPlay,1200);
    // init
    $('.flipbook').turn({
        display: 'single',
        gradients: true,
        elevation:10,
        duration:2000,
        when: {
            start: function (event, pageObject, corner) {
                if (corner == 'tl') {
                    event.preventDefault();
                    pageObject.duration = 2000;
                    pageObject.next = pageObject;
                }
            },
            turned: function(e, page) {
                if(page==3){
                   $(".box1-text1").addClass("playFont1");
                    $(".box1-text2").addClass("playFont2");
                }else {
                    $(".box1-text1").removeClass("playFont1");
                    $(".box1-text2").removeClass("playFont2");
                }
                if(page==4){
                    $(".box2-text1").addClass("playFont1");
                    $(".box2-text2").addClass("playFont2");
                }else {
                    $(".box2-text1").removeClass("playFont1");
                    $(".box2-text2").removeClass("playFont2");
                }
                if(page==5){
                    $(".box3-text1").addClass("playFont1");
                    $(".box3-text2").addClass("playFont2");
                }else {
                    $(".box3-text1").removeClass("playFont1");
                    $(".box3-text2").removeClass("playFont2");
                }
                if(page==6){
                    $(".box4-text1").addClass("playFont1");
                    $(".box4-text2").addClass("playFont2");
                }else {
                    $(".box4-text1").removeClass("playFont1");
                    $(".box4-text2").removeClass("playFont2");
                }
                if(page==7){
                    $(".box5-text1").addClass("playFont1");
                    $(".box5-text2").addClass("playFont2");
                }else {
                    $(".box5-text1").removeClass("playFont1");
                    $(".box5-text2").removeClass("playFont2");
                }
                if(page==2){
                    // $('.left-Btn,.right-Btn').css('display','block');
                    // $('.left-Btn').addClass('left-play');
                    // $('.right-Btn').addClass('right-play');
                }
                if(page==6 || page==3 || page==4 || page==5){
                    $('.right-Btn').css('display','block');
                    // $('.right-Btn').addClass('right-play');
                    // $('.left-Btn').addClass('left-play');
                }
                if(page==3 || page==4 || page==5 || page==6 || page==7){
                    $('.hands').css('display','block');
                }

            },
            turning: function(e, page) {

                if(page==1){
                    $('.left-Btn,.right-Btn').css('display','none');
                    pagePlayer.pause();
                    $('.hands').css('display','none');
                }else {
                    pagePlayer.play();
                }
                if(page==2){
                    $('.left-Btn,.right-Btn').css('display','block');
                    $('.hands').css('display','none');
                }
                if(page==3){
                    $('.left-Btn,.right-Btn').css('display','block');
                }
                if(page==6){
                    $('.right-Btn').css('display','block');
                    // $('.right-Btn').removeClass('right-play');
                    // $('.left-Btn').removeClass('left-play');
                }else if(page==7){
                    $('.right-Btn').css('display','none');
                    // $('.right-Btn').removeClass('right-play');
                    // $('.left-Btn').addClass('left-play');
                }

            }
        }
    });

    //判断是否是返回的页面
    var url = window.location.href;
    var Orurl = url.split("html")[1];
    if(Orurl!=""){
        var changeCode = decodeURI(url.split("?")[1].split("&")[0].split("=")[1]);
        var codeNumber = changeCode.split("(")[1].split(")")[0];
        console.info(codeNumber);
        $('.flipbook').turn("page",codeNumber);
    }
    
    $('#go-Btn').on('touchend',function(){
        $('.flipbook').turn('next');
    });

    //RulePage
    var a = $('.flipbook').turn('page');
    console.info(a);

    $('.left-Btn').on('touchend',function(){
        $('.flipbook').turn('previous');
    });
    $('.right-Btn').on('touchend',function(){
        $('.flipbook').turn('next');
    });

    //TearPage
    $('.touchBox').bind('touchstart',function(e){
        startX = e.originalEvent.changedTouches[0].pageX,
            startY = e.originalEvent.changedTouches[0].pageY;
        console.info(startX,startY);
    })

    $('.touchBox').bind('touchend',function(e){
        //获取滑动屏幕时的X,Y
        endX = e.originalEvent.changedTouches[0].pageX,
            endY = e.originalEvent.changedTouches[0].pageY;
        //获取滑动距离
        distanceX = endX-startX;
        distanceY = endY-startY;
        //判断滑动方向
        if(Math.abs(distanceX)<Math.abs(distanceY) && distanceY>0){
            tear();
            $('.hands').css('display','none');
        }

    });

    function changePage(){
        tearpage.style.zIndex = 0;
        window.location.href="PrePage.html";
    }

    function tear(){
        var a = $('.flipbook').turn('page');
           if(a!=1 && a!=2){
               tearpage = $("[page='" + a + "']")[0];//get the page to be teared
               console.info(tearpage);
               sessionStorage.setItem('page',a);
               tearpage.id = "myfirst";
               $("#myfirst").addClass("change");
               tearPlayer.play();
               setTimeout(changePage,2000);
           }

    }


})