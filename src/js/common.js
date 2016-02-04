// JavaScript Document

//scroll ============================================
$("html,body").animate({scrollTop: 0});

$(window).scroll(function(){
	$("nav>a").click(function() {
        if ($(this).hasClass("active")) return;
        var target = $(".sence").eq($(this).index());
        var position = target.offset().top - $(window).height() / 2 + target.outerHeight(true) / 2;
        $("html,body").stop().animate({
            scrollTop: position
        });
    });
    var st = $(window).scrollTop();
    var wh = $(window).height();
    var index = 0;
    $(".sence").each(function(i,element){
        if(st > $(".sence").eq(i).offset().top +$(".sence").eq(i).outerHeight(true) / 2 - wh ){
            index = i;
        }
    });
    $("nav>a").eq(index).addClass("active").siblings().removeClass("active");
}).scroll();




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
