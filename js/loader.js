$(window).load(function() {
	console.log('loading...');
	console.log('loaded');
	$('.loader').fadeOut();

	$('.navbar-right a').on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		var tag = $(href);
		$('html, body').animate({ scrollTop: tag.offset().top }, 'slow');
	});
});