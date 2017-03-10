<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
    <meta name="x5-fullscreen" content="true">
    <meta name="full-screen" content="yes">
    <title>Lorna Jane</title>
    <link rel="stylesheet" href="css/lastPage.css">
    <script>
        var fontSize = parseInt(document.documentElement.clientWidth)/10;
        document.querySelector("html").style.fontSize = fontSize+"px";
    </script>
</head>
<body>
    <div class="Page-bg">
        <img src="img/bg1.jpg" alt="">
    </div>
    <div class="main-bg">
        <div class="Dear-box">
            <span class="Dear-text">亲爱的 </span>
        </div>
        <div class="You-box">
            <span class="You-text">你的 </span>
        </div>

        <div class="play-Again">
            <img src="img/page1/playBtn.png" alt="">
        </div>
        <div class="show-To">
            <img src="img/page1/showtoBtn.png" alt="">
        </div>
        <div class="get-Gift">
            <img src="img/page1/giftBtn.png" alt="">
        </div>

        <div class="play-Too">
            <img src="img/page1/playToo.png" alt="">
        </div>
        <div class="have-Gift">
            <img src="img/page1/haveGift.png" alt="">
        </div>

    </div>

    <div class="code">
        <img class="code-img" src="img/page1/code.png" alt="">
        <div class="close-Btn">
            <img src="img/page1/close.png" alt="">
        </div>
    </div>

    <div class="cover">
        <div class="share-img"></div>
    </div>
    <audio id="lastpage-player" src="music/click.mp3"></audio>
</body>
<script src="js/jquery.min.js"></script>
<script>

    var url = window.location.href;
//    var nowPage = sessionStorage.getItem("page");
    var codePage = decodeURI(url.split("?")[1].split("&")[2].split("=")[1]);
    var nowPage = codePage.split("(")[1].split(")")[0];
    console.info(nowPage+"111");

    $(".main-bg").css({
        "background":"url(img/page1/Tpage"+nowPage+".png) no-repeat",
        "background-size":"100% 100%"
    });
    var she=decodeURI(url.split("?")[1].split("&")[0].split("=")[1]);
    var u=decodeURI(url.split("?")[1].split("&")[1].split("=")[1]);
    var dearText = she.split("(")[1].split(")")[0];
    var youText = u.split("(")[1].split(")")[0];
    $(".Dear-text").append(dearText);
    $(".You-text").append(youText);

</script>
<script src="js/lastPage.js"></script>
<!--WeChat====================================================== -->
<?php include_once 'weChat/weChatShareJS.php'; ?>
</html>