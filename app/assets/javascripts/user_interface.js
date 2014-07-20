var ready;
ready = function() {
	$('#wrapper').fadeIn("slow");
	$('.bookSnippet').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).next('.notesContent').toggle();
	});
}

$(document).ready(ready);
$(document).on('page:load', ready);

