$(function (){

	$('.J_nav_btn').click(function() {
		var nav_min = $('.nav-min-lv1');
		if (nav_min.hasClass('open')) {
			nav_min.removeClass('open');
		} else {
			nav_min.addClass('open');
		}
	});

});