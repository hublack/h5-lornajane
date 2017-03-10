/**
 * Created by createc on 27/12/16.
 */
window.onload=function(){
    document.querySelector('body').addEventListener('touchmove', function (ev) {
        event.preventDefault();
    });
    var page1Player = document.getElementById('page1-player');

    $(".again-Btn").on("touchend",function(){
        window.location.href="index.html?change=encodeURI("+3+")";
        page1Player.play();
    });
    $(".finish-Btn").on("touchend",function(){
        var dearText = $(".Dear-input").val();
        var youText = $(".You-input").val();
        if(dearText=="" || youText==""){
            $(".Warning").fadeIn(500).delay(1500).fadeOut(500);
        }else {
            var nowPage = sessionStorage.getItem("page");
            var rightPage = nowPage-2;
            window.location.href = "lastPage.php?she=encodeURI("+dearText+")&u=encodeURI("+youText+")&page=encodeURI("+rightPage+")";
        }
        page1Player.play();
    });

}