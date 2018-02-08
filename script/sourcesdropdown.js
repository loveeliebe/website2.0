function main() {
  $('.sources').hide();
  
  $('.sources-button').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Sources Viewed');
	});
}

$(document).ready(main);
