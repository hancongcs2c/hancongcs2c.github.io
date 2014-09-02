$(function(){
//	if($('section').hasClass('all'))
//		$('.all').load('all.html');
	$('#index-nav li a').hover(function(e){
		var $thisLink = $(this);
		if($thisLink.attr('href').match('undefined')!='undefined'){
			$thisLink.addClass('scale1').addClass('transition').mouseout(function(e){
				$(this).removeClass('scale1');
			});
		}
	});
})

