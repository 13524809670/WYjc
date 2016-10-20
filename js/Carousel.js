window.onload=function(){
	$('.pic_box li').eq(0).show();
	var num=0;
	var timer; 
	var fn=function(){
		$('.pic_box li').eq(num).stop().fadeOut(1000);
		num++;
		if(num>2){num=0;}
		$('.pic_box li').eq(num).stop().fadeIn(1000);
		$('.banner_btn li').eq(num).addClass('current').siblings('li').removeClass('current');
	}

	var fn1=function(){
		$('.pic_box li').eq(num).stop().fadeOut(1000);
		$(this).addClass('current').siblings('li').removeClass('current');
		var i=$(this).index();
		$('.pic_box li').eq(i).stop().fadeIn(1000);
		num=i;		
	}	
	//轮播间隔时间为 3s
	timer=setInterval(fn,1200);

	//当鼠标悬浮banner是  取消定时器
	$('.banner').hover(function(e) {
		clearInterval(timer);
	},

	//取消定时器 3s 后继续轮播 
	function(){
		clearInterval(timer);
		timer=setInterval(fn,1200)
	});

	$('.banner_btn li').click(fn1);
}