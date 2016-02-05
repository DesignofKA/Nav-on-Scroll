(function( $ ){
   $.fn.secondNav = function(newoptions) {
  var options = {
    enter: 'slideInDown',
    exit: 'slideOutUp',
    secondNav: '#second-nav',
    showPoint: 0,
		returnPoint: null,
  }

  $.extend( true, options, newoptions ); // This is used to insert newoptions on init into the options array.

  var secondNav = jQuery(options.secondNav);
  var topHeader = jQuery(this).offset().top;
  var height = jQuery(this).outerHeight();

	if(options.showPoint <= 0) {
		options.showPoint = topHeader + height;
	}

  jQuery(window).scroll(function () {

      if(jQuery(this).scrollTop() > (options.showPoint))
      {
          if (!secondNav.hasClass(options.enter))
          {
              secondNav.stop().addClass(options.enter).removeClass(options.exit).css('visibility', 'visible');
          }
      }
			// Function to add returnPoint functionality
      if((options.returnPoint) && (jQuery(this).scrollTop() < (options.returnPoint)))
      {
          secondNav.removeClass(options.enter).addClass(options.exit);
      }
      if((!options.returnPoint) && (jQuery(this).scrollTop() < (options.showPoint)))
      {
          secondNav.removeClass(options.enter).addClass(options.exit);
      }
  });
  };
})( jQuery );
