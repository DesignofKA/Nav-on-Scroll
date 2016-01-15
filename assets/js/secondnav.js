(function( $ ){
   $.fn.secondNav = function(newoptions) {
  var options = {
    enter: 'slideInDown',
    exit: 'slideOutUp',
    secondNav: '#second-nav',
		holdClass: '.animated-hold',
  }

  $.extend( true, options, newoptions ); // This is used to insert newoptions on init into the options array.

  var secondNav = jQuery(options.secondNav);
  var topHeader = jQuery(this).offset().top;
  var height = jQuery(this).outerHeight();

  secondNav.addClass('animated animated-hold');

  jQuery(window).scroll(function () {

      if(jQuery(this).scrollTop() > (topHeader + height))
      {
          if (!secondNav.hasClass(options.enter))
          {
              secondNav.stop().addClass(options.enter).removeClass(options.exit).removeClass(options.holdClass);
          }
      }
      else
      {
          secondNav.removeClass(options.enter).addClass(options.exit);
      }
  });
  };
})( jQuery );
