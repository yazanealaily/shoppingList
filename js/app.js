$(document).ready(function(){
	
	$(":text").keydown(function(e){
		if(e.which === 13) {
			$(".regP").prepend("<li class='listItem'><label><input type='checkbox' class='checkbox'>"+ $(this).val() + "</label><span>&#9734</span></li>").animate("slow");
			$(":text").attr("placeholder", "[ Type item to be added to the list and press Enter ]"); //not working
		};		
	});

	$("body").on("click", ".listItem", function(){
		if($(":checkbox").is(":checked")){ 
			$(this).fadeOut(300, function(){
				$(this).remove()
			});
		};
	});

	$("body").on("click", "span", function(){
		targetItem = $(this).parent();
		$(this).parent().append("<span>&#9733</span>");
		$(this).remove();
		$(".highP").prepend(targetItem);
	});

});