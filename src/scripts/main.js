(function($){
	$('.shape').hover(function(e){
		$("#shape-description").html(e.target.dataset.message).css("color", "#fbd");
	}, function(e){
		$("#shape-description").html("<h4>Hover over shapes to see what they mean.</h4>").css("color", "#9ea");
	});
})(jQuery);
