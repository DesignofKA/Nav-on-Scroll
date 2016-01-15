(function( $ ){
   $.fn.secondNav = function(newoptions) {
  var options = {
    enter: 'slideInDown',
    exit: 'slideOutUp',
    secondNav: '#second-nav'
  }
  $.extend( true, options, newoptions );

  var secondNav = jQuery(options.secondNav);
  var topHeader = jQuery(this).offset().top;
  var height = jQuery(this).outerHeight();

  secondNav.addClass('animated animated-hold');
  // if(options.showMobile == true) {
  //   secondNav.addClass('noMobile');
  // }

  jQuery(window).scroll(function () {

      if(jQuery(this).scrollTop() > (topHeader + height))
      {
          if (!secondNav.hasClass(options.enter))
          {
              secondNav.stop().addClass(options.enter).removeClass(options.exit).removeClass('animated-hold');
          }
      }
      else
      {
          secondNav.removeClass(options.enter).addClass(options.exit);
      }
  });
  };
})( jQuery );
