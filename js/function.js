$(window).scroll(function(){
    var topScroll = $(this).scrollTop();
    
    if (topScroll > 90) {
        $('nav').addClass('shrink')
    }else {
        $('nav').removeClass('shrink')
    }
    
    $('.h-logo').css({
       'transform' : 'translate(0px, ' + topScroll / 2 + '%)' 
    });
    
    $('.big-word').css({
       'transform' : 'translate(0px, ' + topScroll / 2 + '%)' 
    });
    
    $('.sub-word').css({
       'transform' : 'translate(0px, ' + topScroll / 2 + '%)' 
    });
    
    $('.h-biere').css({
       'transform' : 'translate(0px, -' + topScroll / 26 + '%)' 
    });
    
});

$(document).ready(function(){

	  var header = $('header'),
			      btn    = $('button.toggle-nav');

	  btn.on('click', function(){
		    header.toggleClass('active');
	  });

});

