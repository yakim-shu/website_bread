// 《工具函式》 滑到某位置 ============================================
function go(target){
    var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
    target = "."+target;
    $body.animate({
        scrollTop: $(target).offset().top-40
    }, 800);
}

// google-map ============================================
$(function(){
    var stylesArray = [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ffaa00"},{"saturation":"-33"},{"lightness":"10"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"}]}];

  $('.map_google').tinyMap({
    center : "25.056130, 121.558937", //地圖中心，經緯度或地址
    zoom : 16, //地圖縮放
    draggable : false, //拖拉要鎖住，避免手機操作亂移
    styles : stylesArray,
    marker : [ //地點標示
            {
            'addr':"25.056130, 121.558937", //地點，經緯度或地址
            icon: {
                // 圖示網址
                url: 'https://yakim-shu.github.io/website_bread/images/icon_map.png',
                // 縮放尺寸
                scaledSize: [110, 75]
            },
            'title': '有間麵包店',    //hover標題
            'text':"<b>有間麵包店</b><br/>台北市松山區延壽街356巷四弄二號" //對話泡訊息
            }
        ]
    });
});


//scroll ============================================
$(function(){
    $("html,body").animate({scrollTop: 0});

    $(window).scroll(function(){

        //nav=====================
        var st = $(window).scrollTop();
        var wh = $(window).height();
        var index;

        setTimeout(function(){
            var current = 0;
            $(".page").each(function(i,element){
                if(st > $(".page").eq(i).offset().top -100 ){
                    current = i;
                    $(".menu_1 a").eq(current)
                .addClass("active")
                .parent("li").siblings().find("a").removeClass("active");
                }
            });
        }, 400);
    });

    }).scroll();

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
