// JavaScript Document
//scroll 按鈕跑出來============================================
$(function(){

	/*說明:
	把各場景區間存入陣列值，再比較視窗位置*/

	var iWinScrollT;
	var $Sence = $(".wrapper .sence");
	var iSenceOffset;
	var myArray = [];
	var aa;
	var iSenceH = $(".sence").outerHeight();

	//存入各場景位置
	function fnSenceArray(){
		myArray = [];
		$(".wrapper .sence").each(function(){
			myArray.push( $(this).offset().top-300 )
		})
	}
	fnSenceArray();

	//初始======================================================
	iSenceOffset =$Sence.eq(1).offset().top;

	function fnScroll(){
		$(".scroll").fadeIn();
		$(".scroll").one("click" , function(){
			var body = $("html, body");
			body.stop().animate({scrollTop:iSenceOffset}, 1000)
		})
		console.log("a");
	}
	fnScroll();

	//scroll 開始======================================================
	$(window).on("scroll", function(){

		iWinScrollT = $(window).scrollTop();
		setTimeout(function(){
			//計算位置-----------------------
			for(var i=0; i<myArray.length; i++){
				var y=i+1;
				//位於場景區間
				if( iWinScrollT > myArray[i] && iWinScrollT < myArray[y] ){
					iSenceOffset =  myArray[y]+300;
					fnScroll()
				}
				//還沒到第一張時
				else if( i==0 && iWinScrollT < myArray[i] ){
				}
				//到最後一張時
				else if( y==myArray.length && iWinScrollT > myArray[i] ){
				}
			}

		},50)

	});

	//視窗改變 執行計算位置
	$(window).on("resize", fnSenceArray);

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
		};
	});

	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 1000);
		return false;
	});
//---
});
