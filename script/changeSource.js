$(window).scroll(function(){
  var height = $(window).scrollTop();
  var lastChecked = 0;
  
  var article2_object = $("#article2").offset().top + ( ( $("#article2").outerHeight() ) / 2 );
  var article2_window = $(window).scrollTop() + $(window).height();
  
  
    if (article2_window>article2_object && lastChecked != 2) {
      $("#header_background").attr('src', "Joel.mp4");
      lastChecked = 2;
    };
  
  
  
  
    var article3_object = $("#article3").offset().top + ( ( $("#article3").outerHeight() ) / 2 );
    var article3_window = $(window).scrollTop() + $(window).height();
 
  

    if (article3_window>article3_object && lastChecked != 3) {
      $("#header_background").attr('src', "Pierre.mp4");
      lastChecked = 3;
    };
  
 
});


