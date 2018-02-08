$(window).scroll(function(){
  var height = $(window).scrollTop();
  
  
  var article2_object = $("#article2").offset().top + ( ( $("#article2").outerHeight() ) / 2 );
  var article2_window = $(window).scrollTop() + $(window).height();
  
  
    if (article2_window>article2_object) {
      $("#header_background").attr('src', "Joel.mp4");
    };
  
})
