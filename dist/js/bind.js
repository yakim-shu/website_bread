$(function(){
	/*=======================getJSON=======================*/
	$.getJSON("js/data.json", function(json){
		var data = json;
		fnWork(data);

	});


	/*=======================專案=======================*/
	//fnWork----
	function fnWork(data){
		// -----------------------------------------

		var pic = "";
		var info = "";
		var item = "";
		var $allItem = "";


		// item ==========================
		for(var i=0; i<data.length; i++){

			var gallery = "";

			// [ string ] - 圖集
			for (var j=0; j<data[i]["gallery"].length; j++) {
				pic = '<a class="pic"><img src="images/'+ data[i].gallery[j] +'"/></a>';
				gallery += pic;
			}

			// [ string ] - 文字資訊
			info = '\
			<div class="c1">\
				<div class="gallery_2">\
					<div class="run">\
						<div class="inner">'+ gallery +'</div>\
					</div>\
				</div>\
				<p class="summary">'+ data[i].summary +'</p>\
			</div>\
			<div class="c2">\
				<div class="info">\
				    <h4>《 '+ data[i].title +' 》<span class="label">'+ data[i].tag +'</span></h4>\
				    <div class="list">\
				        <h5>價格</h5>\
				        <p>'+ data[i].pirce +'元</p>\
				    </div>\
				    <div class="list">\
				        <h5>內容物</h5>\
				        <p>'+ data[i].content +'</p>\
				    </div>\
				    <div class="list hidden_768">\
				        <h5>淨重</h5>\
				        <p>'+ data[i].weight +'</p>\
				    </div>\
				    <div class="list hidden_768">\
				        <h5>保存期限</h5>\
				        <p>'+ data[i].expiration +'</p>\
				    </div>\
				    <div class="list hidden_768">\
				        <h5>商品備註</h5>\
				        <p>'+ data[i].note +'</p>\
				    </div>\
				</div>\
				<div class="btn_box"><a href="javascript:;" attr="sence_5" class="btn move">我要訂購</a></div>\
			</div>';

			item = '<div class="item">' + info + "</div>";
			$allItem += item;
		}

		$(".sence_3 .inner").append($allItem);


		//《外掛》 - 圖集 (商品介紹) =============
	    if( $(".gallery_2 a.pic").length > 1){
	        var mySlider_1 = $(".gallery_2 .run .inner").bxSlider({
	            slideWidth:1000,
	            auto:true,
	            pause:3000,
	            autoDelay:3000,
	            pager:true,
	            mode:"horizontal",
	            randomStart:true,
	            onSliderLoad : function(){
	                $(".gallery_2").css({height:"auto"});
	                $(".gallery_2 .run .inner .item img").show();
	                $(".gallery_2 .bx-wrapper .bx-controls-direction").fadeIn("500");
	            }
	        });
	    }else {
	        $(".gallery_2").css({"height":"auto"});
	        $(this).find("img").show();
	    }

	    //商品內頁 → 我要訂購
	    $(".sence_3 .c2 a.btn").on("click", function(){
	        attr = $(this).attr("attr");
	        go(attr);
	    });



	}


});