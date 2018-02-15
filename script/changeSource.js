$(window).scroll(function(){
  var height = $(window).scrollTop();
  
  
  var article2_object = $("#article2").offset().top + ( ( $("#article2").outerHeight() ) / 2 );
  var article2_window = $(window).scrollTop() + $(window).height();
  
  
    if (article2_window>article2_object) {
      $("#header_background").attr('src', "Joel.mp4");
    };
  
  
  
  
    var article3_object = $("#article3").offset().top + ( ( $("#article3").outerHeight() ) / 2 );
    var article3_window = $(window).scrollTop() + $(window).height();
 
  
  
 var alreadyOn3 = false;
 if not alreadyOn3{
    if (article3_window>article3_object) {
       var alreadyOn3 = true;
      $("#header_background").attr('src', "Pierre.mp4");
    };
  
 };
  
  
  
  
})
