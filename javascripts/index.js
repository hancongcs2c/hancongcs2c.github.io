$(function(){
//	if($('section').hasClass('all'))
//		$('.all').load('all.html');
	var height = $(window).height();
	$('#index-nav li a').hover(function(e){
		var $thisLink = $(this);
		if($thisLink.attr('href').match('undefined')!='undefined'){
			$thisLink.parent('li').addClass('scale1').addClass('transition').mouseout(function(e){
				$thisLink.parent('li').removeClass('scale1');
			});
		}
	});
	$('aside ul li').hover(function(e){
		var $thisLink = $(this);
		$thisLink.addClass('transition').addClass('current').mouseout(function(e){
				$thisLink.removeClass('current');
		});
	});
	resetSize();
	$('#toggle-screen').click(function(e){
		e.preventDefault();
		$(document).toggleFullScreen(function(e){resetSize();});
	});
	
	$(window).resize(function(e){
		resetSize();
	});

	$('.page').addClass('transition');

	//页面间跳转
	$('#to-home').click(function(e){
		e.preventDefault();
		$('#home').fadeIn().addClass('animate1');
		$('#home').siblings('.page').fadeOut(100);
		$('aside,#to-home').fadeOut(0);
	});
	$('.li-works').click(function(e){
		$('aside').fadeIn().addClass('animate2');
		$('#works').fadeIn().addClass('animate1');
		$('#to-home').fadeIn().addClass('animate2');
		$('.a-works').parent('li').addClass('current').siblings('li').removeClass('current');
	});
	
	//pics
	var totalWidth=0;
	var picWidth=0;
	$('.album>div').each(function(e){
		var $thisDiv = $(this);
		picWidth = $thisDiv.find('img').width();
		$thisDiv.css('width',picWidth);
		totalWidth += picWidth;
	});
	$('#pics,#pics section').css('width',totalWidth);
});

function resetSize(){
	height = $(window).height();
	$('.page,.home>section,.wrapper').css('height',height);
	$('.album>div').each(function(e){
		var $thisDiv = $(this);
		picWidth = $thisDiv.find('img').width();
		$thisDiv.css('width',picWidth);
	});
}
