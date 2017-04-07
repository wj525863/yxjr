$(document).ready(function(){

	$(".banner10").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
	},function(){
		$("#btn_prev,#btn_next").fadeOut()
	});
	
	$dragBln = false;
	
	$(".banner_img").touchSlider({
		flexible : true,
		speed : 400,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".point a"),
		counter : function (e){
			$(".point a").removeClass("on").eq(e.current-1).addClass("on");//图片顺序点切换
			$(".banner_font h1").hide().eq(e.current-1).show();//图片文字切换
		}
	});
	
	$(".banner_img").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".banner_img").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".banner_img a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next").click();
	}, 5000);
	
	$(".banner10").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		},5000);
	});
	
	$(".banner_img").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 5000);
	});
});