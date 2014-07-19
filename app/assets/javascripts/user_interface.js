var ready;
ready = function() {
	$('#wrapper').fadeIn("slow");
}

$(document).ready(ready);
$(document).on('page:load', ready);