
$(document).ready(function(){
	console.log('jquery loaded.');

	var tabTimeout;
	var navButtonPressColor = '#E0642f';
	var $activeNavButton;

	$('#horizontal-tabs ul li').mouseenter(function(){

		var $id = $(this).attr('id');
		var $contentDiv = $('#' + $id + '_content');

		var $docWidth = $(document).width();
		var leftMargin = $(this).offset().left - 6;			
		var contentDivWidth = 0.20 * $docWidth;		

		$activeNavButton = $(this);
		$activeNavButton.css('background-color', navButtonPressColor);

		$contentDiv
			.removeClass('hide')
			.addClass('horizontal-tab-content-show')
			.css('width', contentDivWidth)
			.css('margin-left', leftMargin);
	});

	$('#horizontal-tabs ul li').mouseleave(function(){

		var $id = $(this).attr('id');
		var $contentDiv = $('#' + $id + '_content');

		$activeNavButton.css('background-color', '');

		tabTimeout = setTimeout(
			function(){
				$contentDiv
					.removeClass('horizontal-tab-content-show')
					.addClass('hide');
				}, 
			10);
	});
	
	$('#horizontal-tabs #contents div').mouseenter(function(){
		$activeNavButton.css('background-color', navButtonPressColor);
		clearTimeout(tabTimeout);
	});

	$('#horizontal-tabs #contents div').mouseleave(function(){
		$activeNavButton.css('background-color', '');
		$(this)
			.removeClass('horizontal-tab-content-show')
			.addClass('hide');
	});

});

