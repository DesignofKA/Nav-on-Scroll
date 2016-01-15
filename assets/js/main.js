jQuery(window).scroll(function () {

    if(jQuery(this).scrollTop() > 400)
    {
        if (!jQuery('.nav').hasClass('slideInDown'))
        {
            jQuery('.nav').stop().addClass('slideInDown').removeClass('slideOutUp animated-hold');
        }
    }
    else
    {
        jQuery('.nav').removeClass('slideInDown').addClass('slideOutUp');
    }
});
