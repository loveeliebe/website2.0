var lastChecked = 0;

$(window).scroll(function(){
  var height = $(window).scrollTop();
  
  var article2_object = $("#article2").offset().top + ( ( $("#article2").outerHeight() ) / 2 );
  var viewport = $(window).scrollTop() + $(window).height();
  
  
    if (viewport>article2_object && lastChecked != 2 && article3_object>viewport) {
      console.log(2);
      $("#header_background").attr('src', "Joel.mp4");
      lastChecked = 2;
    };
  
  
  
  
    var article3_object = $("#article3").offset().top + ( ( $("#article3").outerHeight() ) / 2 );
    
 
  

    if (viewport>article3_object && lastChecked != 3 && article2_object>viewport) {
      console.log(3);
      $("#header_background").attr('src', "Pierre.mp4");
      lastChecked = 3;
    };
  
 lastChecked = 0;
});


