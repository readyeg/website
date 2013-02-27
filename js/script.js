
$(document).ready(function(){
	console.log('jquery loaded.');

	var tabTimeout;

	$('#horizontal-tabs ul li').mouseenter(function(){

		var $id = $(this).attr('id');
		var $contentDiv = $('#' + $id + '_content');

		$contentDiv
			.removeClass('horizontal-tab-content-hide')
			.addClass('horizontal-tab-content-show');
	});

	$('#horizontal-tabs ul li').mouseleave(function(){

		var $id = $(this).attr('id');
		var $contentDiv = $('#' + $id + '_content');

		tabTimeout = setTimeout(
			function(){
				$contentDiv
					.removeClass('horizontal-tab-content-show')
					.addClass('horizontal-tab-content-hide');
				}, 
			300);
	});


	$('#about_us_content').mouseenter(function(){
		clearTimeout(tabTimeout);
	});

	$('#about_us_content').mouseleave(function(){
		$(this)
			.removeClass('horizontal-tab-content-show')
			.addClass('horizontal-tab-content-hide');
	});

	$('#college_applications_content').mouseenter(function(){
		clearTimeout(tabTimeout);
	});

	$('#college_applications_content').mouseleave(function(){
		$(this)
			.removeClass('horizontal-tab-content-show')
			.addClass('horizontal-tab-content-hide');
	});

	$('#early_guidance_content').mouseenter(function(){
		clearTimeout(tabTimeout);
	});

	$('#early_guidance_content').mouseleave(function(){
		$(this)
			.removeClass('horizontal-tab-content-show')
			.addClass('horizontal-tab-content-hide');
	});

	$('#success_stories_content').mouseenter(function(){
		clearTimeout(tabTimeout);
	});

	$('#success_stories_content').mouseleave(function(){
		$(this)
			.removeClass('horizontal-tab-content-show')
			.addClass('horizontal-tab-content-hide');
	});

	$('#admission_resources_content').mouseenter(function(){
		clearTimeout(tabTimeout);
	});

	$('#admission_resources_content').mouseleave(function(){
		$(this)
			.removeClass('horizontal-tab-content-show')
			.addClass('horizontal-tab-content-hide');
	});

});

