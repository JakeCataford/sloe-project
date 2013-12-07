//Simple Button to allow lazy users to click and go to next section


function Next(){
	
	$('.UD').bind('click.smoothscroll',function (e) {
	    e.preventDefault();

	    var target = this.next(),
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-1500
	    }, 900, 'swing', function () {
	        window.location = target;
	    });
	});	
	
}
