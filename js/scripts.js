$( document ).ready(function() {
    $('.top-posts ol:not(:first)').hide();
    $('.top-posts p').click(function() {
    	if ($(this).next('ol').is(":visible"))  {
    		return false;
    	} else {
    		$('.top-posts ol').slideUp();
    	}
    	$(this).next('ol').slideDown();
    	$('.top-posts p').removeClass('top-posts-open');
    	$(this).addClass('top-posts-open');
    })

    $('.mobile-nav-open').click(function() {
    	$(this).find('i').toggleClass('fa-bars fa-times');
    	$('.mobile-nav').slideToggle();
    })
});