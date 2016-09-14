$(function(){
	/*=======================getJSON=======================*/
	$.getJSON("js/data.json", function(json){
		var data = json;
		// fnWork(data);
		// 商品列表 → 商品內頁
	    $(".sence_2 .part_pictxt_1 a.item").on("click", function(){
	        $(".sence_3").css({"height":"auto","opacity":"1"});
	        var index = $(this).index();
	        console.log(index);
	    	fnWork(data, index);
	    });

	});


	/*=======================專案=======================*/
	//fnWork----
	function fnWork(data, index){
		// -----------------------------------------

		$(".sence_3 .inner .item").remove();

		var pic = "";
		var info = "";
		var item = "";
		var $allItem = "";
		var arrType = ["經典菜單", "歐式手感", "吐司"];
		var arrType_eng = ["Classic", "Artisan Bread", "Toast"];

		type = arrType[index];
		currentData = data[type];

		$(".sence_3 .inner .title_1 h3").text(type);
		$(".sence_3 .inner .title_1 span").text(arrType_eng[index]);

		// item ==========================
		for(var i=0; i<currentData.length; i++){

			var gallery = "";

			// [ string ] - 圖集
			for (var j=0; j<currentData[i]["gallery"].length; j++) {
				if (currentData[i]["gallery"][j] == ""){
				}else {
					pic = '<a class="pic"><img src="images/'+ currentData[i].gallery[j] +'"/></a>';
					gallery += pic;
				}
			}
			// [ string ] - 文字資訊
			info = '\
			<div class="c1">\
				<div class="gallery_2">\
					<div class="run">\
						<div class="inner">'+ gallery +'</div>\
					</div>\
				</div>\
				<p class="summary">'+ currentData[i].summary +'</p>\
			</div>\
			<div class="c2">\
				<div class="info">\
				    <h4>《 '+ currentData[i].title +' 》<span class="label">'+ currentData[i].tag +'</span></h4>\
				    <div class="list">\
				        <h5>價格</h5>\
				        <p>'+ currentData[i].pirce +'元</p>\
				    </div>\
				    <div class="list">\
				        <h5>內容物</h5>\
				        <p>'+ currentData[i].content +'</p>\
				    </div>\
				    <div class="list hidden_768">\
				        <h5>淨重</h5>\
				        <p>'+ currentData[i].weight +'</p>\
				    </div>\
				    <div class="list hidden_768">\
				        <h5>保存期限</h5>\
				        <p>'+ currentData[i].expiration +'</p>\
				    </div>\
				    <div class="list hidden_768">\
				        <h5>商品備註</h5>\
				        <p>'+ currentData[i].note +'</p>\
				    </div>\
				</div>\
				<div class="btn_box"><a href="javascript:;" class="btn">我要訂購</a></div>\
			</div>';

			item = '<div class="item">' + info + "</div>";
			$allItem += item;
		}

		$(".sence_3 .inner").append($allItem);


		//《外掛》 - 圖集 (商品介紹) =============
		$(".gallery_2").each(function(i){
			if( $(this).find("a.pic").length > 0 ){
				$(this).find(".run .inner").bxSlider({
		            slideWidth:1000,
		            auto:true,
		            pause:3000,
		            autoDelay:3000,
		            pager:true,
		            mode:"horizontal",
		            randomStart:true,
		            onSliderLoad : function(){
		                $(this).css({height:"auto"});
		                $(this).find(".run .inner .item img").show();
		                $(this).find(".bx-wrapper .bx-controls-direction").fadeIn("500");
		            }
		        });
			}
		});

		// 我要訂購 - 跳 lightbox
	    $(".sence_3 a.btn").on("click", function(){
	        $(".light_box").css({"display":"flex","opacity":"1"});
	    });
	    $(".light_box .btn_close").on("click", function(){
	        $(".light_box").fadeOut("fast");
	    });

	}


});