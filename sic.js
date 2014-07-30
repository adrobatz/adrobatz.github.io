$(document).ready(function() {
	// Code here

	$('#dog').click(function(e) {
		e.preventDefault();
	
	$('html, body').animate({
            scrollTop: $('#h2-dog').offset().top
        }, 'slow');
    });
	$('#pig').click(function(e) {
		e.preventDefault();
	
	$('html, body').animate({
            scrollTop: $('#h2-pig').offset().top
        }, 'slow');
    });
	$('#cow').click(function(e) {
		e.preventDefault();
	
	$('html, body').animate({
            scrollTop: $('#h2-cow').offset().top
        }, 'slow');
    });
});

