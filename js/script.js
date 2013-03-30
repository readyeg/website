
$(document).ready(function(){
	console.log('jquery loaded.');

	var tabTimeout;
	var navButtonPressColor = '#E0642f';
	var $activeNavButton;

	$('#horizontal-tabs ul li').mouseenter(function(){

		var id = $(this).attr('id');
		var $contentDiv = $('#' + id + '_content');

		var docWidth = $(document).width();
		var contentDivWidth = 0.20 * docWidth;		
		var mainContentWidth = $('#main_container').width();

		var emptySpace = (docWidth - mainContentWidth) / 2;		// Unused space on either side of the contents

		var leftMargin = $(this).offset().left - emptySpace - 5;	// '5' to adjust, may change as style changes...

		$activeNavButton = $(this);
		$activeNavButton.css('background-color', navButtonPressColor);

		$contentDiv
			.removeClass('hide')
			.addClass('horizontal-tab-content-show')
			.css('width', contentDivWidth)
			.css('margin-left', leftMargin);
	});

	$('#horizontal-tabs ul li').mouseleave(function(){

		var id = $(this).attr('id');
		var $contentDiv = $('#' + id + '_content');

		$activeNavButton.css('background-color', '');

		tabTimeout = setTimeout(
			function(){
				$contentDiv
					.removeClass('horizontal-tab-content-show')
					.addClass('hide');
				}, 
			10);
	});
	
	$('#horizontal-tabs #horizontal-navigation-bar-contents div').mouseenter(function(){
		$activeNavButton.css('background-color', navButtonPressColor);
		clearTimeout(tabTimeout);
	});

	$('#horizontal-tabs #horizontal-navigation-bar-contents div').mouseleave(function(){
		$activeNavButton.css('background-color', '');
		$(this)
			.removeClass('horizontal-tab-content-show')
			.addClass('hide');
	});

	$('#big_buttons div').click(function(){

		var btn_id = $(this).attr('id');
		var disp_id = btn_id + '_display';
		var $img = $(this).find('img');
		var $disp = $('#' + disp_id);
		var siblings = $(this).siblings('div');		// Rest of the buttons

		$img.removeClass('big_button_unpressed');
		$img.addClass('big_button_pressed');
		$disp.removeClass('hide');
		
		for(var i = 0; i < siblings.length; i++){

			var sib_btn_id = siblings[i].id;
			var sib_disp_id = sib_btn_id + '_display';

			var $sib_btn = $('#' + sib_btn_id);
			var $sib_disp = $('#' + sib_disp_id);

			if(sib_btn_id != btn_id) {
				$sib_btn.find('img').removeClass('big_button_pressed');
				$sib_btn.find('img').addClass('big_button_unpressed');
				$sib_disp.addClass('hide');
			}
		}

	});

/*
	$('#horizontal-navigation-bar-contents div p').hover(function(){
		$(this).addClass('font-weight-bold');
	});
	*/

});

