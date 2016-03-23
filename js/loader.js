$(window).load(function() {
	$('.loader').fadeOut();
	$('body').css('overflow-y', 'scroll');

	$('.navbar-right a').on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		var tag = $(href);
		$('html, body').animate({ scrollTop: tag.offset().top }, 'slow');
	});
});