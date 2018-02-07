$(document).ready(function() {
    
    //Körs varje gång användaren skrollar
    $(window).scroll( function(){
    
        //Kollar var varje element med klassen .hideme ligger
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            //Om hela objektet är i användarens viewport, lägg till klass viewed för senare hantering av css
            if( bottom_of_window > bottom_of_object ){
               $(this).addClass('viewed')

            }
            
        }); 
    
    });
    
    //Lyssnar efter klick på pilen
    $("#landingSliceArrow").click(function() {
	    $('html, body').animate({
	    	//Skrolllar användarens viewport till valda elementet
	        scrollTop: $("#firstActualSlice").offset().top
	    }, 1750);
	});
});

//Väntar tills sidan laddats innan innehållet visas
$(window).on('load', function() {
	$('.content').addClass('pageLoaded');
});