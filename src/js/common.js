// JavaScript Document

//scroll ============================================
$(function(){
	$("html,body").animate({scrollTop: 0});

	$(window).scroll(function(){

		//nav=====================
	    var st = $(window).scrollTop();
	    var wh = $(window).height();
	    var index = 0;

		$("nav.menu_page a").click(function() {
	        if ($(this).hasClass("active")) return;
			var target = $(".sence").eq($(this).index());
	        var position = target.offset().top - $(window).height() / 2 + target.outerHeight(true) / 2 -150;
	        console.log(position);
	        $("html,body").stop().animate({
	            scrollTop: position
	        });
	    });
	    $(".sence").each(function(i,element){
	        if(st > $(".sence").eq(i).offset().top +$(".sence").eq(i).outerHeight(true) / 2 - wh ){
	            index = i;
	        }
	    });
	    $("nav.menu_page a").eq(index).addClass("active").siblings().removeClass("active");

	    //header=====================
	    if (st>100){
	    	$("header").addClass("active");
	    }else {
	    	$("header").removeClass("active");
	    }

	}).scroll();
});


// 進入商品內頁 ======================================
$(function(){
	var num = 0;
	$(".tab_content .part_pictxt_1 .item").on("click", function(){

		$(this).parent(".part_pictxt_1").prepend($(".main_work"));
		$(this).parent(".part_pictxt_1").find(".main_work").show();

		// scroll
		var target = $(".main_work").offset().top-50;
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: target}, 1000);
		// 輪播
		if ( num==0 ){
			$('.gallery_1 .run .inner').bxSlider({
				randomStart : true,  //亂數初始張
				mode : 'horizontal', //轉場效果
				auto : true,         //自動輪播
				pause : 3000,	 //單張停留時間
				adaptiveHeight: true,
				preloadImages : "all",
				slideWidth : 600
			});
		}
		num++;

	});
});


//tab ============================================
$(function(){
	$(".tab_menu li").eq(0).addClass("current");
	$(".tab_content .part_pictxt_1").hide().eq(0).show();

	$(".tab_menu li").on("click", function(){
		var iNo = $(".tab_menu li").index(this);
		$(".tab_menu li").removeClass("current").eq(iNo).addClass("current");
		$(".tab_content .part_pictxt_1").hide().eq(iNo).show();
	});


});


//輪播 ============================================
$(function(){

	$('.gallery_2 .run .inner').bxSlider({
		controls : false,
		adaptiveHeight: false,
		randomStart : true,  //亂數初始張
		mode : 'horizontal', //轉場效果
		auto : true,         //自動輪播
		pause : 5000,	 //單張停留時間
	});
});

// gototop 模組======================================
$(function(){
	var $goToTop = $(".gototop");
	var iScrollPointA = 0;  //回到某一個點
	var iScrollPointB = 150;  //滾到某一個點

	$(window).scroll(function(){
		if( $(window).scrollTop() > iScrollPointB) {
			$goToTop.show();
		} else {
			$goToTop.hide();
		}
	});

	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 1000);
		return false;
	});
//---
});
