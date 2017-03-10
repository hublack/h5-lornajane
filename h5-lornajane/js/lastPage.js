/**
 * Created by createc on 29/12/16.
 */
window.onload=function(){
    document.querySelector('body').addEventListener('touchmove', function (ev) {
        event.preventDefault();
    });
    var getCode = sessionStorage.getItem("page");
    if(getCode==null){
        $(".play-Again,.show-To,.get-Gift").css("display","none");
        $(".play-Too,.have-Gift").css("display","block");
    }

    var lastpagePlayer = document.getElementById('lastpage-player');
    $(".play-Again").on("touchend",function(){
        window.location.href="index.html";
        lastpagePlayer.play();
    });
    $(".show-To").on("touchend",function(){
        lastpagePlayer.play();
        $(".cover").css("display","block");
    });
    $(".get-Gift,.have-Gift").on("touchend",function(){
        lastpagePlayer.play();
        $(".code").css("display","block");
    });
    $(".close-Btn").on("touchend",function(){
        lastpagePlayer.play();
        $(".code").css("display","none");
    });

    $(".cover").on("touchend",function(){
        lastpagePlayer.play();
        $(this).css("display","none");
    });
    $(".play-Too").on("touchend",function(){
        window.location.href="index.html";
        lastpagePlayer.play();
    });

    $.fn.longPress = function(fn) {
        var timeout = undefined;
        var $this = this;
        for(var i = 0;i<$this.length;i++){
            $this[i].addEventListener('touchstart', function(event) {
                timeout = setTimeout(fn, 800);
            }, false);
            $this[i].addEventListener('touchend', function(event) {
                clearTimeout(timeout);
            }, false);
        }
    }

    $(".code").longPress(function(){

    });



}