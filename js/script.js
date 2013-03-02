
$(document).ready(function(){
	console.log('jquery loaded.');

	var tabTimeout;

	$('#horizontal-tabs ul li').mouseenter(function(){

		var $id = $(this).attr('id');
		var $contentDiv = $('#' + $id + '_content');

		var $docWidth = $(document).width();
		var leftMargin = 0.17 * $docWidth;			// Left margin is 17% of page width
		var contentDivWidth = 0.60 * $docWidth;		// Total width is 60% of page width

		$contentDiv
			.removeClass('hide')
			.addClass('horizontal-tab-content-show')
			.css('width', contentDivWidth)
			.css('margin-left', leftMargin);
	});

	$('#horizontal-tabs ul li').mouseleave(function(){

		var $id = $(this).attr('id');
		var $contentDiv = $('#' + $id + '_content');

		tabTimeout = setTimeout(
			function(){
				$contentDiv
					.removeClass('horizontal-tab-content-show')
					.addClass('hide');
				}, 
			300);
	});

	
	$('#horizontal-tabs #contents div').mouseenter(function(){
		clearTimeout(tabTimeout);
	});

	$('#horizontal-tabs #contents div').mouseleave(function(){
		$(this)
			.removeClass('horizontal-tab-content-show')
			.addClass('hide');
	});

});

