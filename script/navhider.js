var lastScroll = 0;

$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScroll && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    st = lastScroll
});
