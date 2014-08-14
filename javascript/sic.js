$(document).ready(function() {
	// Code here
	$('#slide-nav a').click(function(e) {
		e.preventDefault();
		var id=$(this).data('id');

		//$.get(id+'.html', function(data) {
		//	$('div#slideshow').html(data);
		//});
	});

	$('nav a').click(function(e) {
		e.preventDefault();
		var adj = $(this).data('adj');
	
		$('html, body').animate({
	            scrollTop: $('#'+adj).offset().top
	        }, 'slow');
    });
});

