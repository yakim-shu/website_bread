$(function(){
	/*=======================getJSON=======================*/
	$.getJSON("js/data.json", function(json){
		alert("ddd");
		alert(json);
		var data = json;

		fnWork(data);

	});


	/*=======================專案=======================*/
	//fnWork----
	function fnWork(data){
		// -----------------------------------------
		var gallery = "";
		var info = "";
		var a = "黑";
		var item = '<div class="item">';

		for(var i=0; i<data.length; i++){
			alert(data.length);

			// string - 圖集
			gallery = '\
			<div class="c1">\
				<div class="gallery_2">\
					<div class="run">\
						<div class="inner">\
							<a class="pic"><img src="images/'+ a +'"/></a>\
						</div>\
					</div>\
				</div>\
				<p class="summary">'+ a +'</p>\
			</div>';

			// string - 文字資訊
			info = '\
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
				<div class="btn_box"><a href="javascript:;" attr="sence_5" class="btn">我要訂購</a></div>\
			</div>';
		}
	};




});