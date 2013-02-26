
$(document).ready(function(){
	console.log('jquery loaded.');

	$('#horizontal-tabs ul li').mouseover(function(){

		var $id = $(this).attr('id');
		var $contentDiv = $('#' + $id + '_content');

		$contentDiv
			.removeClass('horizontal-tab-content-hide')
			.addClass('horizontal-tab-content-show');
	});

	$('#horizontal-tabs ul li').mouseout(function(){

		var $id = $(this).attr('id');
		var $contentDiv = $('#' + $id + '_content');

		$contentDiv
			.removeClass('horizontal-tab-content-show')
			.addClass('horizontal-tab-content-hide');
	});
});

