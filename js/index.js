$(function(){
	$('#nav-list a').click(function(e){

		var href = $(this).attr("href");
		var pos = $(href).offset().top;

		
   		$(this).parent('li')
      		.addClass("current")
      		.siblings().removeClass("current");

    	$("html,body").animate({scrollTop: pos}, 1000,function(){
			location.hash = href;
		});
		e.preventDefault();

	});

	$('p.more').click(function(e){
		$('div.more').toggleClass('collapse');
	});

    $(window).scroll(function(){

    	var toTop = $(document).scrollTop();

    	var pro1 = $('#works').offset().top,
    		pro2 = $('#doodles').offset().top,
    		pro3 = $('#skills').offset().top,
    		pro4 = $('#about').offset().top;

    	//deside witch is the current link
    	if(toTop < pro1){
    		$('#nav-list li').eq(0).addClass("current").siblings().removeClass("current");
    		location.hash = '#index';
    	}else if(toTop < pro2){
    		$('#nav-list li').eq(1).addClass("current").siblings().removeClass("current");
    		location.hash = '#works';
    	}else if(toTop < pro3){
    		$('#nav-list li').eq(2).addClass("current").siblings().removeClass("current");
    		location.hash = '#doodles';
    	}else if(toTop < pro4){
    		$('#nav-list li').eq(3).addClass("current").siblings().removeClass("current");
    		location.hash = '#skills';
    	}else{
    		$('#nav-list li').eq(4).addClass("current").siblings().removeClass("current");
    		location.hash = '#about';
    	}
    	
    });

});