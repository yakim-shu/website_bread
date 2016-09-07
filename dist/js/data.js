// data.js
$(function(){
	var gallery = "";
	var info = "";
	var a = "黑";



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
		    <h4>'+ a +'<span class="label">'+ a +'</span></h4>\
		    <div class="list">\
		        <h5>'+ a +'</h5>\
		        <p>'+ a +'</p>\
		    </div>\
		    <div class="list">\
		        <h5>'+ a +'</h5>\
		        <p>'+ a +'</p>\
		    </div>\
		    <div class="list hidden_768">\
		        <h5>'+ a +'</h5>\
		        <p>'+ a +'</p>\
		    </div>\
		    <div class="list hidden_768">\
		        <h5>'+ a +'</h5>\
		        <p>'+ a +'</p>\
		    </div>\
		    <div class="list hidden_768">\
		        <h5>'+ a +'</h5>\
		        <p>'+ a +'</p>\
		    </div>\
		</div>\
		<div class="btn_box"><a href="javascript:;" attr="sence_5" class="btn">我要訂購</a></div>\
	</div>';

	console.log(info);
});
