$(document).ready(function(){
	$("span").click(function(){
		
		var img = $("<img/>", {src:"img/bichinho.png", 
			title: "bichinho da W3Schools",
			click:function(){alert("bichinho estranho, não?")}
		});
		
		var ul = $("<ul/>").append($("<li/>").append("Programador JQuery"));
		$("#container").append(img).append(ul);
	});
});