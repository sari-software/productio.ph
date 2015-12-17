
$(document).ready( function() {


	$("li.menu-item a").click( function() {
		$("li.menu-item").removeClass("active");
		$(this).parent(".menu-item").addClass("active");
	});

});
