$(document).ready(function(){
	
	$(":text").keyup(function(){
		$("#msg").text($(this).val());
	}).focus(function(){
		$(this).css("background", "yellow")
		$("#msg").text("Focus");
	}).blur(function(){
		$(this).css("background", "#DDD")
		$("#msg").text("Blur");
	});
	
	//VALIDAÇÃO DE FORMULÁRIO
	$("form").submit(function(){
		if($(":text").val() == "XTI"){
			return true;
		}
		return false;
	});
	
	$("select").change(function(){
		var escolha = $("option:selected").text();
		$("#msg").text("Escolhido: "+ escolha);
	});
	
	$("textarea").select(function(){
		$("#msg").text("Selecionou");
	});
	
});