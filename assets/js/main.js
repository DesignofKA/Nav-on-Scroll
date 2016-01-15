(function( $ ){
   $.fn.secondNav = function(newoptions) {
  var options = {
    enter: 'slideInDown',
    exit: 'slideOutUp',
  }
  $.extend( true, options, newoptions );

  var topHeader = jQuery(this).offset().top;
  var height = jQuery(this).outerHeight();

  jQuery(window).scroll(function () {

      if(jQuery(this).scrollTop() > (topHeader + height))
      {
          if (!jQuery('.second-nav').hasClass(options.enter))
          {
              jQuery('.second-nav').stop().addClass(options.enter).removeClass(options.exit).removeClass('animated-hold');
          }
      }
      else
      {
          jQuery('.second-nav').removeClass(options.enter).addClass(options.exit);
      }
  });
  };
})( jQuery );
