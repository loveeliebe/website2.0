var lastScroll = 0;
var minHeight = 25;

$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScroll && st > minHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
        $('#backTop').addClass('backShow');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
            $('#backTop').removeClass('backShow');
        }
    }
    st = lastScroll
});
