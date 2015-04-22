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
	// 事件函数方式  
	$(window).scroll(function(e) {  
	    console.log($('body').css('scrollTop'));  
	}); 
	$('p.more').click(function(e){
		$('div.more').toggleClass('collapse');
	});

});