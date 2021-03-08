$(document).ready(function() {
   $(".scrollBtn").on("click", function (event) {
		event.preventDefault()
		let id  = $(this).attr('href'),
			 top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500)
  });
});