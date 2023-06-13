$(document).ready(function(){
	$("#botao").click(function(){
	
		$.ajax({
			url: "https://api.flickr.com/services/feeds/photos_public.gne",
			dataType: "json",
			data: {
				tags: "brasília",
				tagmode: "any",
				format: "json"
			},
			success: function(data){
				$.each(data.items, function(i, item){
					$("#resposta").append($("<img/>").attr("src", item.media.m));
					if(i == 3) return false;
				});
			}
		});

		return false;
	});
});
