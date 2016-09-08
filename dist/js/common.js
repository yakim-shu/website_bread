// 《工具函式》 滑到某位置
function go(target){
    var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
    target = "."+target;
    $body.animate({
        scrollTop: $(target).offset().top-40
    }, 800);
}

// 商品列表 → 該類型
$(function(){

});


// 依按鈕 attr 跳至該位置 class
$(function(){
    var attr = "";
    $("a.move").on("click", function(){
        attr = $(this).attr("attr");
        go(attr);
    });
});

//《外掛》 - 圖集 (首頁大圖輪播) =============
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

//側選單顯示 主欄滑開 =======================
$(function(){

    //開關狀態
    var bMenuStatus = 0;

    // fn 選單開
    function fnNav_1Open(){
        bMenuStatus = 1;
        $(".menu_1").addClass("active");
        $(".nav_1_switch").addClass("active");
    }

    // fn 選單關
    function fnNav_1Close(){
        bMenuStatus = 0;
        $(".menu_1").removeClass("active");
        $(".nav_1_switch").removeClass("active");
    }

    // menu_1 ============
    $(".menu_1 li").on("click", function(){
        var iNum = $(this).index();
        var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
        $body.animate({
            scrollTop: $(".page").eq(iNum).offset().top-40
        }, 800);
        if( bMenuStatus === 1){fnNav_1Close()}
        return false;
    });


    //menu_1 fn 選單關
    $(".menu_1").on("click", function(){
        if( bMenuStatus === 1){fnNav_1Close()}
    });
    //點nav_1_switch fn 選單關
    $(".nav_1_switch").on("click", function(){
        console.log(bMenuStatus);
        if( bMenuStatus === 1){
            fnNav_1Close();
        }else {
            fnNav_1Open();
        }
    });

    //手機旋轉 fn 選單關
     $(window).on("orientationchange", function(){
        if( bMenuStatus === 1){fnNav_1Close()}
     });
})
