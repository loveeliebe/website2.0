

$(window).scroll(function(){
  var height = $(window).scrollTop();
  
  var article2_object = $("#article2").offset().top + ( ( $("#article2").outerHeight() ) / 2 );
  var viewport = $(window).scrollTop() + $(window).height();
  
  
    if (viewport>article2_object) {
      $("#header_background").attr('src', "Joel.mp4");
    };
  
  
  
 
    var article3_object = $("#article3").offset().top + ( ( $("#article3").outerHeight() ) / 2 );
    
 
    if (viewport>article3_object) {
      $("#header_background").attr('src', "Pierre.mp4");
    };
  

});

