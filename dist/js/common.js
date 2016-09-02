$(function() {
    $('.gallery_1').vegas({
        slides: [
            { src: 'images/pic_pc_1.png' },
            { src: 'images/pic_pc_2.jpg' },
            { src: 'images/pic_pc_3.jpg' }
        ],

        align: "center",
        valign: "center",
        cover: "true",
        preload: "true",
        overlay: '../lib/jquery.vegas/overlays/05.png'
    });
});

//《外掛》 - 圖集 =============
$(function(){

    if( $(".gallery_2 a.pic").length > 1){
        var mySlider_1 = $(".gallery_2 .run .inner").bxSlider({
            slideWidth:1000,
            auto:true,
            pause:3000,
            autoDelay:3000,
            pager:false,
            mode:"fade",
            randomStart:true,
            onSliderLoad : function(){
                // $(".gallery_2").css({height:"auto"});
                // $(".gallery_2 .run .inner .item img").show();
                // $(".gallery_2 .bx-wrapper .bx-controls-direction").fadeIn("5000");
            }
        });
    }else {
        $(".gallery_2").css({"height":"auto"});
        $(this).find("img").show();
    }


});


//側選單顯示 主欄滑開 =======================
$(function(){

    //開關狀態
    var bMenuStatus = 0;

    //覆蓋
    $(".wrapper").after( '<div class="wrapper_overlap"></div>' );


    // fn 選單開
    function fnNav_1Open(){
        bMenuStatus = 1;
        $(".wrapper_box").css({"overflow":"hidden"});
        $(".wrapper, .header").addClass("active");
        $(".menu_1").fadeIn("fast");
        $(".wrapper_overlap").fadeIn(200,function(){
            $(this).css({"opacity":"0.6"});
        });
        $(".nav_1_switch").addClass("active");
    }


    // fn 選單關
    function fnNav_1Close(){
        menuStatus = 0;
        $(".wrapper_box").css({"overflow":"visible"});
        $(".wrapper, .header").removeClass("active");
        $(".menu_1").fadeOut(100);
        $(".wrapper_overlap").fadeOut(50,function(){
            $(this).css({"opacity":"0"});
        });
        $(".nav_1_switch").removeClass("active");
    }


    //點開按鈕 fn 選單開
    $(".nav_1_switch").on("click", fnNav_1Open);

    //點side_overlap fn 選單關
    $(".wrapper_overlap").on("click", function(){
        if( bMenuStatus === 1){fnNav_1Close()}
    });

    //手機旋轉 fn 選單關
     $(window).on("orientationchange", function(){
        if( bMenuStatus === 1){fnNav_1Close()}
     });
})
